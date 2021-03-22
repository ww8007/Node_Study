# Express

### 왜 사용 하는가

1. 웹서비스의 관점
   1. Express를 사용하지 않고 웹서버를 띄워보기
      middleware를 사용하거나, 오류 해결에서 조금 더 편함
   2. 프레임워크 선정시 고려해야 될점
      node.js 에서 가장 많이 사용 <br>
      풍부한 레퍼런스 존재 <br>

### Express 사용하지 않고 웹서버 띄워보기

- 규칙
  사용자는 요청하고 서버는 응답한다.
  Request(URL, form전송)

- 내장 모듈 사용해서 웹서버 띄워보기

```js
const http = require("http");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Server");
    response.end();
  })
  .listen(3000);
```

### http 상태 코드

| 상태코드 | 설명        |
| -------- | ----------- |
| 1xx      | 조건부 응답 |
| 2xx      | 응답 성공   |
| 3xx      | 리다이렉션  |
| 4xx      | 요청오류    |
| 5xx      | 서버오류    |

express를 사용하더라도 위와 동일하게 응답에 대한 response를 작성하는 것은 동일함

### express를 사용한 응답

package.json 생성을 먼저 해줘야함
npm install express

저장할 때 마다 서버를 내렸다가 올리는걸 자동화

- nodemon

npm install nodemon
-> 자동으로 변경점을 제대로 잡아줌

- script를 통한 자동화

npm start, npm run dev

### nodemon

npm install -g nodemon

변경사항을 바로 저장을 해줘서 바로 적용점을 잡을 수 있음

- 다른 서버가 실행중 일 경우
  lsof -i :3000
  kill -9 26744

npm init -y

- npx nomdemon inex.js
  nodemon이 설치되어 있지 않더라도 바로 설치를 시켜줘서 오류를 없도록 만들어준다.

### Routing

url을 추가하는 방법 중 하나

GET /admin
GET /admin/products
