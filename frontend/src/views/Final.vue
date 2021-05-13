<template>
  <div class="fianl">
    <div><img id="final_img" src="@/assets/final_stone.gif" alt=""></div>
    <br>
    <div id="final_content">
      <h3>
        순위 발표 <br>
        <!-- <div>1등 {{ result_show[0].team }} : {{ result_show[0].score }}</div> -->
        <!-- <div>2등 {{ result_show[1].team }} : {{ result_show[1].score }}</div> -->
        <!-- <div>3등 {{ result_show[2].team }} : {{ result_show[2].score }}</div> -->
      </h3>
      <h2>
        긴 모험 끝 여러분은 보물을 찾았습니다.
      <br>그 보물은 바로 여러분의 우정입니다.
      </h2>
    </div>
    <br>
    <b-button @click="endRoom">종료하기</b-button>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: "Final",
  data () {
    return {
      result: {},
      result_sorted: {},
    }
  },
  computed: {
    result_show () {
      return this.result_sorted
    }
  },
  methods: {
    calScores: function () {
      // 1. 각자 자신의 점수를 socket을 통해? DB로? 보내기
      
      // 2. <1>에서 받아온 "response" 데이터(Object 형태)를 this.result에 저장하기
      /*
      result = {
        username: STR,
        team: STR,
        score: INT,
      }
      */
      
      // 3. 점수를 기준으로 내림차순 정렬
      this.result.sort(function (a, b) {
        return a.score < b.score ? -1 : a.score > b.score ? 1: 0;
      })

      // 4. 보여줄 데이터 만들기
      this.result_sorted = this.result
    },
    endRoom: function () {
      // axios로 방 삭제하기
      // axios.DELTE()
      // this.$router.push({ name: 'Main' })
      // window.redir
      alert("방이 성공적으로 종료되었습니다!")
      window.location = "http://localhost:8081";
    },
  },
  async created () {
    await this.calScores()

    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTdfMTI1/MDAxNTg0MzczNzk2MTQ0._vIJo7E7YznPdR-vuJaAW5mi1kbK6YT390HW_ZHDRhkg.67Akq565cnkh4StUIJ9IHtkAzMXbbowefhXYiq0d67Ug.JPEG.se___ovo/%EB%85%B8%ED%8A%B8%EB%B6%81%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B402.jpg?type=w800' + ')';
  },
}
</script>

<style lang="scss" scoped>
body {
  text-align: center;
}

#final_img {
  height: 10rem;
}

#final_content {
  background-color: white;
  opacity: 0.5;
  margin-right: 25%;
  margin-left: 25%;
  padding: 10% 0;
  text-align: center;
}
</style>
