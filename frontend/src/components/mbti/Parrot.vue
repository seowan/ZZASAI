<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/parrot.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2> <br>밝고, 사랑스럽고 장난기 많은 앵무새. </h2>
        <br>
        <h2> 듣기만 해도 ESFP 성격이 떠오르지 않는가?
          무엇이든 빨리배우고 익힌다는 점,
          어디서든 적응을 잘하고 사교적이라는 점, 
        </h2>
        <br>
        <h2>
          사람들에게 둘러싸이는 것을 좋아하는 ‘관종’이라는 점에서 
          이 둘의 공통점을 발견할 수 있다.
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
height: 130%;
}
</style>