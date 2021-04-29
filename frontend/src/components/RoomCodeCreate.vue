<template>
    <div>
        <p>방 코드 {{randomstring}} 
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
    // roomcode 저장하기
    this.$store.commit('CREATE_ROOMCODE', this.randomstring)
    return this.randomstring
    },

},
beforeMount(){
    this.getRoomInfo()
 },

}
</script>

<style>

</style>