<template>
  <div id="app">
    <Navbar />
    <div id="nav">
      <router-link to="/">메인</router-link> |
      <router-link to="/create-hall">홀 세팅</router-link> |
      <router-link to="/hall">홀</router-link> |
      <router-link to="/card-play">카드 게임</router-link> |
      <router-link to="/game-play">게임</router-link> |
      <router-link to="/char-test">MBTI</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';

</style>
