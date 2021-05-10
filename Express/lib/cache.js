"use strict";

const RedisCluster = require("redis-cluster");
const RedisClient = require("redis");
const config = require("./config");
let redis, redisSub;

let subCallbacks = new Map();

async function getRedisClient(sub) {
  const conf = await config.getConfig();

  if (sub && redisSub) return redisSub;
  if (!sub && redisSub) return redis;

  const options = {};
  //클라이언트 설정
  let newClient;
  if (conf.redisUseCluster) {
      newClient= new RedisCluster({
          servers: [{
              host: conf.redisHost,
              port: conf.redisPort,
          }],
          createCient: (port, host) => RedisClient.createClient(port, host, options);
      })
  } else { // 단일 클라이언트
    newClient = RedisClient.createClient(conf.redisPort, conf.redisHost, options)
  }

  if  (sub) {
     reidsSub = newClient;
     newClient.on('message', (topic, message)=> {
         //다음시간
     }) // 이벤트 에미터 받아옴
     // 메시지 큐 사용
    newClient.ong('error', err => {

    })
    
  }else {
    redis= newClient; 
}
}
