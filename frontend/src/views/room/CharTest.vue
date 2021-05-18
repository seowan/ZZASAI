<template>
  <!-- 캐릭터 테스트 -->
  <div id="char-test">
    <h1> 성격유형검사 ( 동물편 ) </h1>
    <!--<img src="~@/assets/bgs/mbti.png" alt="mbti image" />-->
    <div class="py-1 my-4"></div>
      <div class="row">
        <div class="col offset-md-2">
        <img src="~@/assets/mbti/animal.png" alt="mbti image"/>
        </div>
        <div class="col-7">
          <br><br><br>
        <h1> 신뢰 기반 검사 </h1>
        <br>
        <h4> 해당 검사는 신뢰도가 </h4>
        <h4> 아주 높습니다 </h4>
        <h4> 신뢰도 9.99% </h4>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="sendInfo">검사 시작</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CharTest',
  data(){
    return{
      socket: this.$store.state.socket,
    };
  },
  mounted() {
    this.socket.on("userboolean", (userboolean) => {
      this.$store.state.userlist_boolean = userboolean.userlist_boolean;
      console.log("changed user list: ", this.$store.state.userlist_boolean);
    });
  },
  methods: {
    next() {
      this.$router.push({name: 'CharTest2', params: {roomcode: this.$store.state.roomcode}})
    },
    sendInfo () {
      this.$store.state.socket.emit("mbti", this.$store.state.roomcode, this.$store.state.username, 
      this.$store.state.userlist, false);
      // this.$router.push('/char-test2');
      this.$router.push({name: 'CharTest2', params: {roomcode: this.$store.state.roomcode}})
    }
  },
  created () {
    if (this.$store.state.roomcode == undefined || this.$store.state.username == undefined) {
      this.$router.push({name: 'Main'})
    }
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://wallpapercave.com/wp/wp6365505.png' + ')';

    this.$store.state.socket.emit("mbti", this.$store.state.roomcode, this.$store.state.userinfo.username, 
    this.$store.state.userlist, false);
  },
}

</script>

<style scoped>
.col img{
position: absolute; top:0; left: 0;
width: 140%;
height: 130%;
}
</style>