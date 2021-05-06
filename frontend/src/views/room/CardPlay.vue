<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play">
    <h3> 질문 카드 게임 </h3>
    <img id="selected_card" src="@/assets/cards/card_front/black1.png" alt="asdasd">
    <div class="my-3"></div>
    <div id="rotate-div" class="chand"></div>
    <!-- <img src="@/assets/cards/card_front/black1.png" alt=""> -->
  </div>
</template>

<script>
import CMRotate from '@/assets/js/CMRotate.js'

export default {
  name: 'CardPlay',
  methods: {
    clickCard (no) {
      // 매개인자 no를 넘겨받으면 해당 이미지로 변환
      alert('click no -' + (no +1));
      var selectedCard = document.getElementById("selected_card")

      console.log(selectedCard)
    },
  },
  mounted () {
    var backgroundImages = ["@/assets/cards/card_front/img1.jpg", "@/assets/cards/card_front/img2.jpg", "@/assets/cards/card_front/img3.jpg", "@/assets/cards/card_front/img4.jpg", "@/assets/cards/card_front/img5.jpg",
                            "@/assets/cards/card_front/img6.jpg", "@/assets/cards/card_front/img7.jpg", "@/assets/cards/card_front/img8.jpg", "@/assets/cards/card_front/img9.jpg", "@/assets/cards/card_front/img10.jpg",
                            "@/assets/cards/card_front/img11.jpg", "@/assets/cards/card_front/img12.jpg", "@/assets/cards/card_front/img13.jpg", "@/assets/cards/card_front/img14.jpg", "@/assets/cards/card_front/img15.jpg",
                            "@/assets/cards/card_front/img16.jpg", "@/assets/cards/card_front/img17.jpg", "@/assets/cards/card_front/img18.jpg"];

    CMRotate.init('rotate-div', 200, 300, 100, 20, 200, backgroundImages, this.clickCard);
    // CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);

    
  },
}
</script>

<style type="text/css" scoped>
    #selected_card {
      /* background-image: url("../../assets/cards/card_front/img1.jpg"); */
      /* background-color: red; */
      height: 60%;
      width: 30%;
      position: absolute;
      left: 35%;
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

    #info-div {
        width: 300px;
        height: 50px;
        position: absolute;
        z-index: 12;
        left: 50%;
        top: 10px;
        margin-left: -150px;
        font-family: Helvetica, sans-serif;
        font-size: 12px;
        color: #333;
        text-align: center;
        line-height: 20px;
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