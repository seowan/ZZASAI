<template>
  <div>
    {{ countDown }}
  </div>
</template>

<script>
export default {
  name: "Timer",
  data() {
    return {
      countDown: 3,
    };
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.playEndAlarm();
      }
    },
    playEndAlarm() {
      var sound =
        "https://soundbible.com/mp3/School Bell-SoundBible.com-449398625.mp3";
      var audio = new Audio(sound);
      audio.currentTime = 1;
      audio.play();
    },
  },
  created() {
    this.countDownTimer();
  },
};
</script>
