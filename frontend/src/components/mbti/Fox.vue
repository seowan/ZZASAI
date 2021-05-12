<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/fox.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2>
          <br />여우는 우리에게 잘 알려진 대로 다재다능하고 호기심이 많다.
        </h2>
        <br />
        <h2>
          관심사가 다양하고 일을 잘 벌린다는 점에서 ENTP와 여우는 많이 닮아있다.
        </h2>
        <br />
        <h2>
          의심이 많아서 사람들 말에 ‘정말일까’라며 의문을 갖는다는 점 또한
          그렇다.
        </h2>
        <br />
        <button type="button" class="btn btn-dark btn-lg" v-on:click="next">
          Next
        </button>
      </div>
    </div>

    <!--<button type="button" class="btn btn-dark btn-lg" v-on:click="next">Next</button>-->
  </div>
</template>

<script>
export default {
  name: "Fox",
  data() {
    return {};
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
