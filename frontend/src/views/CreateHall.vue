<template>
  <!-- 메인 홀 & 게임 세팅 -->
  <div class="create-hall">
    <div class="h3"> 홀 & 게임 세팅 </div>

    <!-- OrderBlock -->
    <div class="row">
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable class="list-group" :list="list1" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>Draggable 2</h3>
        <draggable class="list-group" :list="list2" group="people" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
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
// Vue.Draggable https://github.com/SortableJS/Vue.Draggable
import draggable from 'vuedraggable'
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
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 }
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
  /* overflow: hidden; */
}
.create-hall {
  margin: 0;
  height: 100%;
}
</style>