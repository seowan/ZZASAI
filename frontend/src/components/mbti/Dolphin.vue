<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/dolphin.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />돌고래는 창의적인 방법으로 물고기를 잡는다.</h2>
        <br />
        <h2>
          먹잇감이 눈치 채지 못하도록 위장하기 위해 해초로 코를 가리기도 하는
          것.
        </h2>
        <br />
        <h2>
          바다 위로 텀블링을 하며 사람들의 관심을 유발하고 돌고래 소리를 내며
          장난을 치는 돌고래야말로 항상 업 되어 있는 ENFP에게 잘 매치되는 동물이
          아닐는지?
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
  name: "Dolphin",
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
