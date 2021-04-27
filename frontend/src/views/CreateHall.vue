<template>
  <!-- 메인 홀 & 게임 세팅 -->
  <div class="create-hall">
    <div class="h3"> 홀 & 게임 세팅 </div>


    <!-- <Test /> -->


    <!-- Vue.Draggable -->
    <div class="row">
      <div class="col-3 offset-3">
        <h3>Items</h3>
        <draggable class="list-group" :list="list1" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element) in list1"
            :key="element.name"
          >
            {{ element.name }}
            <!-- {{ element.name }} {{ index }} -->
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>진행순서</h3>
        <draggable class="list-group" :list="list2" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element) in list2"
            :key="element.name"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>

      <!-- <rawDisplayer class="col-3" :value="list1" title="List 1" /> -->

      <!-- <rawDisplayer class="col-3" :value="list2" title="List 2" /> -->
    </div>
    <button class="startbutton" id="" v-on:click="btn_start">시작하기</button>
    <!-- HelpIcon -->
    <HelpIcon />
    

  </div>
</template>

<script>
import draggable from "vuedraggable";
import HelpIcon from '@/components/HelpIcon'


export default {
  name: 'CreateHall',
  components: {
    draggable,
    HelpIcon,
  },
  data() {
    return {
      list1: [
        { name: "성향검사", id: 1 },
        { name: "게임", id: 2 },
        { name: "카드", id: 3 },
      ],
      list2: [
      ]
    };
  },
  methods: {
    add: function() {
      this.list.push({ name: "Juan" });
    },
    replace: function() {
      this.list = [{ name: "Edgard" }];
    },
    clone: function(el) {
      return {
        name: el.name + " cloned"
      };
    },
    log: function(evt) {
      window.console.log(evt);
    },
    btn_start: function () {
      if (this.list2.length < 1) {
        alert("컨텐츠를 정하세요!")
      } else {
        // alert("통과입니다")
        for (let i = 0; i < this.list2.length; i++) {
          this.$store.commit('CREATE_PROGRAMME', this.list2[i])
        }
        // console.log(this.$store.state.programme)
        this.$router.push({ name: 'Hall' })
      }
    },
  }
  
}
</script>

<style scoped lang="scss">
html {
  height: 100%;
}

body {
  background-image: url('~@/assets/bgs/create_hall.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* opacity: 0.5; */
  margin: 0;
  height: 100%;
  /* overflow: hidden; */
}
.create-hall {
  margin: 0;
  height: 100%;
}


.startbutton{
  border: 4px solid white;
  background-color : rgba(0,0,0,0);
  padding:5px;
  padding-left:10px;
  padding-right:10px;
  font-size:20px;
  //
  margin-top: 3%;
}


// Vue.Draggable
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
  //
  border : 4px solid pink;
  background-color: rgba( 255, 255, 255, 0.5 ); // opacity를 쓰면 글자까지 투명해진다!
}
.list-group-item i {
  cursor: pointer;
}
</style>