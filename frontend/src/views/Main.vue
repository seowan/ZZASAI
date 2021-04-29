<template>
  <!-- 메인 홈 -->
  <div id="main">
    <h3> 메인 </h3>
    <!-- Docker 실행 명령어 : docker run -p 4443:4443 --rm -e OPENVIDU_SECRET=MY_SECRET openvidu/openvidu-server-kms:2.17.0 -->
    <input type="text" v-model="userName">
    <router-link :to="{ name: 'Test', params: { userName: userName }}"> 입장하기 </router-link>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data: function () {
    return {
      userName: ''
    }
  }
}
</script>

<style>

</style>