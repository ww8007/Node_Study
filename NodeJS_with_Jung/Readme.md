# NodeJS

### Mac Node js 설치

- LTS -> 장기적인 지원 보장
  - 실제 서비스를 이용하는 경우 LTS를 이용하면 된다.
- Current -> 최신기술 모두 사용 가능

* standard js 설치
  - 확장 팩 설치함

### 레벨 테스트

1. use strict
2. 객체와 조건문
3. function
   - call, binding
   ```javascript
   function isEmptrObj() {
     if (obj.title) {
       return true;
     } else {
       return false;
     }
   }
   ```
4. 조건문의 삼항 연산자
   - 리팩토링 개념
   ```javascript
   const isEmpty = () => (obj.title ? true : false);
   ```

### I/O와 프로그래밍 패러다임

1. I/O
   - input, output
   - 컴퓨터 데이터 입력 출력 담당
   - 동시성 프로그래밍 문제점을 해결하기 위한 node 출시
   - 요청, 작업 -> 네트워크 요청에 대한 I/O가 큰 비중을 차지
1. 비동기, 동기
   - 동기화 -> 데이터를 일치 시키는 행동
   - 비동기 -> 행동이 완료 될 때 까지 기다리지 않음
     > nodejs v8 에서 비동기 작업들이 이루어지게 됨
1. Non-blocking vs blocking
   - blocking -> 해당 코드 블럭 완료 전까지 다른 코드 실행 x
   - Non-blocking -> 블럭 끝날 때 까지 기다리지 않고 코드 실행
   - Node js -> Nonblocking

> NodeJs는 이벤트 주도 방식임

    Thread pull 기반과는 다르게 동작
    * call-back 방식으로 동작하는 것이 특징

### Node VS WEB

- 노드와 프런트엔드에서의 웹 간의 차이점을 알아봄

1. web
   - web 같은 경우 글로벌 객체가 보인다.
   - 크롬 브라우저 같은 경우가 하나의 윈도우
2. Node
   - Node의 경우에는 안보임
   - Node의 경우 이게 백엔드가 됨
   * package를 require를 통해 가져옴
     bable, wepack을 통해서 설정을 하지 않는 이상 import 사용 불가
   * winodw.location.href -> 글로벌 변수를 정의 하려면
     최상위에 변수를 선언하면 됨 -> const, let, var

### Node.js REPL

Nodejs 에서 코딩 하는 방법 2가지

1. 인터프리터를 통한 실시간 코딩 -> REPL

- window
  powershell -> 기반이 가장 좋음

* node 그냥 실행 시키면 인터프리터로 동작

> String. + tab -> String 관련 구문 다 보여줌

> 어떤 특정 객체에 대해 정보가 필요할 경우 사용

### NPM

- npm을 cli에서 사용하는 법

> npm -v

    npm 버전 확인
    node -v 와 같은 맥락

> npm install, npm i (설치 패키지 명)

    npm i express

> npm init

    새로운 npm package 초기화

> npm install express --save-dev

    해당 패키지 정상 설치, package.json에 자동 추가

> npm install nodemon -g

    전역적으로 패키지를 설치해줌

> npx -> 설치만 하는 것이 목적이 아닌 실행을 목적

    목적이 어디 있느냐가 관건
    npx create-react-app react -> react 프로젝트 생성
    react가 실행 명령어로 동작이 가능하게 됨

> npm uninstall express

    express 삭제 가능
    * global로 설치하였다면
        npm uninstall -g express

### Semantic versioning

- 일반적으로 npm으로 설명
- 단순한 숫자 버저닝이 아니라 의미가 있게 체계적인 버저닝

> 1.0.0 같이 3자리 Semantic versioning

    일반적으로 Semantic versioning은 3자리

> 일반적인 배포 (하위 호환, 하위 호환 불가가 관건)

1. First Release 최초 배포
   최초 배포의 경우 -> 1.0.0
1. Bug Fix 되고 하위 호환이 가능한 경우
   첫번 째 자리수만 올려줌 -> 1.0.1
1. 하위 호환이 가능하지만 기능이 추가 된 경우
   두번 째 자리수 올려줌 -> 1.1.0
1. 하위 호환이 되지 않는 중요한 변화가 생겼을 경우
   맨 앞자리를 올려줌 -> 2.0.0

> Patch Release

    ~1.0.4

> Minor Release

    ^1.0.4

> Major Release

    * or x

### npx

npx는 실제 운영되는 서버에서 사용되는 경우는 적지만
개발 환경에서의 사용은 유용함

- npm과의 차이점
  1. npm
  2. npx
     - 테스트 목적, 이례성으로 사용하는 것이 목적
     - npx cowsay
     - 다운로드 해서 저장하는 것이 아닌 바로 실행이 가능하게 됨
  - 일시적으로 다운로드 받고 **1회성**으로 실행이 가능

