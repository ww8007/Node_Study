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
