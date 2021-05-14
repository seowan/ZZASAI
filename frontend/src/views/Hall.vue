<template>
  <!-- 메인 홀 -->
  <div id="hall">
    <RoomCode :roomcode="roomcode" />
    <!-- <CodeShareBtn :roomcode="roomcode" /> -->
    <!-- {{ room_data }} -->
    <!-- {{ order_mark }} -->
    <div class="py-3 my-5"></div>
    <!-- 여기에 flip-card 넣기 -->
    <div v-if="order_mark == '100'" class="row justify-content-center">
      <Exam />
    </div>
    <div v-else-if="order_mark == '120'" class="row justify-content-center">
      <Exam />
      <Drawing />
    </div>
    <div v-else-if="order_mark == '123'" class="row justify-content-center">
      <Exam />
      <Drawing />
      <Card />
    </div>
    <div v-else-if="order_mark == '130'" class="row justify-content-center">
      <Exam />
      <Card />
    </div>
    <div v-else-if="order_mark == '132'" class="row justify-content-center">
      <Exam />
      <Card />
      <Drawing />
    </div>
    <div v-else-if="order_mark == '200'" class="row justify-content-center">
      <Drawing />
    </div>
    <div v-else-if="order_mark == '210'" class="row justify-content-center">
      <Drawing />
      <Exam />
    </div>
    <div v-else-if="order_mark == '213'" class="row justify-content-center">
      <Drawing />
      <Exam />
      <Card />
    </div>
    <div v-else-if="order_mark == '230'" class="row justify-content-center">
      <Drawing />
      <Card />
    </div>
    <div v-else-if="order_mark == '231'" class="row justify-content-center">
      <Drawing />
      <Card />
      <Exam />
    </div>
    <div v-else-if="order_mark == '300'" class="row justify-content-center">
      <Card />
    </div>
    <div v-else-if="order_mark == '310'" class="row justify-content-center">
      <Card />
      <Exam />
    </div>
    <div v-else-if="order_mark == '312'" class="row justify-content-center">
      <Card />
      <Exam />
      <Drawing />
    </div>
    <div v-else-if="order_mark == '320'" class="row justify-content-center">
      <Card />
      <Drawing />
    </div>
    <div v-else class="row justify-content-center">
      <Card />
      <Drawing />
      <Exam />
    </div>
    <!-- <h2 class="pt-5" style="font-family: 'Single Day', cursive;">호스트가 진행순서를 정하고 있습니다. 잠시만 기다려 주세요</h2> -->
  </div>
</template>

<script>
import Card from "@/components/hall/Card";
// import CodeShareBtn from '@/components/CodeShareBtn'
import Drawing from "@/components/hall/Drawing";
import Exam from "@/components/hall/Exam";
import RoomCode from "@/components/RoomCode";

import axios from "axios";
import io from "socket.io-client";

// const SERVER_URL = process.env.VUE_APP_SERVER_URL;

export default {
  name: "Hall",
  components: {
    Card,
    // CodeShareBtn,
    Drawing,
    Exam,
    RoomCode,
  },
  data() {
    return {
      socket: io("localhost:3000"),
      order_mark: "",
      roomcode: this.$route.params.roomcode,
      room_data: {},
    };
  },
  created () {
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://wallpapercave.com/wp/wp6365486.png' + ')';
  },
  mounted() {
    this.$store.state.socket = this.socket;

    this.socket.on("connect", () => {
      console.log(this.socket.id);
      this.socket.emit(
        "info",
        this.$store.state.userinfo.username,
        this.roomcode,
        this.adminFlag != 0 ? true : false
      );
    });
  },
  methods: {
    getRoomData: function() {
      axios({
        method: "get",
        // url: `api/room/info/?roomcode=${this.roomcode}`,
        // url: `http://localhost:8080/api/room/info/?roomcode=${this.roomcode}`,
        //url: `api/room/info/?roomcode=${this.roomcode}`,
        url: `http://localhost:8080/api/room/info/?roomcode=${this.roomcode}`,
        // url: `${SERVER_URL}/api/room/info/?roomcode=${this.roomcode}`,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => {
          console.log(res.data);
          this.room_data = res.data;
          console.log(this.room_data);
          this.order_mark =
            String(this.room_data.game1) +
            String(this.room_data.game2) +
            String(this.room_data.game3);
        })
        .catch((err) => {
          console.log(err);
          alert("데이터를 가지고 오지 못했습니다ㅜㅜ");
        });
    },
  },
  beforeMount: function() {
    // 진행순서 데이터 받아오기
    this.$store.state.roomcode = this.$route.params.roomcode;
    if (this.$store.state.username == "") {
      this.$router.push({ name: "UserName" });
    } else {
      this.getRoomData();
    }
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

.hall-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;
}

.hall-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  border: 4px solid white;
  margin: 0 auto;
  max-width: 500px;
}

.hall-card:hover .hall-card-inner {
  transform: rotateY(180deg);
}

.hall-card-front,
.hall-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  vertical-align: middle;
  margin-top: 100px;
}

.hall-card-front {
  /* background-color: #bbb; */
  color: black;
}

.hall-card-back {
  /* background-color: #2980b9; */
  color: white;
  transform: rotateY(180deg);
}

.hall-card-text {
  color: black;
  margin-top: 0;
  text-align: center;
  text-transform: uppercase;
  /* font-weight: bold; */
  font-family: "Single Day", cursive;
}
</style>
