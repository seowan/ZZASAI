<template>
  <div id="test">
    <user-video :stream-manager="publisher" />
    <user-video v-for="sub in subscribers" :key="sub.stream.connection.connectionId" :stream-manager="sub" />
  </div>
</template>

<script>
import axios from 'axios'
import { OpenVidu } from 'openvidu-browser'

axios.defaults.headers.post['Content-Type'] = 'application/json'

// const OPENVIDU_SERVER_URL = "https://" + location.hostname + ":4443"
const OPENVIDU_SERVER_URL = "https://192.168.99.100:4443"
const OPENVIDU_SERVER_SECRET = "MY_SECRET"

export default {
  name: 'Test',
  data: function () {
    return {
      OV: undefined,
      session: undefined,
      publisher: undefined,
      subscribers: [],

      mySessionId: 'SessionA',
      myUserName: 'Participant' + Math.floor(Math.random() * 100),

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
							resolve(sessionId);
						} else {
							console.warn(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`);
							if (window.confirm(`No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}\n\nClick OK to navigate and accept it. If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`)) {
								location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
							}
							reject(error.response);
						}
					});
			});
		},
  },
  mounted() {
    // openvidu 객체 생성
    this.OV = new OpenVidu()

    // 세션 초기화
    this.session = this.OV.initSession()

    // 새로운 stream(유저) 추가
    this.session.on('streamCreated', ({ stream }) => {
      let subscriber = this.session.subscribe(stream)
      this.subscribers.push(subscriber)
    })

    this.getToken(this.mySessionId).then(token => {
      this.session.connect(token, { clientData: this.myUserName })
        .then(() => {
          let publisher = this.OV.initPublisher(undefined, {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
            resolution: '640x480',
            frameRate: 30,
            insertMode: 'APPEND',
            mirror: false
          })

          this.publisher = publisher
          this.mainStreamManager = publisher
  
          this.session.publish(this.publisher)
        })
        .catch(err => console.log('세션 커넥트 에러', err.code, err.message))
    })
  }
}
</script>

<style>

</style>