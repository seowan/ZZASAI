<template>
  <!-- 메인 홈 -->
  <div id="main">
    <div class="mainfont">서비스 이름</div>
    <div class="mainbuttons">
      <button class = "mainbutton" id="createroom" v-on:click="btn_createroom">방 만들기</button>
      <button class = "mainbutton" id="enterroom" v-on:click="btn_enterroom">방 입장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods:{
    btn_createroom:function(){
      location.href="create-hall"
    },
    btn_enterroom:function(){
      location.href="hall"
    }
  }
}
</script>

<style>
.mainfont{
  font-size: 100px;
}

.mainbuttons{
  margin-top:25px;
}

.mainbutton{
  border: 4px solid white;
  background-color : rgba(0,0,0,0);
  padding:5px;
  padding-left:10px;
  padding-right:10px;
  font-size:20px;
}

.mainbutton:hover{
  border : 4px solid pink;
  background-color:pink;
}

#createroom{
  margin-right: 8px;
}

#enterroom{
  margin-left: 8px;
}
</style>