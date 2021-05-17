<template>
  <div>
    <div v-for="(message, i) in messages" :key="i">
      {{ message.name }}: {{ message.text }}
    </div>
    <div>
      <input type="text" v-model="text" @keyup.enter="typeMessage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  components: {},
  data() {
    return {
      socket: this.$store.state.socket,
      userinfo: this.$store.state.userinfo,
      text: "",
      messages: [],
    };
  },
  mounted() {
    console.log("Chat: ", this.socket);

    /* chatting */
    this.socket.on("chat", (name, msg) => {
      // console.log(name, msg);
      this.messages.push({ name: name, text: msg });
      // console.log(this.messages);
    });
  },
  methods: {
    /* to game play - chatting */
    typeMessage() {
      //text input for chatting - on keyup callback func
      console.log(this.userinfo.username, this.text);
      this.socket.emit("chat", this.userinfo.username, this.text);
      this.text = "";
    },
  },
};
</script>

<style scoped></style>
