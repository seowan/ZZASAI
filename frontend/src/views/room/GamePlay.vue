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
};
</script>

<style></style>
