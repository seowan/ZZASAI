<template>
  <!-- 메인 홀 -->
  <div id="hall">
    <h3> 메인 홀 </h3>
    <div class="test">
      test
    </div>
    <b-button variant="success">Button</b-button>
  </div>
</template>

<script>
export default {
  name: 'Hall',
}
</script>

<style>
body {
  /* background-image: url('~@/assets/bgs/hall.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
  /* background-size: cover; */
  /* opacity: 0.5; */
}


.test {
    border: 2px solid white;
    padding: 50px;
    margin: 0 auto;
    position: relative;
    max-width: 500px;
    h2 {
      color: white;
      margin-top: 0;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
    }
  }
</style>