<template>
  <!-- 메인 홀 & 게임 세팅 -->
  <div class="create-hall">
    <div class="h3"> 홀 & 게임 세팅 </div>
    <HelpIcon />
    
  </div>
</template>

<script>
import HelpIcon from '@/components/HelpIcon'

export default {
  name: 'CreateHall',
  components: {
    HelpIcon,
  }
}
</script>

<style>
body {
  background-image: url('~@/assets/bgs/create_hall.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.5; */
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.create-hall {
  margin: 0;
  height: 100%;
}
</style>