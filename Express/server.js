"use strict";

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const http = require("http");
const helmet = require("helmet");
class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app); // 모든 공간에서 사용이 가능하도록 super로 선언
    this.config = config;
    this.app = app;
    this.currentConnection = new Set(); //분산된 커넥션을 변수로 set으로 가지게 됨
    this.busy = new WeakSet(); // 무중단 배포 환경 ci cd -> 사용중인 connection
    this.stopping = false; //초기화 과정은 false로 설정
  }

  async start() {
    this.app.use(cookieParser());
    this.app.use(bodyParser());
    this.app.use(helmet());

    this.app.use((err, req, res, next) => {
      console.error("Internal error", err);
      if (req) {
        console.log(req); // 모든 리퀘스트를 로깅
      }
      if (res) {
        console.log(res); // 모든 응답을 로깅하게 됨
      }
      next(); //다음 분기로 넘어갈 수 있다는 것을 알림
    });
  }
}

const init = async (config = {}) => {
  const server = new ApiServer(config); // 서버 생성 후 바로 환경 설정
  return server.start();
};
