<template>
  <div>
    <h2>CardRotate</h2>
    <div id="rotate-div" class="chand"></div>
    <img src="@/assets/cards/card_front/black1.png" alt="">
    <div id="test">asdasdasds</div>
  </div>
</template>

<script>
import CMRotate from '@/assets/js/CMRotate.js'

export default {
  name: 'CardRotate',
  mounted () {
    var backgroundImages = ["@/assets/cards/card_front/img1.jpg", "@/assets/cards/card_front/img2.jpg", "@/assets/cards/card_front/img3.jpg", "@/assets/cards/card_front/img4.jpg", "@/assets/cards/card_front/img5.jpg",
                            "@/assets/cards/card_front/img6.jpg", "@/assets/cards/card_front/img7.jpg", "@/assets/cards/card_front/img8.jpg", "@/assets/cards/card_front/img9.jpg", "@/assets/cards/card_front/img10.jpg",
                            "@/assets/cards/card_front/img11.jpg", "@/assets/cards/card_front/img12.jpg", "@/assets/cards/card_front/img13.jpg", "@/assets/cards/card_front/img14.jpg", "@/assets/cards/card_front/img15.jpg",
                            "@/assets/cards/card_front/img16.jpg", "@/assets/cards/card_front/img17.jpg", "@/assets/cards/card_front/img18.jpg"];

    CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);

    function clickFn(no) {
        alert('click no - ' + (no + 1));
    }
  },
}
</script>

<style type="text/css" scope>
    #test {
      background-image: url("images/img1.jpg");
      background-color: red;
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