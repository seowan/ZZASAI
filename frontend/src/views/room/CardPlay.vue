<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play" class="my-0 py-0">
    <!-- <h3> 질문 카드 게임 </h3> -->
    <div v-if="cardImageFront" class="scene scene--card my-0 py-0">
      <div class="card" @click="flipCard">
        <img class="card__face card__face--front" :src="cardImageFront">
        <img class="card__face card__face--back" :src="cardImageBack">
      </div>
    </div>
    <div id="rotate-div" class="chand"></div>
  </div>
</template>

<script>
import CMRotate from '@/assets/js/CMRotate.js'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL;
var backgroundImages = []
// var target = document.getElementById("rotate-div")

export default {
  name: 'CardPlay',
  data: function () {
    return {
      cards: {},
      selected_card_no: null,
      selected_card_front: null,
      selected_card_back: null,
      selected_card_id: null,
      socket: this.$store.state.socket,
    }
  },
  computed: {
    cardImageFront () {
      return this.selected_card_front
    },
    cardImageBack () {
      return this.selected_card_back
    },
  },
  methods: {
    clickCard (no, target_id) {
      this.socket.emit("cardselect",no,target_id,this.cards, backgroundImages);
      this.afterClickCard(no,target_id,this.cards,this.backgroundImages);
    },
    afterClickCard(no, target_id, cards){
      // 선택하면 기존 카드는 background 리스트에서 삭제하기!
      if (this.selected_card_no != null && this.selected_card_no != no) {
        // var item = document.getElementById('cm-rotate-' + this.selected_card_id)
        var item = document.getElementById(this.selected_card_id)
        item.remove()
      } 
     
      var card = document.querySelector('.card');
      if (card) {
        card.classList.remove('is-flipped')
      }

      this.selected_card_no = no
      this.selected_card_front = cards[no]["cardurl_front"]
      this.selected_card_id = target_id
      this.selected_card_back = cards[no]["cardurl_back"]


    },
    flipCard() {
      var card = document.querySelector('.card');
      card.classList.toggle('is-flipped');
    },
    async getData () {
      await axios({
          method: "get",
          url: `${SERVER_URL}/api/card/list/`,
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Access-Control-Allow-Origin": "*",
          },
        })
          .then((res) => {
            
            var i;
            for (i = 0; i < res.data.length; i++) {
              backgroundImages.push(res.data[i]["cardurl_front"])
            }
            this.cards = res.data
          })
          .catch((err) => {
            console.log(err);
            alert("오류가 발생했습니다. 다시 시도하세요");
          });
    },
  },
  async mounted () {
    await this.getData()

      CMRotate.init('rotate-div', 200, 300, 50, 30, 200, backgroundImages, this.clickCard);
      // CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);
      this.socket.on("cardselected",(no,target_id, cards, backgroundImages)=>{
        console.log("card : "+no);
        console.log("cards : "+ cards);
        console.log("background : "+ backgroundImages);
        CMRotate.init('rotate-div', 200, 300, 50, 30, 200, backgroundImages, this.clickCard);
        this.afterClickCard(no,target_id,cards);
      })
  },
}
</script>

<style type="text/css" scoped>
html, body {
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* position: relative; */
}

/* * {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
} */

#rotate-div {
    overflow: hidden;
    width:100%;
    height:100%;
}

a {
    color: #ff0000;
    text-decoration: none;
}
a:hover {
    color: #000;
}

.chand {
    /* cursor: url(../../assets/cards/sample/hand.cur), move; */
}
.chand:active {
    /* cursor: url(../../assets/cards/sample/hand-h.cur), move; */
}


/* card flip */
.scene {
  position: absolute;
  left: 40%;
  /* 200px 260px */
  width: 20%;
  height: 55%;
  /* border: 1px solid #CCC; */
  margin: 40px 0;
  perspective: 600px;
}

.card {
  background: transparent;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
}

.card.is-flipped {
  transform: rotateY(-180deg);
}

.card__face {
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 260px;
  /* color: white; */
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.card__face--front {
  /* background: red; */
}

.card__face--back {
  /* background: blue; */
  transform: rotateY(180deg);
}

</style>