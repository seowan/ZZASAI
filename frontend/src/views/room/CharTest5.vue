<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1> 캐릭터(성향) 테스트 </h1>
    <div class="py-3 my-2"></div>
    <h1>4/4</h1>
    <br><br>
    <h1>친구와 여행을 간다 나는 어떤 스타일인가?</h1>
    <br>
    <b-button type="button" variant="primary" class="btn btn-lg" v-on:click="iyes()">여행 일주일 전부터 계획표를 쫘악</b-button>
    <b-button type="button" variant="danger" class="btn btn-lg" v-on:click="ino()">무계획이 계획인거다 일단 가고봐~</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
      }
  },
  methods: {
    next() {
      this.$router.push('/char-test6');
    },
    iyes: function () {
      this.$store.state.i = 1;
      this.$router.push('/char-test6');
    },
    ino: function () {
      this.$store.state.i = 2;
      this.$router.push('/char-test6');
    },
  }
}

</script>

<style>

</style>