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

모듈별로 분리해서 작성하는게 좋음

routes 폴더를 따로 가져와서 사용한다.

- 모듈을 만들어서 사용한다고 생각하면됨

GET/ contacts
GET/ contacts/list

- 새로 모듈을 내보내 줄 때의 주의점
  router의 모듈로 exports를 해줘야지 오류가 생기지 않는다.

### View Engine - Nunjucks

제품 정보들을 다 뿌려주는
python jango jinga

npm install nunjucks

1. Nunjucks setting
   app.js에서 module 불러옴

GET /admin/products

2. nunjucks.configure("template")
   nunjucks를 사용하고 싶은 폴더를 지정하여서 설정해준다.

   - autoscape : js가 그대로 노출되는 것을 방지(태그 걸러줌)
   - express : 내가 사용하는 root js 설정

3. template을 만들어줌
4. products.html 생성 후 받을 내용 작성
   - 하나의 템플릿 당 하나의 내용밖에 받지 못하니 유의
5. root로 사용하는 js에 get template 만들고 불러옴

### pacakege-lock.json

express - bodyparser 1.2

nunjucks - bodyparser 2.0

이렇게 두개의 버전이 다를 경우의 오류를 해결 할 수 있도록 한다.

- 어떤 버전에서의 최적화가 더 옳은지에 대한 판단을 하여서 이에 대한 오류를 안생기도록 하는 것이 목적

### template 상속

기본 틀을 만들어두고 사용한다고 생각하면 됨

autoescape
