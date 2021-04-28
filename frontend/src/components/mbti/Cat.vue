<template>
  <!-- 캐릭터 테스트 -->
  <div id="char-test6">
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/cat.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2><br>
        혼자 있는 것을 즐기고, 감정 표현을 잘 하지 않는 고양이는 <br> ISFP와 많이 닮아있다.
        </h2>
        <br>
        <h2> 
        잡으려 하면 도망가고, 어느새 사람에게 다가와 <br> 살갑게 구는 고양이는 집사의 기분을 맞추는데 선수.
        </h2>
        <br>
        <h2>
        ISFP 역시 감정 표현은 잘 하지 않지만 갈등 생기는 것이 싫어 <br> 눈치껏 
        사람들이 하자는 대로 맞춰준다는 점에서 이 둘의 공통점을 찾아볼 수 있다.
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
  name: 'CharTest6',
  data() {
      return {
        selected: 'radio1',
        options: [
          { text: '그렇다', value: 'radio1' },
          { text: '아니다', value: 'radio2' },
        ]
      }
  }
}

</script>

<style>
.col-4 img{
position: absolute; top:0; left: 0;
width: 70%;
height: 120%;
}
</style>