> devops 방식 배포 코드 cicd

- npm의 경우 packagelock.json
  - 기존 사용되는 legacy 모델이 업데이트가 되는 경우 불필요한 파일 등록되면
  - 불필요한 파일에 의해서 **무결성**이 깨지게 됨

> 코드를 최소화, 의존성 최소화가 가장 중요하다.

### nodemon

auto save가 적용되어 있는 경우 nodemon이 파일의 변화를 감지하여서 실행을 해주는 역할을 해줌

1. npm init -y
   기본 설정을 다 해줘서 node init도 편함
2. package.json에 script에 "start":"nodemon main.js"추가
3. npm start

### Module.exports

모듈의 exports의 경우 함수, 객체, class를 외부로 내보낼 수 있음

1.  두가지 이상의 함수를 exports

    - 함수 명과 export 하는 이름이 같다면 edit: edit이 아닌 바로 edit으로 내보낼 수 있음

    ```javascript
    "use strict";

    function edit() {}
    function write() {}

    module.exports = {
      edit,
      write,
    };
    ```

2.  단일 클래스, 함수 export

    ```javascript
    "use strict";

    function edit() {}
    function write() {}
    class update {}
    module.exports = edit;
    ```

3.  환경설정과 같은 외부 데이터 접근 하기 위해 사용하는 경우

    - js 안에서는 함수 안에서 바로 호출이 가능

    * 단일 파일로 export 하는 경우 config 파일로 사용할 경우
    * 함수를 인라인으로 바로 실행이 가능하다는 **장점**이 있음

      ````javascript
      "use strict";

          module.exports = {

          id: "",
          token: "",
          fn: () => {
          console.log("this is function");
          },

      };

          ```
      ````

### 이벤트 구조 자료구조

1. Queue
   - 선입선출의 구조(먼저 들어간게 먼저 나옴)
   - FIFO(First In First Out)

> push

    요소를 삽입하는 행동

> shift

    첫번 째 요소를 제거하고 반환

2. Stacl(스택)
   - 후입선출(나중에 들어간게 먼저 나옴)
   - LIFO(Last In Last Out)

> push

    요소 삽입

> pop

    배열에 대해서 pop을 호출 가능

### 데이터 구조 실습

사이트 loupe

- 일반적으로 프런트앤드에서 사용하는 경우 사용하지만 이는 이벤트 루프가 일어나는 과정을 직관적으로 확인이 가능하다.

### Node.js Every

- 배열에서의 조건에 대해 모두다 만족하는 경우를 지칭

* ture, false를 반환하게 된다.

> 코드를 끝까지 돌지 않고 이외 값이 나온다면 종료하고 false 반환

````js
"use strict";
// 1보다 큰 값만 집어넣음
const arr = [2, 3, 4];

// Object.keys
// Object.value

const isBiggerThenone = arr.every((key) => key > 1);

console.log(isBiggerThenone);
```dotnetcli

````

### Find, Includes

- 배열 함수는 arrow function(화살표 함수)를 통해서 key 값을 설정하면 된다.

> Find

    찾는 결과 값 반환(데이터가 필요한 경우)

> Includes

    찾는 결과 있을 경우 true, 아닐 경우 false(데이터 유무만 확인)

```javascript
"use strict";
// find
const arr = ["node.js", "올인원"];

const res = arr.find((key) => key === "올인원");

console.log(res);

// include

const ans = arr.includes("node.js");

console.log(ans);
```

### ForEach

- 기존의 for문과는 차이가 크게 없지만 가독성이 올라감
- foreach의 경우는 비동기적으로 실행이 되지 않는 것이 중요한 점

> 비동기 적으로 코드가 실행되지 않음!!!

- 각각의 배열 데이터에 접근이 가능하다.

* 배열을 복사할 때 에는 spread 연산자를 사용하는 것이 더 효율적 이다.

```javascript
"use strict";

const arr = [1, 2, 3];
const newArr = [];
arr.forEach((item) => {
  newArr.push(item);
});

console.log(newArr);
```

### Map, Filter

1. Map

   - 새로운 배열을 반환

   * Arrrow Function(화살표 함수)를 통해서 조건을 정해줄 수 있다.
     > 모든 요소에 대해서 조건을 수행

   ```javascript
   const a = [1, 2, 3];

   const b = a.map((x) => x + 1);

   console.log(b);
   ```

2. Filter

   - 새로운 배열을 반환
     > 조건을 만족하는 요소만을 출력

   ```javascript
   const Filter = a.filter((x) => x > 1);
   console.log(Filter);
   ```

###
