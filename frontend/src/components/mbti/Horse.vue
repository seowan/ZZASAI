<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/horse.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />충성심이 강한 말은 사람과 떼어 놓을 수 없는 동물이다.</h2>
        <br />
        <h2>
          말은 말을 타고 있는 사람과 교감이 가능한데 이처럼 상대방의 기분을 두루
          살필 줄 안다는 점, 자기 일이 아닌데 자기 일처럼 성심성의껏 도와주는
          점,
        </h2>
        <br />
        <h2>
          잘했을 땐 당근을 달라며 칭찬을 갈구한다는 점에서 ESFJ의 모습을 엿볼 수
          있다.
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
  name: "Horse",
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
  height: 120%;
}
</style>
