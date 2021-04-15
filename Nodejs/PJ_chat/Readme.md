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
