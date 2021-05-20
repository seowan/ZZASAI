<template>
  <div id="room" class="grid-wrapper">
    <Test class="left" />
    <!-- RTC 넣을 곳 -->
    <div class="main">
      <!-- 메인. 여태 작성한 코드들 component화 해서 넣기 v-if사용? -->
      <Hall v-if="this.$store.state.pidx == program.Hall" />
      <CardPlay v-else-if="this.$store.state.pidx == program.CardPlay" />
      <CharTest v-else-if="this.$store.state.pidx == program.CharTest" />
      <SelectTeam v-else-if="this.$store.state.pidx == program.SelectTeam" />
      <CatchMind v-else-if="this.$store.state.pidx == program.CatchMind" />
      <Final v-else-if="this.$store.state.pidx == program.Final" />
    </div>
    <div class="right">
      <!-- 진행상황-->
      <State class="state" />
      <!-- 채팅-->
      <Chat class="chat" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

import io from "socket.io-client";

import Hall from "@/views/Hall";

import Test from "@/views/Test"; //이름 변경 필요할 듯
import State from "@/components/State";
import Chat from "@/components/Chat";
import CardPlay from "@/views/room/CardPlay";
import CharTest from "@/views/room/CharTest";
import CatchMind from "@/components/CatchMind";
import SelectTeam from "@/views/SelectTeam";
import Final from "@/views/Final";

// const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Room",
  components: {
    Test,
    State,
    Chat,
    Hall,
    CardPlay,
    CharTest,
    CatchMind,
    SelectTeam,
    Final,
  },
  data() {
    return {
      socket: io("localhost:3000"),
      // socket: io("https://k4a205.p.ssafy.io:3000"),
      // socket: io(),
      roomcode: this.$route.params.roomcode,
      totalPeople: this.$store.state.userlist,
      program: {
        Hall: 0,
        CharTest: 1,
        CatchMind: 2,
        CardPlay: 3,
        SelectTeam: 4,
        Final: 9,
      },
    };
  },
  created() {
    this.$store.state.socket = this.socket;
    var body = document.body;
    body.style.backgroundImage =
      "url(" + "https://wallpapercave.com/wp/wp6365486.png" + ")";
  },
  mounted() {
    console.log("userlist: " + this.$store.state.userlist);
    console.log("길이:" + this.$store.state.userlist.length);
    console.log("전체인원: " + this.totalPeople);

    this.socket.on("connect", () => {
      // console.log(this.socket.id);
      this.socket.emit(
        "info",
        this.$store.state.userinfo.username,
        this.roomcode,
        this.$store.state.adminflag != 0 ? true : false
      );
    });

    this.socket.on("move page", (teams) => {
      this.$store.state.teams = teams;
      this.$store.state.pidx = 4;
      // console.log("teams: " + teams);
      //   this.$router.push({
      //     name: "SelectTeam",
      //     params: { roomcode: this.$store.state.roomcode },
      //   });
    });

    this.socket.on("p:hall", () => {
      this.$store.state.pidx = 0;
    });
    this.socket.on("p:chartest", () => {
      this.$store.state.pidx = 1;
    });
    this.socket.on("p:catchmind", () => {
      this.$store.state.pidx = 2;
    });
    this.socket.on("p:cardplay", () => {
      this.$store.state.pidx = 3;
    });
    this.socket.on("p:final", () => {
      this.$store.state.pidx = 9;
    });
  },
  methods: {},
  computed: {
    ...mapState(["pidx", "userlist"]),
  },
};
</script>

<style>
/* Google Font - Single Day */
@import url("https://fonts.googleapis.com/css2?family=Single+Day&display=swap");

body {
  /* background-image: url("~@/assets/bgs/hall.jpg"); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-size: cover;
  /* opacity: 0.5; */
}

.grid-wrapper {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 25% 75%;
  grid-template-areas:
    "left main state"
    "left main chat";
}
.left {
  grid-area: left;
  background: red;
}
.right {
  background: violet;
}
.main {
  grid-area: main;
  background: yellow;
}
.state {
  grid-area: state;
  background: green;
}
.chat {
  grid-area: chat;
  background: blue;
}
</style>
