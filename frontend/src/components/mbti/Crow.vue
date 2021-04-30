<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/crow.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />지략이 뛰어나고 독립적이며 똑똑한 까마귀.</h2>
        <br />
        <h2>
          그들의 도구 사용 능력은 상상을 초월한다. 빨대를 만들어서 야자수를
          마시기도 하고 나무 열매를 깨기 위해 차 밑에 갖다 놓기도 하는 것. 문제
          해결 능력이 뛰어나고 도구를 잘 다룬다는 점에서 까마귀는 ISTP와 비슷한
          점이 많다.
        </h2>
        <br />
        <h2>
          호기심이 많은 성격과 뛰어난 관찰력으로 누가 가르쳐 주지 않아도 혼자서
          일을 척척 잘한다는 부분 또한 닮아 있다.
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
  name: "Crow",
  data() {
    return {};
  },
  methods: {
    next() {
      this.$router.push("/char-test7");
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
  height: 100%;
}
</style>
