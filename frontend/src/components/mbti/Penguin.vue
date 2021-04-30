<template>
  <!-- 캐릭터 테스트 -->
  <div>
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/penguin.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2> <br>ISFJ는 동물로 치면 펭귄이라 할 수 있다.</h2>
        <br>
        <h2> 추위를 이겨 내기 위해 서로 감싸 안는 펭귄처럼 사람을 잘 배려하고, 
          기억력이 좋아서 매년 마다 같은 자리로 다시 돌아오는 펭귄같이 
          기념일 하나 놓치지 않고 잘 기억한다는 점에서 그렇다.</h2>
        <br>
        <h2>
          또 일부일처제로 한 사람에게 헌신적이라는 부분에서 ‘빼박’ ISFJ다.
        </h2>
        <br>
        <button type="button" class="btn btn-dark btn-lg" v-on:click="next">Next</button>
        </div>
      </div>
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