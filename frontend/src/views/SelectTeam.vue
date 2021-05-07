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
      totalPerson: 30,
      btnStatus: "",
    };
  },

  mounted() {},
  methods: {
    selectTeam() {
      this.btnStatus = true;
      for (var i = 0; i < this.$store.state.teamNumber; i++) {
        console.log(i);
        console.log(this.btnStatus);
        this.$store.commit("BTN_STATUS_BLOCK", i, this.btnStatus);
      }

      console.log(this.$store.state.teams);
    },
  },
  computed: {
    ...mapState(["teams"]),
  },
};
</script>

<style lang="scss" scoped></style>
