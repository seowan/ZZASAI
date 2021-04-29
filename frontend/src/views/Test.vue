<template>
  <div id="test">
    <!-- 내 비디오 -->
    <!-- <user-video class="my-video" :stream-manager="publisher" /> -->
    <!-- 전체 비디오 -->
    <user-video class="user-videos" v-for="sub in subscribers" :key="sub.stream.connection.connectionId" :stream-manager="sub" />
    <div class="leave-btn" @click="leaveSession">나가기</div>
  </div>
</template>

<script>
import axios from 'axios'
import { OpenVidu } from 'openvidu-browser'
import UserVideo from '@/components/UserVideo'

axios.defaults.headers.post['Content-Type'] = 'application/json'

const OPENVIDU_SERVER_URL = "https://" + location.hostname + ":4443"
const OPENVIDU_SERVER_SECRET = "MY_SECRET"

export default {
  name: 'Test',
  components: {
    UserVideo
  },
  data: function () {
    return {
      OV: undefined,
      session: undefined,
      publisher: undefined,
      subscribers: [],

      mySessionId: 'SessionA',

      mainStreamManager: undefined,
    }
  },
  methods: {
    getToken: function (sessionId) {
      console.log('토큰 받기 시작')
      return this.createSession(sessionId).then(sessionId => this.createToken(sessionId))
    },
    createToken: function (sessionId) {
			return new Promise((resolve, reject) => {
				axios.post(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`, {}, {
            auth: {
              username: 'OPENVIDUAPP',
              password: OPENVIDU_SERVER_SECRET,
            },
          })
            .then(res => res.data)
            .then(data => resolve(data.token))
            .catch(err => reject(err.response))
			})
		},
    createSession: function (sessionId) {
      console.log('세션 생성')
			return new Promise((resolve, reject) => {
				axios.post(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions`, JSON.stringify({
						customSessionId: sessionId,
					}), {
						auth: {
							username: 'OPENVIDUAPP',
							password: OPENVIDU_SERVER_SECRET,
						},
					})
					.then(response => {
            console.log(response.data)
            return response.data
          })
					.then(data => resolve(data.id))
					.catch(error => {
						if (error.response.status === 409) {
							resolve(sessionId)
						} else {
							console.warn(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`);
							if (window.confirm(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`)) {
								location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`)
							}
							reject(error.response)
						}
					})
			})
		},
    leaveSession: function () {
      if (this.session) this.session.disconnect()

			this.session = undefined
			this.mainStreamManager = undefined
			this.publisher = undefined
			this.subscribers = []
			this.OV = undefined

      this.$router.push({ name: 'Main' })
    }
  },
  mounted() {
    // openvidu 객체 생성
    this.OV = new OpenVidu()

    // 세션 초기화
    this.session = this.OV.initSession()

    this.session.on('streamCreated', ({ stream }) => {
      let subscriber = this.session.subscribe(stream)
      this.subscribers.push(subscriber)
    })

    this.session.on('streamDestroyed', ({ stream }) => {
      const index = this.subscribers.indexOf(stream.streamManager, 0)
      if (index >= 0) {
        this.subscribers.splice(index, 1)
      }
    })

    // Openvidu 서버(Docker)에서 토큰 받기 -> 세션에 연결
    this.getToken(this.mySessionId).then(token => {
      // 내이름을 params로 전달
      this.session.connect(token, { clientData: this.$route.params.userName })
        .then(() => {
          let publisher = this.OV.initPublisher(undefined, {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,     // 오디오 설정
            publishVideo: true,     // 비디오 설정
            resolution: '320x240',  // 해상도
            frameRate: 30,
            insertMode: 'APPEND',
            mirror: false
          })

          this.publisher = publisher
          this.mainStreamManager = publisher

          // 유저 subscriber에 나도 추가
          this.subscribers.push(publisher)
  
          this.session.publish(this.publisher)
        })
        .catch(err => console.log('세션 커넥트 에러', err.code, err.message))
    })
  }
}
</script>

<style>

</style>