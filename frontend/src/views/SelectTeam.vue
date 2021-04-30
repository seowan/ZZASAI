<template>
  <div>
    <ul v-for="(team, index) in $store.state.teams" :key="index">
      <li>
        <input type="radio" name="team" /> {{ index + 1 }}팀
        <b-badge pill variant="warning">
          {{ team }} / {{ totalPerson }}
        </b-badge>
      </li>
    </ul>
  </div>
</template>

<script>
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
    teamnumber: function() {
      return this.$store.state.teams;
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
</style>
