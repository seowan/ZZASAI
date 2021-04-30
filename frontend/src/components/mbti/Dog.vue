<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/dog.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2><br>ENFJ는 자신의 의견을 내세우기 보다
        다른 사람들의 생각과 의견을 더 중요하게 생각하는 유형이다.</h2>
        <br>
        <h2> 
        눈치가 빠르고 여러 사람과 협업이 가능하다는 점에서
        ENFJ는 동물 중 강아지와 많이 닮아있다고 할 수 있다.
        </h2>
        <br>
        <h2>
        상대방의 감정을 살피면서도 궁금한 건 못 참아서
        오지랖 넓게 여기저기 간섭하고 다니는 것 또한 그렇다.
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
height: 110%;
}
</style>