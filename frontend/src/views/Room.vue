<template>
  <div id="room" class="grid-wrapper">
    <Test class="left" />
    <!-- RTC 넣을 곳 -->
    <div class="main">
      <!-- 메인. 여태 작성한 코드들 component화 해서 넣기 -->
      <Hall />
      <CatchMind />
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
import io from "socket.io-client";

import Hall from "@/views/Hall";

import Test from "@/views/Test"; //이름 변경 필요할 듯
import State from "@/components/State";
import Chat from "@/components/Chat";
import CatchMind from "@/components/CatchMind";

// const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Room",
  components: {
    Test,
    State,
    Chat,
    Hall,
    CatchMind,
  },
  data() {
    return {
      socket: io("localhost:3000"),
      roomcode: this.$route.params.roomcode,
    };
  },
  created() {
    this.$store.state.socket = this.socket;
    var body = document.body;
    body.style.backgroundImage =
      "url(" + "https://wallpapercave.com/wp/wp6365486.png" + ")";
  },
  mounted() {
    this.socket.on("connect", () => {
      console.log(this.socket.id);
      this.socket.emit(
        "info",
        this.$store.state.userinfo.username,
        this.roomcode,
        this.$store.state.adminflag != 0 ? true : false
      );
    });

    this.socket.on("move page", (teams) => {
      this.$store.state.teams = teams;
      // console.log("teams: " + teams);
      this.$router.push({
        name: "SelectTeam",
        params: { roomcode: this.$store.state.roomcode },
      });
    });
  },
  methods: {},
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
