<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/hyena.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2><br>주변 일에 관심이 많은 ESTP는 하이에나와 닮아 있다.</h2>
        <br>
        <h2> 들판을 어슬렁거리는 하이에나는 사람들에게 좋지 않은 인식을 받고 있지만 사실은 그렇지 않다. 
          사자보다 더 뛰어난 사냥 실력과 오래 달려도 지치지
           않는 강한 체력을 갖추고 있는 것. 또 타협을 모색하고 문제를 해결하는
            능력이 뛰어나서 혼자 사냥할 때보다 함께 사냥을 할 때 성공 확률이 
            더 높은 동물이기도 하다.</h2>
        <br>
        <h2>
         갈등이 생기면 피하지 않고 중재하려 나서는 ESTP와 일맥상통한 부분.
        </h2>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="next">Next</button>
        </div>
      </div>
   
    <!--<button type="button" class="btn btn-dark btn-lg" v-on:click="next">Next</button>-->

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
      this.$router.push('/char-test7');
    },
  },
}

</script>

<style scoped>
.col-4 img{
position: absolute; top:0; left: 0;
width: 70%;
height: 95%;
}
</style>