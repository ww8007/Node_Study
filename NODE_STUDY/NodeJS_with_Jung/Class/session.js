"use strict";

const cacheManager = require("./main");

class sessionManager extends cacheManager {}
const SessiongManger = new sessionManager();

SessiongManger.addConfig({
  token: "ran",
});

const config = SessiongManger.getConfig();

console.log(config);
