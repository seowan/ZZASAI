<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1> 캐릭터(성향) 테스트 </h1>
    <div class="py-3 my-2"></div>
    <h1>총 검사 시간은 1분 내외입니다</h1>
    <h1>혹 질문이 마음에 들지 않더라도 정직하게 답변하십시오</h1>
    <br><br>
    <h1>1/4</h1>
    <h1>Q. 데이트가 없는 주말에 나는</h1>
    <br>
    <b-button type="button" variant="primary" class="btn btn-lg" v-on:click="myes()">단톡에 연락해서 친구들과 약속을 잡는다</b-button>
    <b-button type="button" variant="danger" class="btn btn-lg" v-on:click="mno()">침대랑 하루 종일 물아일체가 된다</b-button>
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
      this.$router.push('/char-test3');
    },
    myes: function () {
      this.$store.commit('myes')
      this.$router.push('/char-test3');
    },
    mno: function () {
      this.$store.commit('mno')
      this.$router.push('/char-test3');
    },
  }
}

</script>

<style>

</style>