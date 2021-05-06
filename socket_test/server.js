// server.js

var express = require("express");
var app = express();
var http = require("http").Server(app); //1
var io = require("socket.io")(http, { cors: { origin: "*" } }); //1. **allow all cors**

const User = class {
  constructor(id, name, isAdmin) {
    this.id = id;
    this.name = name;
    this.isAdmin = isAdmin;
  }
  str() {
    console.log(this.id, this.name, this.code, this.isAdmin);
  }
};

const Room = class {
  constructor(code, userlist) {
    this.code = code;
    this.userlist = userlist;
  }
  nextAdmin() {
    this.userlist.shift();
    if (Array.isArray(this.userlist) && this.userlist.length === 0) {
      return false; //빈 배열
    } else {
      return true;
    }
  }
};

var rooms = [];

io.on("connection", function (socket) {
  //3. interact with clients
  //3-1. client connected
  console.log("user connected: ", socket.id);
  io.emit("connected");

  var user = null;
  var code = null;
  socket.on("info", function (name, code, isAdmin) {
    user = new User(socket.id, name, isAdmin);
    code = code;
    // console.log(user, "hey");
    if (isAdmin) {
      //방장
      //방 코드 유일값인지 확인
      for (var room of rooms) {
        if (room.code == code) {
          io.emit("duplicated code");
          break;
        }
      }
      //유일값일 경우 새 방 생성
      rooms.push(new Room(code, [user]));
    } else {
      for (var room of rooms) {
        if (room.userlist == code) {
          room.userlist.push(user);
          break;
        }
      }
    }
    console.log(rooms);
  });

  socket.on("disconnect", function () {
    //3-2. client disconnected
    console.log("user disconnected: ", socket.id);

    if (user.isAdmin) {
      //방장일 경우
      for (var i in rooms) {
        if (rooms[i].userlist[0] == user) {
          io.emit("disconnected", rooms[i].userlist[0]); //모두에게 알려주기
          if (!rooms[i].nextAdmin()) {
            //방장바꾸기 시도
            rooms.splice(i, 1); //실패하면, 마지막 사람므로 방 삭제
          }
          break;
        }
      }
    } else {
      //아닐 경우
      for (var room of rooms) {
        //방 찾기
        if (room.code == code) {
          for (var i in room.userlist) {
            //유저 찾기
            if (room.userlist[i].id == socket.id) {
              io.emit("disconnected", room.userlist[i]); //모두에게 알려주기
              room.userlist.splice(i, 1); //삭제
              break;
            }
          }
          break;
        }
      }
    }
    console.log(rooms);
  });

  /* painting function */
  socket.on("begin path", function (x, y) {
    io.emit("began path", x, y);
  });
  socket.on("stroke path", function (x, y, color, size) {
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
