<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/elephant.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2><br />코끼리는 공감능력이 뛰어난 동물 중 하나다.</h2>
        <br />
        <h2>
          코로 물을 뿌려 다른 코끼리의 상처에 묻은 먼지를 대신 닦아주거나 동료
          코끼리가 죽으면 눈물도 흘릴 줄 아는 것.
        </h2>
        <br />
        <h2>
          INFP 역시 둘째가라면 서러운 공감능력자 중 한 명인 만큼 코끼리와 INFP
          둘 중 누가 더 공감지수가 높을지 자못 궁금해진다.
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
  name: "Elephant",
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
  height: 120%;
}
</style>
