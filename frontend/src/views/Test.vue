<template>
  <div id="test">
    <user-video :stream-manager="publisher" />
    <user-video v-for="sub in subscribers" :key="sub.stream.connection.connectionId" :stream-manager="sub" />
  </div>
</template>

<script>
import { OpenVidu } from 'openvidu-browser'

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
      return this.createSession(sessionId).then(sessionId => this.createToken(sessionId))
    },
    // createToken: function (sessionId) {
		// 	return new Promise((resolve, reject) => {
		// 		axios.post(`${OPENVIDU_SERVER_URL}/openvidu/api/sessions/${sessionId}/connection`, {}, {
    //       auth: {
    //         username: 'OPENVIDUAPP',
    //         password: OPENVIDU_SERVER_SECRET,
    //       },
    //     })
		// 			.then(res => res.data)
		// 			.then(data => resolve(data.token))
		// 			.catch(err => reject(err.response))
		// 	})
		// },
  },
  mounted() {
    // openvidu 객체 생성
    this.OV = new OpenVidu()

    // 세션 초기화
    this.session = this.OV.initSession()

    // 새로운 stream(유저) 추가
    this.session.on('streamCreated', ({ stream }) => {
      let subscriber = this.session.subscribe(stream, undefined)
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
          this.mainStreamManager = this.publisher
  
          this.session.publish(this.publisher)
        })
        .catch(err => console.log('세션 커넥트 에러', err.code, err.message))
    })
  }
}
</script>

<style>

</style>