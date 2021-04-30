<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/lizard.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2><br>
        똑똑하고 환경에 적응을 잘하고, 호기심이 많다는 점에서 도마뱀과 INTP은 공통점이 많다.
        </h2>
        <br>
        <h2> 
        동물학자들은 도마뱀이 자신만의 방법으로 사냥을 하는데 그 수법이 매우 창의적이라고 말한다. 
        곤충을 잡기 어려운 환경에서 살다 보니 다양한 아이디어를 개발하게 되었다는 게 그들의 말이다.
        </h2>
        <br>
        <h2>
        기발하고 혁신적이며 엉뚱한 아이디어를 많이 내는 INTP와 비교되는 이유도 이 때문이다.
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
height: 120%;
}
</style>