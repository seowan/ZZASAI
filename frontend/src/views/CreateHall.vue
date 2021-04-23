<template>
  <!-- 메인 홀 & 게임 세팅 -->
  <div class="create-hall">
    <div class="h3"> 홀 & 게임 세팅 </div>

    <!-- OrderBlock -->
    <div class="info">
      <div id="title">PUZZLE</div>
      <div id="rest">Drag and drop the colored pieces on the puzzle below. (better images are on their way) </div>
      <div id="rest2">You can put multiple pieces in the same area but you can't interchange them, only the last one you put will be accessible.</div>
    </div>

    <div id="images">
      <div id="drag4" draggable="true" ondragstart="drag(event)"></div>
      <div id="drag5" draggable="true" ondragstart="drag(event)"></div>
      <div id="drag6" draggable="true" ondragstart="drag(event)"></div>
      <div id="drag7" draggable="true" ondragstart="drag(event)"></div>
      <div id="drag8" draggable="true" ondragstart="drag(event)"></div>
      <div id="drag9" draggable="true" ondragstart="drag(event)"></div>
    </div>

    <div id="text">
      <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div6" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      <div id="div9" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    </div>

    <!-- HelpIcon -->
    <HelpIcon />
    

  </div>
</template>

<script>
import HelpIcon from '@/components/HelpIcon'

export default {
  name: 'CreateHall',
  components: {
    HelpIcon,
  },
  methods: {
    allowDrop(ev) {
      ev.preventDefault();
    },

    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },

    drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    },
  },
}
</script>

<style>
body {
  background-image: url('~@/assets/bgs/create_hall.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.5; */
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.create-hall {
  margin: 0;
  height: 100%;
}


.info {
  position:relative;
  font-family:Arial;
  margin:10px;
  text-align:center;
  border-radius:5px;
  font-size:15px;
}

#title {
  font-size:20px;
}

#rest2 {
  font-size:13px;
}

#text div {
  position:relative;
  height: 200px;
  width: 200px;
  border: 1px dashed gray;
  display: inline-block;
  margin: 0;
}

#text {
  width:614px;
  height:614px;
  background:black;
  border:5px solid black;
  margin:auto;
}

#images {
  width: 100%
}

img {
  height: 200px;
  width: 200px;
}

#drag4,
#drag5,
#drag6,
#drag7,
#drag8,
#drag9,
#drag10,
#drag11,
#drag12 {
  height: 200px;
  width: 200px;
  
  display: inline-block;
}

#drag4 {
  background: linear-gradient(to bottom right, orange, orange, yellow);
}

#drag5 {
  background: linear-gradient(to right, red, orange);
}

#drag6 {
  background: linear-gradient(red, orange);
}

#drag7 {
  background: linear-gradient(to bottom right, red, red, orange);
}

#drag8 {
  background:yellow;
}

#drag9 {
  background: linear-gradient(orange, yellow);
}
</style>