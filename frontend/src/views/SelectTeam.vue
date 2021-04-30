<template>
  <div>
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

    <!-- </ul> -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SelectTeam",
  components: {},
  data() {
    return {
      totalPerson: 30,
    };
  },

  mounted() {},
  methods: {},
  computed: {
    ...mapState(["teams"]),
  },
};
</script>

<style lang="scss" scoped></style>
