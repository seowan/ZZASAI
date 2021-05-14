<template>
  <!-- 메인 홈 -->
  <div id="main">
    <span class="mainfont" @click="movemain">
        <div class="align-center mt-60">
          <div class="mainfontA">
            짜
          </div>
          <div class="mainfontB" style="">
            식, 이제 우리 친구
          </div>
          <div
            class="mainfontA">
            사이
          </div>
          <div class="mainfontB" style="">다</div>
        </div>
    </span>
    <div class="mainframe">
      <input class="maininput" v-model="roomcode" placeholder="입장코드를 입력하세요" @keyup.enter="toUserName" autofocus>      
    </div>
    <div class="mainbuttons">
      <button class = "mainbutton" @click="toHostName">방만들기</button>
      <button v-if="roomcode_input" class = "mainbutton"  v-show="enter_room" @click="toUserName">입장하기</button>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return{
      roomcode:'',
      name:'',
      entername:'',
      code_show : true,
      create_show : false,
      enter_room : true,
      create_room : true,
      enter_show : false,
      userName: ''
    }
  },
  computed: {
    roomcode_input: function () {
      return this.roomcode.length >= 8
    }
  },
  methods:{
    movemain:function(){
      location.href="/"
    },
    toHostName:function(){
      this.$router.push({ name: 'HostName' })
    },
    toUserName:function(){
      if (this.roomcode!='' && this.roomcode.length>=8) {        
        this.$store.commit('CREATE_ROOMCODE', this.roomcode)
        this.$store.commit('RESTORE_ADMINFLAG')
        this.$router.push({ name: 'UserName' })
      } else {
        alert("정확한 입장코드를 입력해주세요!")
      }
    },
  },
  created () {
    var body = document.body
    body.style.backgroundImage = 'url(' + 'https://wallpapermemory.com/uploads/418/adventure-time-wallpaper-hd-1920x1080-333459.jpg' + ')';
  },
}
</script>

<style scoped>
.mainfont {
  
  cursor: pointer;
  color: white;
}

.mainfontA {
  display: inline-block;
  color: black;
  font-size: 65px;
}

.mainfontB {
  display: inline-block;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 35px;

}

.mainframe {
  margin-top: 3%;
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
  margin-left: 8px;
  margin-right: 8px;
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
</style>