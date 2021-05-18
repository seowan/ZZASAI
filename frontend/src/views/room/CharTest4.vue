<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1> 캐릭터(성향) 테스트 </h1>
    <div class="py-3 my-2"></div>
    <h1>3/4</h1>
    <br><br>
    <h1>가벼운 차사고가 났다 친구에게 카톡을 하는데 어떤 느낌에 가까운가?</h1>
    <br>
    <b-button type="button" variant="primary" class="btn btn-lg" v-on:click="tyes()">나 차 사고 났어 ㅠㅠ( 위로해줘 )</b-button>
    <b-button type="button" variant="danger" class="btn btn-lg" v-on:click="tno()">나 차 사고 났어ㅋㅋ ( 알아두라고 )</b-button>

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
      this.$router.push({name: 'CharTest5', params: {roomcode: this.$sotre.state.roomcode}})
    },
    tyes: function () {
      this.$store.state.t = 1;
      this.$router.push({name: 'CharTest5', params: {roomcode: this.$sotre.state.roomcode}})
    },
    tno: function () {
      this.$store.state.t = 2;
      this.$router.push({name: 'CharTest5', params: {roomcode: this.$sotre.state.roomcode}})
    },
  }
}

</script>

<style>

</style>