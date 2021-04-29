<template>
  <!-- 메인 홈 -->
  <div id="main">
    <h3> 메인 </h3>
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