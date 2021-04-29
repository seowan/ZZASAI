<template>
  <div class="navbar">
    <!-- <div id="logo"></div> -->
    <img id="logo_img" src="@/assets/logo.png" alt="짜사이" @click="toHome">
    <div id="nav">
      <router-link to="/">메인</router-link> |
      <router-link to="/create-hall">홀 세팅</router-link> |
      <router-link to="/hall">홀</router-link> |
      <router-link to="/card-play">카드 게임</router-link> |
      <router-link to="/game-play">게임</router-link> |
      <router-link to="/char-test">MBTI</router-link>
    </div>
    <div class="row">
      <div class="align-center mt-60">
        <h3 class="point" style="font-size:22px; color:red; display:inline-block;">짜</h3>
        <h3 class="about" style="font-size:22px; display:inline-block;">식, 이제 우리 친구</h3>
        <h3 class="point" style="font-size:22px; color:red; display:inline-block;">사이</h3>
        <h3 class="about" style="font-size:22px; display:inline-block;">다</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toHome: function () {
      this.$router.push({ name: 'Main' })
    }
  },
}
</script>

<style>
.row{
  padding-right: 15px;
}

#logo_img {
  text-align: left;
  width: 5%;
  cursor: pointer;
}
</style>