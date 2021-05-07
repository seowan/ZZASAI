<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play">
    <h3> 질문 카드 게임 </h3>
    <img id="selected_card" src="@/assets/cards/card_front/black1.png" alt="asdasd">
    <div id="rotate-div" class="chand"></div>
    <!-- <img src="@/assets/cards/card_front/black1.png" alt=""> -->
  </div>
</template>

<script>
import CMRotate from '@/assets/js/CMRotate.js'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL;
var backgroundImages = []

export default {
  name: 'CardPlay',
  data: function () {
    return {
      cards: {},
    }
  },
  methods: {
    clickCard (no) {
      // 매개인자 no를 넘겨받으면 해당 이미지로 변환
        alert('click no -' + (no +1));
        var selectedCard = document.getElementById("selected_card")
        console.log(this.cards[no]["cardurl_front"])

        // selectedCard.style.backgroundImages = 'url("https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/black1.png")'
        selectedCard.style.backgroundImages = 'url("https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/black1.png")'
        // console.log(selectedCard)
    },
    getData () {
      axios({
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

      CMRotate.init('rotate-div', 200, 300, 100, 20, 200, backgroundImages, this.clickCard);
      // CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);
    
  },
}
</script>

<style type="text/css" scoped>
#selected_card {
    /* background-image: url("../../assets/cards/card_front/img1.jpg"); */
    /* background-color: red; */
    height: 50%;
    width: 20%;
    position: absolute;
    left: 40%;
    /* display: none; */
}

html, body {
    width:100%;
    height:100%;
    margin: 0;
    padding: 0;
}

* {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

#rotate-div {
    overflow: hidden;
    /* position: relative; */
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
    /* cursor: url(images/hand.cur), move; */
}
.chand:active {
    /* cursor: url(images/hand-h.cur), move; */
}
</style>