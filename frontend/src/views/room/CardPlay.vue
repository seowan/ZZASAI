<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play">
    <h3> 질문 카드 게임 </h3>
    <div id="info-div">
        <a href="http://blog.cmiscm.com/?p=3303">cm-rotate.js</a> -
        <a href="https://github.com/cmiscm/cm-rotate.js">fork me on github</a>
    </div>

    <div id="rotate-div" class="chand"></div>
  </div>
</template>


<script>
import CMRotate from '@/assets/js/CMRotate.js'

export default {
  name: 'CardPlay',
  created () {
        window.onload = function () {

        var backgroundImages = ["../../assets/cards/sample/img1.jpg", "../../assets/cards/sample/img2.jpg", "../../assets/cards/sample/img3.jpg", "../../assets/cards/sample/img4.jpg", "../../assets/cards/sample/img5.jpg",
                                "../../assets/cards/sample/img6.jpg", "../../assets/cards/sample/img7.jpg", "../../assets/cards/sample/img8.jpg", "../../assets/cards/sample/img9.jpg", "../../assets/cards/sample/img10.jpg",
                                "../../assets/cards/sample/img11.jpg", "../../assets/cards/sample/img12.jpg", "../../assets/cards/sample/img13.jpg", "../../assets/cards/sample/img14.jpg", "../../assets/cards/sample/img15.jpg",
                                "../../assets/cards/sample/img16.jpg", "../../assets/cards/sample/img17.jpg", "../../assets/cards/sample/img18.jpg"];

        CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);

        function clickFn(no) {
            alert('click no - ' + (no + 1));
        }
    }
  }
}
</script>

<style type="text/css">
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
    position: relative;
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