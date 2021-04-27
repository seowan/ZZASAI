// app.js
const cors = require("cors");
const express = require("express");

const app = express();

// CORS 설정
app.use(cors());

app.get("/", function (req, res) {
  // '/' 위치에 'get'요청을 받는 경우,
  res.send("Hello World!"); // "Hello World!"를 보냅니다.
});

const server = app.listen(3001, function () {
  console.log("server running on port 3001");
});

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  console.log("connected~");
  socket.on("SEND_MESSAGE", function (data) {
    io.emit("MESSAGE", data);
  });
});
