<template>
  <!-- 메인 홀 -->
  <div id="hall">
    <div class="py-3 my-5"></div>

    
    <div class="row">
      <div class="col-3"></div>
      <div class="col-2 hall-card">
        <div class="hall-card-inner">
          <div class="hall-card-front">
            <img src="@/assets/icons/exam.png" alt="Avatar" style="width:100px;height:100px;">
          </div>
          <div class="hall-card-back">
            <h2 class="hall-card-text">성향테스트</h2>
          </div>
        </div>
      </div>
      <div class="col-2 hall-card">
        <div class="hall-card-inner">
          <div class="hall-card-front">
            <img src="@/assets/icons/pencil.png" alt="Avatar" style="width:100px;height:100px;">
          </div>
          <div class="hall-card-back">
            <h2 class="hall-card-text">캐치마인드</h2>
          </div>
        </div>
      </div>
      <div class="col-2 hall-card">
        <div class="hall-card-inner">
          <div class="hall-card-front">
            <img src="@/assets/icons/card.png" alt="Avatar" style="width:100px; height1300px;">
          </div>
          <div class="hall-card-back">
            <h2 class="hall-card-text">질문카드</h2>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hall',
}
</script>

<style>
/* Google Font - Cute Font */
@import url('https://fonts.googleapis.com/css2?family=Cute+Font&display=swap');

body {
  background-image: url('~@/assets/bgs/hall.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  /* opacity: 0.5; */
}

.hall-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.hall-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  border: 4px solid white;
  margin: 0 auto;
  max-width: 500px;
}

.hall-card:hover .hall-card-inner {
  transform: rotateY(180deg);
}

.hall-card-front, .hall-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  vertical-align: middle;
  margin-top: 100px;
}

.hall-card-front {
  /* background-color: #bbb; */
  color: black;
}

.hall-card-back {
  /* background-color: #2980b9; */
  color: white;
  transform: rotateY(180deg);
}


.hall-card-text {
  color: black;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: 'Cute Font', cursive;
}
</style>