<template>
<div>
    <h1>모든 유저의 성격분류가 완료되었습니다.</h1>
    <h2>여기를 어떻게 해야 이쁠지 고민중..</h2>
    <div class="py-3 my-1"></div>
      <div class="row">
       <div v-for="(userlist_boolean,index) in this.$store.state.userlist_boolean" :key="userlist_boolean" class="col-3">
          <div class="scene scene--card">
            <div class="card" @click="flipCard" v-if="userlist_boolean==2121">
              <img class="cover" src="~@/assets/mbti2/octopus.png" />
              <div class="card__face card__face--back">
                <h2>INTJ 문어 {{$store.state.userlist[index]}}</h2>
                <h3>#합리적 #독립성 #합리적 #독립성</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2122">
              <img class="cover" src="~@/assets/mbti2/Lizard.png" />
              <div class="card__face card__face--back">
                <h2>INTP 도마뱀 {{$store.state.userlist[index]}}</h2>
                <h3>#분석적 #독창적 #개방적 #호기심</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1121">
              <img class="cover" src="~@/assets/mbti2/cheetah.png" />
              <div class="card__face card__face--back">
                <h2>ENTJ 치타 {{$store.state.userlist[index]}}</h2>
                <h3>#자신감 #카리스마 #자신감 #카리스마</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1122">
              <img class="cover" src="~@/assets/mbti2/fox.png" />
              <div class="card__face card__face--back">
                <h2>ENTP 여우 {{$store.state.userlist[index]}}</h2>
                <h3>#지적 #독창적 #카리스마 #열정적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2111">
              <img class="cover" src="~@/assets/mbti2/hippocampus.png" />
              <div class="card__face card__face--back">
                <h2>INFJ 해마 {{$store.state.userlist[index]}}</h2>
                <h3>#창의적 #통찰력 #열정적 #이타적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2112">
              <img class="cover" src="~@/assets/mbti2/elephant.png" />
              <div class="card__face card__face--back">
                <h2>INFP 코끼리 {{$store.state.userlist[index]}}</h2>
                <h3>#공감력 #관대함 #개방적 #낭만적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1111">
              <img class="cover" src="~@/assets/mbti2/dog.png" />
              <div class="card__face card__face--back">
                <h2>ENFJ 강아지 {{$store.state.userlist[index]}}</h2>
                <h3>#관용성 #신뢰성 #이타적 #리더십</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1112">
              <img class="cover" src="~@/assets/mbti2/dolphin.png" />
              <div class="card__face card__face--back">
                <h2>ENFP 돌고래 {{$store.state.userlist[index]}}</h2>
                <h3>#인기쟁이 #친근함 #사교적 #활기참</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2221">
              <img class="cover" src="~@/assets/mbti2/turtle.png" />
              <div class="card__face card__face--back">
                <h2>ISTJ 거북이 {{$store.state.userlist[index]}}</h2>
                <h3>#정직함 #성실함 #책임감 #차분함</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2211">
              <img class="cover" src="~@/assets/mbti2/penguin.png" />
              <div class="card__face card__face--back">
                <h2>ISFJ 펭귄 {{$store.state.userlist[index]}}</h2>
                <h3>#이타적 #인내심 #상상력 #성실함</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1221">
              <img class="cover" src="~@/assets/mbti2/wolf.png" />
              <div class="card__face card__face--back">
                <h2>ESTJ 늑대 {{$store.state.userlist[index]}}</h2>
                <h3>#헌신적 #정직한 #계획적 #신뢰성</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1211">
              <img class="cover" src="~@/assets/mbti2/horse.png" />
              <div class="card__face card__face--back">
                <h2>ESFJ 말 {{$store.state.userlist[index]}}</h2>
                <h3>#책임감 #따뜻함 #사교적 #실용적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2222">
              <img class="cover" src="~@/assets/mbti2/crow.png" />
              <div class="card__face card__face--back">
                <h2>ISTP 까마귀 {{$store.state.userlist[index]}}</h2>
                <h3>#낙관적 #활기참 #합리적 #실용적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==2212">
              <img class="cover" src="~@/assets/mbti2/cat.png" />
              <div class="card__face card__face--back">
                <h2>ISFP 고양이 {{$store.state.userlist[index]}}</h2>
                <h3>#인기쟁이 #열정적 #상상력 #예술적</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1222">
              <img class="cover" src="~@/assets/mbti2/hyena.png" />
              <div class="card__face card__face--back">
                <h2>ESTP 하이에나 {{$store.state.userlist[index]}}</h2>
                <h3>#합리적 #독창적 #사교성 #에너지</h3>
              </div>
            </div>
            <div class="card" @click="flipCard" v-else-if="userlist_boolean==1212">
              <img class="cover" src="~@/assets/mbti2/parrot.png" />
              <div class="card__face card__face--back">
                <h2>ESFP 앵무새 {{$store.state.userlist[index]}}</h2>
                <h3>#대담함 #쇼맨십 #독창적 #사교적</h3>
              </div>
            </div>
         </div>
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