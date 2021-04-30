<template>
<div>
    <h1>모든 유저의 성격분류가 완료되었습니다.</h1>
    <h2>여기를 어떻게 해야 이쁠지 고민중..</h2>
    
    <div class="py-3 my-1"></div>
      <div class="row">
        <div class="col-3">
          <div class="scene scene--card">
            <div class="card" @click="flipCard">
              <img class="cover" src="~@/assets/mbti2/cat.png" alt="mbti image"/>
              <div class="card__face card__face--back">
                <h2>ENFJ 강아지 규용</h2>
                <h3>#개방적 #낭만적 #이타적 #리더십</h3>
              </div>
            </div>
         </div>
        </div>
        

        
        <div v-if="showHasan" class="col-3" v-on:click="myMethod()">
          <img class="cover" src="~@/assets/mbti2/cat.png" alt="mbti image"/>
        </div>
        <div v-else class="col-3" v-on:click="myMethod()">
          <h1>ENFJ 강아지 규용</h1>
          <h3>#개방적 #낭만적<br>#이타적 #리더십</h3>
        </div>
        <div class="col-3">
          <img class="cover" src="~@/assets/mbti2/dog.png" alt="mbti image"/>
        </div>

        <div class="col-3">
          <img class="cover" src="~@/assets/mbti2/parrot.png" alt="mbti image"/>
        </div>

         <div class="col-3">
          <img class="cover" src="~@/assets/mbti2/turtle.png" alt="mbti image"/>
        </div>
         <div class="col-3">
          <img class="cover" src="~@/assets/mbti2/fox.png" alt="mbti image"/>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
        showHasan: true
      }
  },
  methods: {
    myMethod() {
      if(this.showHasan == true)
      this.showHasan = false
      else
      this.showHasan = true
      console.log(this.showHasan)
    },
   flipCard: function () {
     var card = document.querySelector('.card');
     card.classList.toggle('is-flipped');
   },
  },
  components: {
    
  },
}
</script>

<style scoped>
.col-3{
  height: 350px;
  padding: 35px;
  border-radius: 10px 10px 10px 10px;
  }
.col-3 img{
width: 100%;
height: 100%;
}
.cover{
  object-fit: cover;
}
body { font-family: sans-serif; }

.scene {
  width: 315px;
  height: 285px;
  perspective: 600px;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  object-fit: cover;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  background: red;
}

.card__face--back {
  background: #343D40;
  transform: rotateY(180deg);
  margin-left:auto;
  margin-right:auto;
}

</style>