<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1> 캐릭터(성향) 테스트 </h1>
    <div class="py-3 my-2"></div>
    <h1>2/4</h1>
    <br><br>
    <h1>데스노트를 보고 '만약 나에게 데스노트가 있다면'을 상상해본적이 있는가?</h1>
    <br>
    <b-button type="button" variant="primary" class="btn btn-lg" v-on:click="byes()">그렇다</b-button>
    <b-button type="button" variant="danger" class="btn btn-lg" v-on:click="bno()">아니다</b-button>

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
      this.$router.push('/char-test4');
    },
    byes: function () {
      this.$store.state.b = 1;
      this.$router.push('/char-test4');
    },
    bno: function () {
      this.$store.state.b = 2;
      this.$router.push('/char-test4');
    },
  }
}

</script>

<style>

</style>