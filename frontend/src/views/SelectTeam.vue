<template>
  <div>
    <Timer />
    <!-- <ul v-for="(team, index) in teams" :key="index"> -->

    <!-- <div v-if="index >= 1"> -->
    <b-form-radio-group
      id="team-btn"
      :options="teams"
      button-variant="outline-primary"
      size="lg"
      name="team"
      value-field="text"
      buttons
      >{{ teams.teamname }}
    </b-form-radio-group>

    <!-- <input type="radio" name="team" /> {{ team.teamname }} -->

    <b-badge pill variant="warning"> 2 / {{ teams.teampeople }} </b-badge>
    <!-- </div> -->
    <button @click="selectTeam">
      팀 선택 완료
    </button>
    <!-- </ul> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

import Timer from "@/components/Timer";

export default {
  name: "SelectTeam",
  components: { Timer },
  data() {
    return {
      totalPerson: this.$store.userlist.length,
      btnStatus: "",
    };
  },
  created () {
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://i.pinimg.com/originals/d9/64/c3/d964c3a16e40d392500e03bde203ae58.jpg' + ')';
  },
  mounted() {
    console.log("총 인원 수 :" + this.totalPerson);
  },
  methods: {
    selectTeam() {
      this.btnStatus = true;
      for (var i = 0; i < this.$store.state.teamNumber; i++) {
        console.log(i);
        console.log(this.btnStatus);
        this.$store.commit("BTN_STATUS_BLOCK", i, this.btnStatus);
      }

      // 유저 팀 정보 넣는 코드
      this.$store.commit("CREATE_USERTEAM", "1");
      console.log(this.$store.state.teams);
    },
  },
  computed: {
    ...mapState(["teams", "userlist"]),
  },
};
</script>

<style lang="scss" scoped></style>
