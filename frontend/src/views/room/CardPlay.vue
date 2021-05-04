<template>
  <!-- 질문 카드 게임 -->
  <div id="card-play">
    <h3> 질문 카드 게임 </h3>

    <CardRotate />
  </div>
</template>

<script>
import CardRotate from '@/components/cardplay/CardRotate.vue'

export default {
  name: 'CardPlay',
  components: {
      CardRotate,
  },
}
</script>

<style>

</style>