const express = require("express");

const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = app.listen(port, () => {
  console.log("Express listening on port", port);
});

const listen = require("socket.io");
const io = listen(server);

io.on("connection", (socket) => {
  console.log("소캣 io 통신");
  socket.on("client message", (data) => {
    console.log(data);
    io.emit("server message", {
      message: data.message,
    });
  });
});
