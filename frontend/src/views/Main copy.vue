<template>
  <!-- 메인 홈 -->
  <div id="main">
    <div class="mainfont">짜사이</div>
    <div class="mainframe">
      <input class="maininput" v-model="teamcode" placeholder="팀 코드를 입력하세요" v-on:keyup.enter="btn_enterroom">
      <button class = "mainbutton" id="enterroom" v-on:click="btn_enterroom">방 입장하기</button>      
    </div>
    <div class="mainbuttons">
      <button class = "mainbutton" id="createroom" v-on:click="btn_createroom">방 만들기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      teamcode:''
    }
  },
  methods:{
    btn_createroom:function(){
      location.href="create-hall"
    },
    btn_enterroom:function(){
      if (this.teamcode!='' && this.teamcode.length>=8) {        
        location.href="hall/"+this.teamcode
        this.teamcode=''
      }
    }
  },
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

.maininput{
  border : 3px solid pink;
  padding: 9px;
  padding-right: 50px;
  padding-left: 50px;
  text-align: center;
  font-size: 20px;
}

.maininput:focus{
  border : 3px solid blue;
}

#createroom{
  margin-left: 8px;
  padding-right: 20px;
  padding-left: 20px;
}

#enterroom{
  margin-left: 8px;
  margin-right: 8px;
}
</style>