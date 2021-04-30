<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
    <div class="row">
      <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/wolf.png" alt="mbti image" />
      </div>
      <div class="col-5">
        <h2>
          <br />책임감 강하고 사람들을 인솔하는데 탁월한 능력을 보이는 ESTJ는
          <br />우두머리 늑대와 닮아있다.
        </h2>
        <br />
        <h2>
          리더로써 효율적으로 사냥하는 방법을 궁리하고, 특성 상 무리지어 다니는
          늑대들을 이끈다는 점에서 그렇다.
        </h2>
        <br />
        <h2>
          또 자신이 책임을 맡고 있는 그룹에 헌신적이라는 점 또한 비슷하다고 볼
          수 있다.
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
  name: "Wolf",
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
