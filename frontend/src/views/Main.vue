<template>
  <!-- 메인 홈 -->
  <div id="main">
    <span class="mainfont" v-on:click="movemain">짜사이</span>
    <div class="mainframe">
      <input class="maininput" v-show="code_show" v-model="teamcode" placeholder="팀 코드를 입력하세요" v-on:keyup.enter="handle_toggle">      
      <input class="maininput" v-show="enter_show" v-model="entername" placeholder="이름을 입력하세요" v-on:keyup.enter="btn_enterroom">
      <input class="maininput" v-show="create_show" v-model="name" placeholder="이름을 입력하세요" v-on:keyup.enter="btn_createroom">
      <button class = "mainbutton" id="enterroom" v-show="enter_room" v-on:click="btn_enterroom">방 입장하기</button>      
    </div>
    <div class="mainbuttons">
      <button class = "mainbutton" id="createroom" v-show="create_room" v-on:click="btn_createroom">방 만들기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      teamcode:'',
      name:'',
      entername:'',
      code_show : true,
      create_show : false,
      enter_room : true,
      create_room : true,
      enter_show : false,
    }
  },
  methods:{
    movemain:function(){
      location.href="/"
    },
    btn_createroom:function(){
      if(this.create_show){
        if(this.name!=''){
          location.href="create-hall"
          this.$store.commit('INSERT_USERNAME',this.name)
          this.name=''
        }
      }else{
        this.code_show = !this.code_show
        this.create_show = !this.create_show
        this.enter_room = !this.enter_room
      }
    },
    btn_enterroom:function(){
      if (this.teamcode!='' && this.teamcode.length>=8) {        
        location.href="hall/"+this.teamcode
        this.teamcode=''
        this.$store.commit('INSERT_USERNAME',this.entername)
        this.entername=''
      }
    },
    handle_toggle : function(){
      this.code_show = !this.code_show
      this.enter_show = !this.enter_show
      this.create_room = !this.create_room
    },
  },
}
</script>

<style>
.mainfont{
  font-size: 100px;
  cursor: pointer;
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