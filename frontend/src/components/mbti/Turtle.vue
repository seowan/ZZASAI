<template>
  <!-- 캐릭터 테스트 -->
  <div id="char-test6">
    <h1>성격분류가 완료되었습니다.</h1>
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-4 offset-md-2">
        <img src="~@/assets/mbti/turtle.png" alt="mbti image"/>
        </div>
        <div class="col-5">
        <h2> <br>책상이 정리가 되어 있어야 일에 집중할 수 있고, 
          <br>매일 짜인 루틴대로 일을 하는 것이 편한 ISTJ</h2>
        <br>
        <h2> 원칙에 따라 일을 하는 이 유형은 바닷속에서 먹이를 찾아 
          <br> 유유히 헤엄치는 거북이와 많이 닮은 듯 보인다.</h2>
        <br>
        <h2>
         외로움을 느끼지 않는 거북이처럼 <br>스스로 묵묵히 일한 다는 점도 이 둘의 공통점.
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
height: 130%;
}
</style>