<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/hippocampus.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2>
          <br />성격은 얌전하지만 수온 수질 변화에 민감한 반응을 보이는 해마는
          다루기 쉽지 않은 해양 동물중 하나다.
        </h2>
        <br />
        <h2>
          다른 종류의 물고기와 한 수조 안에 있으면 스트레스를 받아 이상행동을
          보인다고 하는데 좋아하는 사람이 다가오면 속으론 좋아해도 겉으론 차갑게
          반응하는 INFJ와 겹쳐 보인다.
        </h2>
        <br />
        <h2>
          INFJ는 연애를 하면 한 명만 바라보는 스타일인데 해마 역시 그렇다. 아내
          대신 아기를 낳는 진정한 ‘아내 바라기’이니 말이다.
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
  name: "Hippocampus",
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
  height: 95%;
}
</style>
