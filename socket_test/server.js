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
  console.log("user connected: ", socket.id); //3-1. client connected
  var name = "user" + count++; //3-1. temporal username
  io.to(socket.id).emit("change name", name); //3-1

  socket.on("disconnect", function () {
    //3-2. client disconnected
    console.log("user disconnected: ", socket.id);
  });

  socket.on("send message", function (name, text) {
    //3-3. chat service
    var msg = name + " : " + text;
    console.log(msg);
    io.emit("receive message", name, text);
  });
});

//4
http.listen(3000, function () {
  console.log("server on!");
});
