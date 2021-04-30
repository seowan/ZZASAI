<template>
    <div class="row justify-content-center">
        <div class="col-1">{{ roomcode }}</div>
        <div class="col-1">
          <b-button
            variant="warning"
            v-clipboard:copy="roomcode"
            v-clipboard:success="onCopy"
          >
          코드 복사
          </b-button>
        </div>
        <div class="col-1" >
          <img
            class="kakao_btn"
            src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
            @click="codeShareKakao"
            style="width: 30%; height: 80%;"
           />
        </div>
    </div>
</template>

<script type="text/Javascript" src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
<script>


export default {
  name: 'RoomCode',
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
    onCopy() {
      alert('코드 복사를 완료하였습니다. 새 친구에게 코드를 공유해주세요!')
    },
  },

}
</script>

<style>

</style>