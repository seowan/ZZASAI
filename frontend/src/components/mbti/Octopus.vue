<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/octops.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />문어는 지능이 높기로 유명하다.</h2>
        <br />
        <h2>
          통발에 갇히더라도 탈출에 성공하고, 간단한 수학 문제를 풀기도 한다.
          심지어 월드컵 시즌엔 ‘점쟁이 문어’로 불리며 게임의 승패도 맞추기도
          했다.
        </h2>
        <br />
        <h2>
          문어는 타깃이 생기면 그 누구보다 전략적으로 빨리 접근하기 때문에 사냥
          성공률도 상당히 높은데 목표가 생기면 그 누구보다 빨리 달려간다는
          점에서 INTJ와 비슷하다고 볼 수 있다.
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
  name: "Octopus",
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
  height: 110%;
}
</style>
