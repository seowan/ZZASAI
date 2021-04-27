<template>
  <!-- 메인 홀 & 게임 세팅 -->
  <div class="create-hall">
    <div class="h3"> 홀 & 게임 세팅 </div>

    <RandomRoomCode />
    <CodeShareBtn />
    <!-- <Test /> -->


    <!-- OrderBlock -->
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
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
        <h3>Draggable 2</h3>
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

      <rawDisplayer class="col-3" :value="list1" title="List 1" />

      <rawDisplayer class="col-3" :value="list2" title="List 2" />
    </div>

    <!-- HelpIcon -->
    <HelpIcon />
    

  </div>
</template>

<script>
import RandomRoomCode from '@/components/RandomRoomCode'
import CodeShareBtn from '@/components/CodeShareBtn'
import draggable from "vuedraggable";
import HelpIcon from '@/components/HelpIcon'

export default {
  name: 'CreateHall',
  components: {
    HelpIcon,
    RandomRoomCode,
    CodeShareBtn,
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "성향검사", id: 1 },
        { name: "게임", id: 2 },
        { name: "카드", id: 3 },
        // { name: "Gerard", id: 4 }
      ],
      list2: [
        // { name: "Juan", id: 5 },
        // { name: "Edgard", id: 6 },
        // { name: "Johnson", id: 7 }
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
    }
  }
  
}
</script>

<style scoped lang="scss">
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
}
.list-group-item i {
  cursor: pointer;
}
</style>