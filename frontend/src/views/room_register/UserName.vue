<template>
  <div>
    <!-- 이 페이지 불필요한 요소 정리완료 - 이송영 -->
    <span class="title">짜사이</span>
    <div class="frame">
      <input
        class="input"
        v-model="name"
        placeholder="이름을 입력하세요"
        @keyup.enter="toRoomName"
        autofocus
      />
    </div>
    <div class="buttons">
      <button class="button" id="createroom" @click="toRoomName">확인</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserName",
  data() {
    return {
      name: "",
    };
  },
  methods: {
    toRoomName: function() {
      if (this.name.length < 2) {
        alert("이름은 2글자 이상이어야 합니다!");
      } else {
        this.$store.commit("CREATE_USERNAME", this.name);
        this.$router.push({
          name: "Room",
          params: { roomcode: this.$store.state.roomcode },
        });
      }
    },
  },
};
</script>

<style scoped>
.title {
  font-size: 80px;
  visibility: hidden;
}

.frame {
  margin-top: 3%;
}

.buttons {
  margin-top: 25px;
}

.button {
  border: 4px solid white;
  background-color: rgba(0, 0, 0, 0);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 20px;
}

.button:hover {
  border: 4px solid pink;
  background-color: pink;
}

.input {
  border: 3px solid pink;
  padding: 9px;
  padding-right: 50px;
  padding-left: 50px;
  text-align: center;
  font-size: 20px;
}

.input:focus {
  border: 3px solid blue;
}
</style>
