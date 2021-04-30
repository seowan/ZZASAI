// server.js

var express = require("express");
var app = express();
var http = require("http").Server(app); //1
var io = require("socket.io")(http, { cors: { origin: "*" } }); //1. **allow all cors**
// app.get("/", function (req, res) {
//   //2
//   res.sendFile(__dirname + "/client.html");
// });

var count = 1;
io.on("connection", function (socket) {
  //3. interact with clients
  //3-1. client connected

  socket.on("disconnect", function () {
    //3-2. client disconnected
    console.log("user disconnected: ", socket.id);
  });

  socket.on("begin path", function (x, y) {
    // io.emit("move", x, y);
    io.emit("began path", x, y);
  });
  socket.on("stroke path", function (x, y, color, size) {
    // io.emit("paint", x, y);
    io.emit("stroked path", x, y, color, size);
  });
  socket.on("clear all", function () {
    io.emit("cleared all");
  });
});

//4
http.listen(3000, function () {
  console.log("server on!");
});
