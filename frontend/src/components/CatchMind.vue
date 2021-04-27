<template>
  <div>
    <h1>채팅방</h1>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">{{ msg.message }}</li>
    </ul>
    <div>
      <input type="text" @keyup.enter="sendMessage()" v-model="message" />
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "room",
  data() {
    return {
      messages: [],
      // 1) 서버와 연결
      socket: io("localhost:3001"),
    };
  },
  methods: {
    sendMessage(message) {
      // 2) 채팅메세지를 서버로 전송
      this.socket.emit("SEND_MESSAGE", { message });
    },
  },
  mounted() {
    // 3) 서버의 변경사항을 수신
    this.socket.on("MESSAGE", (data) => {
      this.messages = [...this.messages, data];
    });
  },
};
</script>
