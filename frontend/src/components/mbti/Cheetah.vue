<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/cheetah.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2><br>추진력이 뛰어난 ENTJ는 목표가 생기면 시속 112km로 달려가는 치타와 많이 닮았다.</h2>
        <br>
        <h2> 
        먹잇감이 눈치채기 전까지 조금씩 다가간 다음에 순간적으로
        달려간다는 부분은 일을 순차적으로 빠르게 처리하는 
        ENTJ의 업무 성향과 비슷하다.
        </h2>
        <br>
        <h2>
        혼자 사냥을 나가는 치타처럼 ENTJ 역시
        일을 여럿이 하기 보다 혼자 하는 게 더 편한 개인주의 스타일이다.
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