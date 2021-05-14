<template>

  <div class="grid-wrapper">
    <user-video
          class="user-videos"
          v-for="sub in subscribers"
          :key="sub.stream.connection.connectionId"
          :stream-manager="sub"
        />
    <div>
      <input type="text" v-model="name" />
      <input type="text" v-model="team" />
      <button @click="beAdmin">방장</button>
      <button @click="sendInfo">완료!</button>
    </div>
    <!--1st row-->
    <div class="rtc" id="left-rtc"></div>
    <canvas
      @mousedown="startPainting"
      @mouseup="stopPainting"
      @mousemove="onMouseMove"
      @mouseleave="stopPainting"
      id="canvas"
    ></canvas>
    <div class="rtc" id="right-rtc"></div>

    <!--2nd row-->
    <div class="game-support" v-if="turnToDraw == true">
      <div class="colorPicker">
        <div
          v-for="color in colors"
          :key="color"
          :class="color"
          @click="strokeColorHandler(color)"
        ></div>
      </div>
      <div class="sizePicker">
        <!--size handler 3type-->
        <div @click="strokeSizeHandler(1)">
          <div style="width:3px; height:3px;"></div>
        </div>
        <div @click="strokeSizeHandler(8)">
          <div style="width:9px; height:9px;"></div>
        </div>
        <div @click="strokeSizeHandler(15)">
          <div style="width:15px; height:15px;"></div>
        </div>
      </div>
      <!--모두 지우기-->
      <div class="eraser">
        <div class="clearAll" @click="clearAll" style="float:right;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-clockwise"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
            />
            <path
              d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
            />
          </svg>
        </div>
        <!--지우개 버튼-->
        <div @click="strokeColorHandler('white')" style="float:right;">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-eraser-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!--채팅 위치-->
    <div v-if="turnToDraw == false" class="game-support"></div>
  </div>
</template>

<script>
import UserVideo from "@/components/UserVideo";

export default {
  name: "CatchMind",
  components: {
    UserVideo,
  },
  data() {
    return {
      painting: false,
      canvas: null,
      ctx: null,
      canvasHeight: window.innerHeight * 0.5,
      canvasWidth: window.innerWidth * 0.4, //width 바꾸면 grid 비율도 같이 바꿔줘야 함. 고정값으로 해야할듯..
      colors: [
        "black",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "darkviolet",
      ],

      //user, 그림 그리는 순서
      nickname: this.$store.state.username, //to identify user
      roomCode: this.$store.state.roomcode,
      roomName: this.$store.state.roomname,
      adminFlag: this.$store.state.adminflag,
      users: [], //all user list
      turnToDraw: true,
      currentTurn: 0, //team number of current turn

      //test용 데이터
      name: "",
      team: "",
      isAdmin: false,

      // 1) 서버와 연결
      // socket: io("localhost:3000"), //url:port
      socket: this.$store.state.socket,

      text: "",
      messages: [],
      answer: "정답",
    };
  },
  mounted() {
    //set initial condition of canvas
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#2c2c2c";
    // Resize canvas
    window.addEventListener("resize", this.resizeHandler);
    this.canvas.height = this.canvasHeight;
    this.canvas.width = this.canvasWidth;
    this.ctx.lineWidth = 2.5;
    // fill canvas with white color
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // this.$store.state.socket = this.socket;
    console.log(this.socket);
    // console.log(this.$store.state.socket);
    
    // 3-1) ctx 관련 정보 수신
    this.socket.on("connect", () => {
      console.log(this.socket.id);
      this.socket.emit(
        "info",
        this.nickname,
        this.roomCode,
        this.adminFlag != 0 ? true : false
      );
    });

    this.socket.on("duplicated code", () => {
      console.log("duplicated code");
    });

    this.socket.on("disconnected", (user) => {
      //방을 떠난 유저가 있을 때
      console.log("disconnected: ", user);
    });
    this.socket.on("room", (room) => {
      //유저 정보 변화가 있을 때
      this.users = room;
      console.log("changed user list: ", this.users);
    });

    /* painting */
    this.socket.on("began path", (x, y) => {
      this.beginPath(x, y);
    });
    this.socket.on("stroked path", (x, y, color, size) => {
      this.strokePath(x, y, color, size);
    });
    this.socket.on("cleared all", () => {
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    });
  },
  methods: {
    /* for test */
    beAdmin() {
      this.isAdmin = true;
    },
    sendInfo() {
      this.socket.emit("info", this.name, this.team, this.isAdmin);
    },
    /* for painting */
    resizeHandler() {
      //resize 될 때마다 canvas size 조정
      this.canvasWidth = window.innerWidth * 0.4; //innerWidth, innerHeight 비율에 맞춰서 조정 필요
      this.canvasHeight = window.innerHeight * 0.5;

      this.canvas.height = this.canvasHeight;
      this.canvas.width = this.canvasWidth;
    },
    beginPath(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
    },
    strokePath(x, y, color, size) {
      var currentColor = this.ctx.strokeStyle; //원래 색 저장
      var currentSize = this.ctx.lineWidth;
      if (color != null) {
        this.ctx.strokeStyle = color;
      }
      if (size != null) {
        this.ctx.lineWidth = size;
      }
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
      //원래 색으로 되돌리기
      this.ctx.strokeStyle = currentColor;
      this.ctx.lineWidth = currentSize;
    },
    onMouseMove(event) {
      if (!this.turnToDraw) return;
      const x = event.offsetX;
      const y = event.offsetY;
      if (!this.painting) {
        this.beginPath(x, y);
        this.socket.emit("begin path", x, y);
      } else {
        this.strokePath(x, y, null, null);
        this.socket.emit(
          "stroke path",
          x,
          y,
          this.ctx.strokeStyle,
          this.ctx.lineWidth
        );
      }
    },
    startPainting() {
      this.painting = true;
    },
    stopPainting() {
      this.painting = false;
    },
    strokeSizeHandler(size) {
      this.ctx.lineWidth = size;
    },
    strokeColorHandler(color) {
      this.ctx.strokeStyle = color;
    },
    clearAll() {
      // this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.socket.emit("clear all");
    },
  },
};
</script>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas:
    "left canvas right"
    "left temp right";
}
.rtc {

}
.rtc#left-rtc {
  grid-area: left;
}
.rtc#right-rtc {
  grid-area: right;
}
#canvas {
  grid-area: canvas;
  border: 3px solid black;
  height: 100%;
  width: 100%;
}
.game-support {
  grid-area: temp;
}
.game-support > div {
  margin: 1px;
}
.size-picker > div {
  float: left;
  background-color: white;
  width: 30px;
  height: 30px;
  border-radius: 10%;
  /* 자식 항목들을 정가운데로 정렬하기 위한 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
}
.size-picker > div > div {
  background: black;
  border-radius: 50%;
}
.colorPicker > div {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
}
.eraser > svg {
  color: white;
  height: auto;
  width: 30px;
  margin-right: 8px;
}
.black {
  background-color: black;
}
.red {
  background-color: red;
}
.orange {
  background-color: orange;
}
.yellow {
  background-color: yellow;
}
.green {
  background-color: green;
}
.blue {
  background-color: blue;
}
.darkviolet {
  background-color: darkviolet;
}
</style>
