<template>
  <div>
    <canvas
      @mousedown="startPainting"
      @mouseup="stopPainting"
      @mousemove="onMouseMove"
      @mouseleave="stopPainting"
      id="canvas"
    ></canvas>
    <div>
      <div
        v-for="color in colors"
        :key="color"
        class="colorPicker"
        :class="color"
        @click="strokeColorHandler(color)"
      ></div>
    </div>
    <div v-for="i in 3" :key="i" @click="strokeSizeHandler(i)">
      {{ i }}번째 크기
    </div>
    <div class="btn eraser" @click="strokeColorHandler('white')">지우개</div>
    <div id="btn clearAll" @click="clearAll">
      모두 지우기
    </div>

    <ul>
      <li v-for="(msg, index) in messages" :key="index">
        {{ msg.name }}: {{ msg.text }}
      </li>
    </ul>
    <div>
      <input type="text" @keyup.enter="sendMessage()" v-model="text" />
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
      canvasHeight: 500,
      canvasWidth: 500,
      colors: [
        "black",
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "darkviolet",
      ],

      // 1) 서버와 연결
      socket: io("localhost:3000"), //url:port
      nickname: "user", //to identify user
      text: "",
      messages: [],
      answer: "정답",
    };
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#2c2c2c";
    this.ctx.lineWidth = 2.5;

    // Resize canvas
    this.canvas.height = this.canvasHeight;
    this.canvas.width = this.canvasWidth;

    // 3) 서버의 변경사항을 수신
    this.socket.on("receive message", (name, text) => {
      var data = { name: name, text: text };
      this.messages = [...this.messages, data];
      if (text == this.answer) {
        //채팅이 정답과 일치
        console.log("correct~!!!!!!");
      }
    });

    console.log(this.socket);
  },
  methods: {
    onMouseMove(event) {
      const x = event.offsetX;
      const y = event.offsetY;
      if (!this.painting) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      }
    },
    startPainting() {
      this.painting = true;
    },
    stopPainting() {
      this.painting = false;
      // this.ctx.beginPath();
    },
    strokeSizeHandler(size) {
      this.ctx.lineWidth = 1.0 + 5 * (size - 1); //1: 1, 2: 6, 3: 11
    },
    strokeColorHandler(color) {
      this.ctx.strokeStyle = color;
    },
    clearAll() {
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
    sendMessage() {
      // 2) 채팅메세지를 서버로 전송
      this.socket.emit("send message", this.nickname, this.text);
    },
  },
};
</script>

<style>
.colorPicker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#canvas {
  border: 3px solid black;
  height: 500px;
  width: 500px;
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
