<template>
  <div id="game-play">
    <h3>게임</h3>
    <catch-mind></catch-mind>
  </div>
</template>

<script>
import CatchMind from "@/components/CatchMind.vue";

export default {
  name: "GamePlay",
  components: {
    CatchMind,
  },
  created () {
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://wallpapercave.com/wp/wp4718591.jpg' + ')'
  },
};
</script>

<style></style>
