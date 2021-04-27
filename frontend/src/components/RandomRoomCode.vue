<template>
    <div>
        <p>{{name}} | {{randomstring}} 
        <button type="button" 
        v-clipboard:copy="randomstring"
        v-clipboard:success="onCopy">코드 복사</button>
        </p>
    </div>
</template>

<script>
export default {
  name: 'RandomRoomCode',
  data(){
      return{
          name: '방 이름',
          randomstring: '',
      }
  },
methods: {
    getRoomInfo(){
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    var stringLength = 8
    for (var i = 0; i < stringLength; i++) {
      var rnum = Math.floor(Math.random() * chars.length)
      this.randomstring += chars.substring(rnum, rnum + 1)
    }
    return this.randomstring
    },
    onCopy() {
      alert('코드 복사를 완료하였습니다. 새 친구에게 코드를 공유해주세요!')
    },
},
beforeMount(){
    this.getRoomInfo()
 },

}
</script>

<style>

</style>