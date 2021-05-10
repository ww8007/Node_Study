"use strict";

const RedisCluster = require("redis-cluster");
const RedisClient = require("redis");
const config = require("./config");

const {promisify} = require('util')

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
         if (subCallbacks.has(topic)) {
             const callback = subCallbacks.get(topic); // 이미 캐시화 되어 있는 경우 새로운 토픽을 추가하지 않는 과정이라 생각
             callback(message);
         }
     }) // 이벤트 에미터 받아옴
     // 메시지 큐 사용
    newClient.on('error', err => {
        console.error(err);
        newClient.end();
    })
    
  }else {
    redis= newClient; 
}
    newClient.on('connect', () => {
        console.log(`${sub} connected`)
    })
    newClient.on('recconect', ()=> {
        console.log(`${sub} reconnected`)
    })

    promisify(newClient);
}

function promisifyClient (redis) {
    redis.get = util.promisify(redis.get.bind(redis)); 
}