<template>
  <!-- 캐릭터 테스트 -->
  <div id="char-test6">
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/parrot.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2> <br>밝고, 사랑스럽고 장난기 많은 앵무새. </h2>
        <br>
        <h2> 듣기만 해도 ESFP 성격이 떠오르지 않는가?<br>
          무엇이든 빨리배우고 익힌다는 점, <br>
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
   
    <!-- 
      16가지 경우를 나눠줘야 하기에 각 선택시 변수를 다르게 저장해서 조건문으로 나눠줘야 하기 때문에
      vuex 공부중입니다. 그리고 컴포넌트 호출 부분도 공부중입니다
    -->
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
    }
  }
}
</script>

<style>
.col-4 img{
position: absolute; top:0; left: 0;
width: 70%;
height: 130%;
}
</style>