<template>
  <div class="grid-wrapper">
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
      <div
        v-for="color in colors"
        :key="color"
        class="colorPicker"
        :class="color"
        @click="strokeColorHandler(color)"
      ></div>
      <div class="size-picker" @click="strokeSizeHandler(1)">
        1
      </div>
      <div class="size-picker" @click="strokeSizeHandler(2)">
        2
      </div>
      <div class="size-picker" @click="strokeSizeHandler(3)">
        3
      </div>
      <!--모두 지우기-->
      <div class="eraser clearAll" @click="clearAll" style="float:right;">
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
      <div
        class="eraser"
        @click="strokeColorHandler('white')"
        style="float:right;"
      >
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

    <!-- 채팅 내용 -->
    <!-- <p v-for="(msg, index) in messages" :key="index">
      {{ msg.name }}: {{ msg.text }}
    </p> -->
    <div v-if="turnToDraw == false" class="game-support">
      <input type="text" v-model="text" @keyup.enter="sendMessage()" />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "CatchMind",
  data() {
    return {
      painting: false,
      canvas: null,
      ctx: null,
      canvasHeight: window.innerHeight * 0.5,
      canvasWidth: window.innerWidth * 0.4, //width 바꾸면 grid 비율도 같이 바꿔줘야 함
      colors: [
        "black",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "darkviolet",
      ],

      turnToDraw: true,

      // 1) 서버와 연결
      socket: io("localhost:3000"), //url:port
      nickname: "user", //to identify user
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
    console.log(window.innerHeight, window.innerWidth);
    this.canvas.height = this.canvasHeight;
    this.canvas.width = this.canvasWidth;
    this.ctx.lineWidth = 2.5;
    // fill canvas with white color
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);

    // 3) 서버의 변경사항을 수신
    this.socket.on("receive message", (name, text) => {
      var data = { name: name, text: text };
      this.messages = [...this.messages, data];
      if (text == this.answer) {
        //채팅이 정답과 일치
        console.log("correct~!!!!!!");
      }
    });

    // 3-1) ctx 관련 정보 수신
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
      this.ctx.lineWidth = 1.0 + 5 * (size - 1); //1: 1, 2: 6, 3: 11
    },
    strokeColorHandler(color) {
      this.ctx.strokeStyle = color;
    },
    clearAll() {
      // this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.socket.emit("clear all");
    },
    sendMessage() {
      // 2) 채팅메세지를 서버로 전송
      this.socket.emit("send message", this.nickname, this.text);
      this.text = ""; //채팅 입력칸 초기화
    },
  },
};
</script>

<style>
.grid-wrapper {
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-areas:
    "left canvas right"
    "left temp right";
}
.rtc {
  background-color: lightslategray;
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
.size-picker {
  float: left;
  background-color: white;
  width: 30px;
  height: 30px;
  vertical-align: middle;
}
.colorPicker {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  float: left;
}
.eraser > svg {
  height: auto;
  width: 30px;
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
