<template>
  <div class="navbar">
    <!-- <div id="logo"></div> -->
    <img id="logo_img" src="@/assets/logo3.png" alt="짜사이" @click="toHome" />
    <!-- <div id="nav">
      <router-link to="/">메인</router-link> |
      <router-link to="/create-hall">홀 세팅</router-link> |
      <router-link to="/hall">홀</router-link> |
      <router-link to="/card-play">카드 게임</router-link> |
      <router-link to="/game-play">게임</router-link> |
      <router-link to="/char-test">MBTI</router-link> |
      <router-link to="/select-team">팀 선택</router-link> |
      <router-link to="/final">마지막 페이지</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    toHome: function() {
      // this.$router.push({ name: 'Main' })
      location.href = "/";
    },
  },
};
</script>

<style scoped>
#nav {
  color: white;
}

.row {
  padding-right: 15px;
}

#logo_img {
  text-align: left;
  width: 5%;
  cursor: pointer;
}
</style>
