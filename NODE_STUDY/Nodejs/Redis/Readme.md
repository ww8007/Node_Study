# Redis

### Redis란

메모리에 데이터를 저장
C언어로 작성

DB처럼 사용가능

- 용도
  1. 사용자의 세션 서버
  2. 웹페이지 캐싱
     - 사이트 접속 시 미리 데이터를 적재 해둬서 속도 빠르게 하기

* 서버를 여러개 둬서 하나의 redis 서버를 바라보게 함

### 설치

brew install redis

docker run -p 6379:6379 redis

### 사용처

- url은 하나지만 서버는 달라지는 경우가 있음 - 채팅 서버
  세션 서버를 여기에 사용, 인증 관련

* docker 설치하기 싫은 경우

  1. redis-server
  1. redis-cli

* docker 진행 하는 이유
  윈도우에서 하위 버전 설치 지원 안하는 것과 공식 버전을 설치 할 수 있기 때문에 좋음

### redis 사용하기

docker run -p 6379:6379 redis

- 컨테이너로 접속

1.  docker exec -it [containerid] /bin/bahs 2. redis-cli

- 데이터 타입
  1. Strings
  1. Lists
  1. Sets
  1. Hashes

* 간단한 변수 설정

  1. set a 10
  1. get a

* expire로 삭제되는 변수 설정하기
  ttl a 시간이 사라짐

* 배열 생성하여 push 하기

  1. lpush num_lists 1
     - 확인 : lrange num_lists 0 0
     - 모두 확인 : lrange num_lists 0 -1 -> 전체 배열 확인하기
  2. 오른쪽에 삽입
     - rpush num_lists 3

* set, list

  - set -> 중복 허용안함
  - list -> 중복 허용

* 자바스크립트처럼 리터럴 객체 사용하기
  - hmset fruit orange 2000 apple 1000
  * 가져 오는 것은 hmget으로 가져오면 된다. -> hmget fruit orange apple

### Redis Node.js

Nodejs와 redis 연결하기

```javascript
const redis = require("redis");
// 만약 외부서버를 사용한다고 하면 createClient 부분에 포트 번호와 주소를 집어넣으면 된다.
const client = redis.createClient();

client.on("error", function (error) {
  console.error(error);
});
```

- 모든 내용을 가져오는 방법
  ```javascript
  client.hgetall("fruit", (err, res) => {
    console.log(res);
  });
  ```

### Redis 캐싱

- 실무에서의 redis 사용
  1. 캐싱
  1. 미리 가서 적재를 해옴

### sequelize db 생성

1. mysql.server start -> my sql 서버 시작
1. mysql u root -p -> 비밀번호 입력
1. create database fastcampus4 -> .env에 설정한대로 db 생서

- db가 없는 경우 sync를 해줘야하 함
  - 최초의 table이 설정 되어 있지 않은 경우
    - return db.sequelize.sync();

* 캐싱을 하는 경우

  1. 글 목록이 10개 정도 잇을 정도
  2. 글을 작성할 때 redis

* npm redis에서 가져오기

* 글 쓰는 부분에서 redis 설정해주기
  stringfy로 저장을 해주는 것이 좋음

* data를 집어넣고 확인하기
  keys \*로 데이터가 들어간 것을 확인하면 된다.

* 안에서 변수를 할당하여서 처리하면 작용 시점을 잡기 어렵기 때문에 Promise문법을 사용해서 설정하도록 한다.

* 공식문서를 확인하면 resolve로 설정한 부분을 조금 더 편리하게 사용이 가능하도록 되어 있는게 있다.

  ```javascript
  const getAsync = (key) =>
  // new Promise((resolve, reject) => {
  // redisClient.get(key, (err, data) => {
  // if (err) reject(err);
  // if (data) {
  // resolve(data);
  // } else {
  // resolve(null);
  // }
  // });
  // });

    const getAsync = promisify(redisClient.get).bind(redisClient);
  ```

```

```
