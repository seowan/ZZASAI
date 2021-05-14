<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/parrot.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />밝고, 사랑스럽고 장난기 많은 앵무새.</h2>
        <br />
        <h2>
          듣기만 해도 ESFP 성격이 떠오르지 않는가? 무엇이든 빨리배우고 익힌다는
          점, 어디서든 적응을 잘하고 사교적이라는 점,
        </h2>
        <br />
        <h2>
          사람들에게 둘러싸이는 것을 좋아하는 ‘관종’이라는 점에서 이 둘의
          공통점을 발견할 수 있다.
        </h2>
        <br />
        <button type="button" class="btn btn-dark btn-lg" v-on:click="sendInfo">
          Next
        </button>
      </div>
    </div>

    <!--<button type="button" class="btn btn-dark btn-lg" v-on:click="next">Next</button>-->
  </div>
</template>

<script>
export default {
  name: "Parrot",
  data() {
    return {
      socket: this.$store.state.socket,
    };  },
  mounted() {
    this.socket.on("userboolean", (userboolean) => {
      this.$store.state.userlist_boolean = userboolean.userlist_boolean;
      console.log("changed user list: ", this.$store.state.userlist_boolean);
    });
  },
  methods: {
    next() {
      this.updateArray(this.$store.state.userlist, this.$store.state.username)
      console.log(this.$store.state.userlist_boolean);
      this.$router.push("/loading");
    },
    updateArray(myArray, oldValue){
        const index = myArray.indexOf(oldValue);
        if (index !== -1) {
         this.$store.state.userlist_boolean[index] = this.$store.state.m*1000+this.$store.state.b*100+this.$store.state.t*10+this.$store.state.i;
        }
    },
    sendInfo() {
      this.$store.state.socket.emit("mbti2", this.$store.state.roomcode, this.$store.state.username, 
      this.$store.state.userlist,
      this.$store.state.m*1000+this.$store.state.b*100+this.$store.state.t*10+this.$store.state.i);
      this.$router.push('/loading'); 
    },
  },
};
</script>

<style scoped>
.col-4 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  height: 130%;
}
</style>
