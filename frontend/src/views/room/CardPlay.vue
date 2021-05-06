<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play">
    <h3> 질문 카드 게임 </h3>
    <div id="test">test</div>
    <div id="rotate-div" class="chand"></div>
  </div>
</template>

<script>
import CMRotate from '@/assets/js/CMRotate.js'
export default {
  name: 'CardPlay',
  methods: {

  },
  created () {
    window.onload = function () {

            var backgroundImages = ["cards/sample/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg", "images/img5.jpg",
                                    "images/img6.jpg", "images/img7.jpg", "images/img8.jpg", "images/img9.jpg", "images/img10.jpg",
                                    "images/img11.jpg", "images/img12.jpg", "images/img13.jpg", "images/img14.jpg", "images/img15.jpg",
                                    "images/img16.jpg", "images/img17.jpg", "images/img18.jpg"];

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
#test{
    width: 300px;
    height:300px;
    background:url('C:/ssafy/LAST/s04p31a205/frontend/src/assets/cards/sample/img1.jpg');
}
</style>