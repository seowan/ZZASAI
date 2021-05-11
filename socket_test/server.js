// server.js

var express = require("express");
var app = express();
var http = require("http").Server(app); //1
var io = require("socket.io")(http, { cors: { origin: "*" } }); //1. **allow all cors**

const User = class {
  constructor(id, name, code, isAdmin) {
    this.id = id;
    this.name = name;
    this.code = code;
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

  var user = null;
  user = new User(socket.id,"aaa","aaawww12","false");
  socket.on("info", function (name, code, isAdmin) {
    user = new User(socket.id, name, code, isAdmin); //유저 정보 저장
    if (isAdmin) {
      //방장이라면, 방 코드 유일값인지 확인
      for (var room of rooms) {
        if (room.code == code) {
          console.log("duplicated code!!!");
          io.to(socket.id).emit("duplicated code");
          user = null;
          return;
        }
      }
      //유일값일 경우 새 방 생성
      rooms.push(new Room(code, [user]));
    } else {
      for (var room of rooms) {
        if (room.code == code) {
          room.userlist.push(user);
          io.to(user.code).emit("room", room); //변화된 방 정보 모두에게 알리기
          break;
        }
      }
    }
    socket.join(code);
    console.log(socket.rooms);
    // if (rooms != null) {
    //   console.log(rooms[0].userlist);
    // }
  });

  socket.on("disconnect", function () {
    //3-2. client disconnected
    console.log("user disconnected: ", socket.id);
    if (user == null) return;

    for (var i in rooms) {
      if (room.code == user.code) {
        console.log("room found");

        if (user.isAdmin) {
          console.log("admin is leaving");
          //방장바꾸기 시도. if문 하나로 합쳐도 됨
          if (!rooms[i].nextAdmin()) {
            console.log("empty room. erase it");
            rooms.splice(i, 1); //실패하면, 마지막 사람므로 방 삭제
          }
        } else {
          //방장이 아닐 경우
          for (var j in rooms[i].userlist) {
            if (room.userlist[j].id == socket.id) {
              console.log("user found", rooms[i].userlist[j]);
              rooms[i].userlist.splice(i, 1); //삭제
              break;
            } //유저 찾음
          }
        }
        io.to(user.code).emit("disconnected", user); //모두에게 알려주기
        io.to(user.code).emit("room", room); //변화된 방 정보 모두에게 알리기
        break;
      }
    }
    // console.log(rooms);
  });

  /* painting function */
  socket.on("begin path", function (x, y) {
    if (user == null) return;
    io.to(user.code).emit("began path", x, y);
  });
  socket.on("stroke path", function (x, y, color, size) {
    if (user == null) return;
    io.to(user.code).emit("stroked path", x, y, color, size);
  });
  socket.on("clear all", function () {
    if (user == null) return;
    io.to(user.code).emit("cleared all");
  });

  /*card function*/
  socket.on("cardselect",function(cardno,target_id){
    console.log("cardselected!!!");
    console.log(cardno);
    console.log(target_id);
    io.emit("cardselected",cardno,target_id);
  })
});

//4
http.listen(3000, function () {
  console.log("server on!");
});
