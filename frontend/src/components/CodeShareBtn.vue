<template>
                    <img
        class="kakao_btn"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        @click="clickKakaoShare"
    />
</template>
<script type="text/Javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>
export default {
  name: 'CodeShareBtn',
methods: {
     clickKakaoShare() {
        Kakao.Link.sendCustom({
            templateId: 52239,
        });
    },
},

}
</script>

<style>

</style>