<template>
<div>
    <img
        class="kakao_btn"
        src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
        @click="codeShareKakao"
    />
    </div>
</template>
<script type="text/Javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>

export default {
  name: 'CodeShareBtn',
  props: {
      roomcode: String,
  },
methods: {
     codeShareKakao() {
        Kakao.Link.sendCustom({
            templateId: 52239,
              templateArgs: {
                'roomCode':`${this.roomcode}`
    },
        });
    },
},


}
</script>

<style scoped>

</style>