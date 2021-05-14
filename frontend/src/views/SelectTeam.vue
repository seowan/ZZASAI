<template>
  <div>
    <div>
      <center>
        현재 {{ teams.length }} 개의 팀이 개설되었습니다.
        <tbody>
          <tr v-for="(text, index) in teams" :key="index">
            <th scope="row">{{ index + 1 }}팀</th>

            <td>
              {{ teams[index].currentpeople }} /
              {{ teams[index].totalpeople }}명
            </td>
          </tr>
        </tbody>
      </center>
    </div>
    <b-form-radio-group
      id="team-btn"
      v-model="selected"
      :options="teams"
      button-variant="outline-primary"
      size="lg"
      name="team"
      value-field="text"
      disabled-field="disabled"
      buttons
    >
    </b-form-radio-group>
    <div class="mt-3">
      선택한 팀: <strong>{{ selected }}</strong>
    </div>

    <!-- <input type="radio" name="team" /> {{ team.teamname }} -->

    <!-- <b-badge pill variant="warning"> 2 / {{ teams.teampeople }} </b-badge> -->
    <!-- </div> -->
    <button @click="selectTeam" v-if="this.btnStatus">
      팀 선택 완료
    </button>
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
      btnStatus: true,
      selected: "",
    };
  },
  created () {
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://wallpapercave.com/wp/wp5042415.jpg' + ')';
  },
  mounted() {
    console.log("총 인원 수 :" + this.totalPerson);
    // console.log(this.$store.state.teams);
  },
  methods: {
    selectTeam() {
      for (var i = 0; i < this.$store.state.teamnumber; i++) {
        this.$store.state.teams[i].disabled = true;
      }

      // 유저 팀 정보 vuex 저장
      this.$store.state.userinfo.team = this.selected;
      // currentpeople 인원 수 증가
      var index = this.selected.substr(0, 1);
      index = index - 1;
      this.$store.state.teams[index].currentpeople += 1;
      // 해당 팀의 참여자 정보 저장
      var cnt = this.$store.state.teams[index].currentpeople;
      this.$store.state.teams[index].joinlist[
        "member" + cnt
      ] = this.$store.state.userinfo.username;
      this.btnStatus = false;
      // console.log(this.$store.state.teams);
    },
  },
  computed: {
    ...mapState(["teams", "userlist"]),
  },
};
</script>

<style lang="scss" scoped></style>
