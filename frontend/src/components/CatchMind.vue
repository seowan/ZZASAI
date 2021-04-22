<template>
  <!-- 캐치마인드 -->
  <div id="catch-mind">
    <h3>캐치마인드</h3>
    <canvas
      @mousedown="startPainting"
      @mouseup="stopPainting"
      @mousemove="onMouseMove"
      @mouseleave="stopPainting"
      id="canvas"
    ></canvas>
    <div
      v-for="(color, i) in colors"
      :key="i"
      class="colorPicker"
      :class="color"
      @click="strokeColorHandler(color)"
    ></div>
    <div v-for="i in 3" :key="i" @click="strokeSizeHandler(i)">
      {{ i }}번째 크기
    </div>
    <div class="btn eraser" @click="strokeColorHandler('white')">지우개</div>
    <div id="btn clearAll" @click="clearAll">
      모두 지우기
    </div>
    <h3>끝</h3>
  </div>
</template>

<script>
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
  },
};
</script>

<style>
.colorPicker {
  width: 50px;
  height: 50px;
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
#canvas {
  border: 3px solid black;
  height: 500px;
  width: 500px;
}
</style>
