<template>
    <!-- 질문 카드 게임 -->
    <div id="card-play">
        <h3>
            질문 카드 게임
        </h3>
        <!-- <div id = "test">test</div> -->
        <div id="rotate-div" class="chand"></div>
    </div>
</template>

<script>
    import CMRotate from '@/assets/js/CMRotate.js'
    export default {
        name: 'CardPlay',
        methods: {},
        created() {
            window.onload = function () {

                var backgroundImages = [
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/black1.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/blue12.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/green1.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/mint10.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/red2.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/white12.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/yellow12.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/black13.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/blue8.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/green5.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/mint3.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/red6.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/white5.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/yellow5.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/black11.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/blue2.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/green3.png",
                    "https://icebreaking205.s3.ap-northeast-2.amazonaws.com/front/mint2.png"
                ];

                CMRotate.init('rotate-div', 200, 300, 100, 12, 600, backgroundImages, clickFn);

                function clickFn(no) {
                    alert('click no - ' + (
                        no + 1
                    ));
                }
            }
        }
    }
</script>

<style type="text/css">
    body,
    html {
        width: 100%;
        height: 100%;
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
        width: 100%;
        height: 100%;
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
    /* #test{
    background: url('C:/ssafy/last_temp/frontend/src/assets/js/images/black1.png');
} */
</style>