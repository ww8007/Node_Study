# 채팅 프로그램 만들기

### 목차

1. 채팅 구현하기
1. 서버 확장 고려하기

### socket.io

Node.js용 소켓 프로그래밍 지원
서버와의 양방향 통신
클라이언트와 서버와 연결

### 단방향 구현 채팅 (ajax)

- 2초마다 ajax로 DB에 채팅이 있는지 체크(2초는 예시)
- ajax 요청에 대해 응답 client페이지 채팅반영

리소스 낭비가 일어나게 됨

### 양방향 채팅

- 연결된 모든 사람들에게 뿌려줌
- 서버는 수동적인 역할만 함

양방향 - 소켓 프로그래밍

### socket.io 작동방식

- websocket 지원하는 브라우저에서는 그대로 작동

- 버전이 낮은 경우
  1. 플래시 설치의 경우 -> 플래시로 동작
  1. ajax로 중간중간마다 체크한다.
  1. ifrmae 또는 streaming 등으로 실행

* 요즘에는 브라우저 버전이 낮은 경우 -> 사용자에게 버전을 높히도록 요청을 가능

### 작동흐름

1. 웹페이지 접속
1. 클라이언트 var socket = io();
1. 서버와 연결관계를 맺음
1. 서버에 이벤트로 emit
1. 전체 클라이언트에 메세지 전달

- 기본으로 express만 설치

### 서버 구성

1. npm install socket.io
1. app.listen에 변수를 하나 받음
1. html 파일에 jquery cdn을 통해서 script 설정
1. script로 socket io 설정
1. script로 아래와 같이 설정만 해줘도 연결이 맺어짐
   ```javascript
   <script>
       var socket = io();
   <script>
   ```

- html 파일에서 var socket = io() 설정만 해줘도 소켓 io로 접속이 된다는 사실을 확인 가능
- 모든 브라우저에서 접속 하면 접속 됬다고 나옴

* app.js 에서 socketio를 통해서 client message라는 이벤트 명으로 명령을 받는다고 보면 됨

* emit을 통해서 뿌려주는 것은 기본 상식

### 채팅 보내기와 받기

- 보내는건 .emit
- 받는 건 .on

io.emit -> 모든 사람에게 모두 뿌려줌

- 사용자는 client message를 통해서 받음

- 채팅 서버와 클라이언트가 분리 될 경우
  - var socket = io ("도메인을 입력하면 된다.");

* socket.broadcast.emit("server meassage", {
  message: data.message,
  })

* 위는 broadcast를 사용해서 나를 제외하고 뿌려주는다는 의미이다.

* 정리 io.emit -> 모든 사람에게 뿌려줌
* socket.broadcast -> 나를 제외한 모든 사람에게 뿌려줌

### 정리

| 프론트  | 서버      | 서버    | 프론트    |
| ------- | --------- | ------- | --------- |
| clientM | clientM   | ServerM | ServerM   |
| Emit    | socket.on | Emit    | socket.on |

- 동작 시퀀스

  1. clientM 이벤트 명으로 송출
  1. 서버는 socket.on 으로 계속 대기
  1. serverM 이벤트 명으로 송출 -> io emit
  1. socket.on으로 대기

- socket 으로 귓속말 기능 추가 가능

### 사용자 입장

1. color 모델 추가하여서 유저 분리
1. socket.broadcast.emit을 통해서 join 유저 명 날려줌
1. index.html 부의 socket.on("join", function()=>{}) 통해서 join 알려줌

- io.emit -> 모두에게 보임
- socket.broadcast -> 나에게 안보임

### 사용자 퇴장

사용자 퇴장은 예약어가 존재 -> disconnect

```javascript
socket.on("disconnect", () => {
  socket.broadcast.emit("leave", { username });
});
```

- 서버에서 접속을 끊어짐을 확인 가능하다.

### 서버 확장

- 서버 증설 시 고려점

  - -> 세션의 공유
  - -> 서버끼리의 채팅을 공유를 해줘야 함
  - 병렬 처리가 필수

- Redis를 세션 서버로 둠

1. npm install socket.io-redis
2. io.adapter(redis({ host: "redis", port: 6379 }));
3. docker compose를 통해 서버 여러개 띄우기
4. node/Dockerfile 생성 후 명령어 입력
5. docker-compose.yml
   - redis의 경우 redis:alpine으로 조금 더 가볍게 돌릴 수 있다.
   - 이미지를 alpine 이미지로 사용
6. node의 경우 모두 3000번 포트를 사용
7. nginx를 생성하여서 dockerfile과 nginx.conf 생성
   - niginx.conf -> 80번으로
   - upstream을 통해 node 1,2,3,4 서버를 하나의 서버로 띄움  
      로드 벨런싱 역할을 수행
   - 간단히 말해 nginx를 통해 node 1,2,3,4를 하나로 묶은 서버를 띄운다고 생각하면 됨
8. docker-compose build
   - 명령어를 통해 build를 시킴
9. docker-compose up

- redis를 통한 세션을 공유 하는 것이 이번의 목적
