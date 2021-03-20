# NodeJs

### 설명

웹브라우저에서 쓰이는 자바스크립트를 서버에서 사용가능(자바스크립트 문법 서버사용)
시도 자체가 없었던 것은 아니지만 대용량 서비스를 위해서 탄생
V8 -> 크롬에 탑재된 자바스크립트 엔진

- 특징 -> 웹서버에서 많이 사용됨

### Node.js 설치하기

nodejs 홈페이지에서 LTS 버전을 사용

### 에디터

에디터의 경우에는 자신이 원하는 것을 아무거나 사용하면 됨

### 모듈 패턴

node js를 이용한 실행
node (원하는 파일명)

- node hello.js

* 내보낼 때
  module.exports
* 불러올 때
  require

내장 모듈을 사용할 경우 경로를 지정하지 않아도 됨
함수를 내보낼 수 도 있음

- export

```javascript
function Myvar() {
  this.name = "my instance";
}
module.exports = Myvar;
```

- import

```javascript
const Myvar = require("./myvar");
const setVar = new Myvar();
console.log(setVar.name);
```

### npm

[npm](https://www.npmjs.com/)

1. npm init

2. npm install express
3. npm install uuid4

- 경로를 입력하는 것은 내가 만든 모듈을 사용
- 내장 모듈의 경우 경로 설정 안해도 됨

> package.json

    dependencies 경우 설치된 모듈에 대한 나열이 되어있음
    명시가 되어 있으므로 node_modules를 제외하고 git이나 전송을 해도 무관함

- npm update의 경우 update를 지원해 준다

> package-lock.json

    라이브러리가 공통으로 걸리는 경우 각각의 프레임워크 별로 하위에 참조하는 버전을 다르게 함
    - 모듈충돌을 방지한다고 생각하면 됨

- npm이라는 명령을 만들고 싶은 경우

package.json에 script부분에 추가를 시켜주면 된다.

- start의 경우는 npm start로 바로 가능
- dev의 경우는 npm run dev로 설정해야 함

```json
{
  "name": "npm",
  "version": "1.0.0",
  "description": "node online",
  "main": "index.js",
  // 이렇게 추가하여서 사용한다.
  "scripts": {
    "start": "node index.js",
    "dev": "node index.js"
  },
  "author": "ww8007",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "uuid4": "^2.0.2"
  }
}
```
