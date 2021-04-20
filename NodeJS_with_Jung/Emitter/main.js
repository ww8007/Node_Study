"use strict";

const EventEimtter = require("events");

class ChatManager extends EventEimtter {}

const chatManager = new ChatManager();

chatManager.on("join", () => {
  console.log("new user joined");
});

chatManager.emit("join");
