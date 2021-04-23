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

### Object.assign vs spread

1. Assing
   - 객체를 합쳐서 하나의 새로운 객체를 반환

```javascript
"use strict";

const obj = {
  title: "node js 패키지",
};

const newObj = {
  name: "패스트 캠퍼스",
};

const res = Object.assign({}, obj, newObj);
console.log(res);
```

2. spread
   - ... 연산자를 사용해서 객체를 합성가능
   * 새로운 객체(배열)를 반환
     > 가독성이 좋아지는 장점이 잇음

```javascript
const ans = {
  ...obj,
  ...newObj,
};

console.log(ans);
```

### Set

- 증복되는 데이터를 제거 하면서 데이터를 삽입가능

> queue, stack과는 다른 점

      데이터가 중복으로 쌓이는 점이 다름

> .has

    true, false를 반환함
    안에 인자가 있는지 확인 할 수 있음

### some

> Every와의 차이점

    Every : 모든 요소에 대한 만족
    some : 한 가지 요소라도 만족하면 true
            최소 하나라도 만족하면 true

> Arrow Function => 을 사용해서 조건을 검

    const res = arr.some((x) => x < 1);

```javascript
"use strict";

const arr = [1, 2, 3, 4, -1, -2];

const res = arr.some((x) => x < 1);

console.log(res);
```

### Template String

- 한 문자열 안에서 변수, 상수 통합하여 표현 가능

> $표시를 사용하여서 변수를 삽입 가능
> 함수의 인자를 Template을 통해서 호출 가능

    console.log`str`

> 변수를 호출할 때 $(달러표시)를 사용함

```javascript
"use strict";
const details = "자세한 내용";
let str = "node.js";
str += `hi${details}`;

console.log(str);
```

**Styled Component**에서 Template String을 사용함

### String

- 단순한 문자열에 대한 정보를 내장하고 있다.

> js의 경우 string을 내장하고 있기에 마음대로 사용이 가능하다.

- 3가지 조작이 가능
  1. startWith
  1. includes
  1. endWith

> js의 경우 unicode를 지원하기 때문에 string에 대해서 걱정하지 않아도 됨

    형변환, 특수문자

> 익명 문법을 사용해서 함수의 결과값을 바로 표출해 낼 수 있다.

> && , || 연산자의 경우 연산자의 우선순위 순서가 존재하지 않는다.

### Type Checking

- typeof method를 사용할 시 쉽게 type을 체크 가능하다.

> 배열의 경우 type이 object로 잡히게 된다

### Hoisting

- js에서 생성 및 실행 단계가 어떻게 동작하는지에 대한

> 일반적인 경우 함수를 선언하고 호출하는 것 으로 사용됨
> Arrow Function은 사용 불가, function 구문만 사용이 가능하다.

```javascript
say("hi");
function say(word) {
  console.log(word);
}
```

### IIFE

> 즉시 실행 함수 표현

    정의 되자 마자 즉시 실행되는 함수
    IIFE의 경우 외부에서 접근이 불가하다.

> 익명함수

    전역 스코프에 불필요한 변수를 추가하여 오염시키는 것을 방지
    다른 변수들이 함수 안으로 추가되는 것을 막음

> 변수에 익명함수 저장

    함수가 저장되는 것이 아닌 함수의 결과만 저장이 됨

```javascript
// IIFE
(function () {
  var lang = "js";
})();
// 외부로 부터 접근이 불가하게 됨
console.log(lang);
```

### setinterval

- 특정 함수를 특정 간격으로 실행이 가능하도록 함

> 뒤에 인자로 오는 시간 마다 실행이 되도록하는 것이 특징

```javascript
"use strict";

setInterval(() => {
  console.log(1);
}, 1000);
```

### handling

- try, catch 구문을 사용하여서 오류 검출

```javascript
"use strict";

try {
  a;
} catch (e) {
  console.log("Err" + e);
}
```

> try, catch를 이용한 오류 건너뛰기 프로그램

    try로 오류를 실행시키고 catch에 오류를 출력시키지 않게 되면 오류를 건너뛰어서 코드가 실행된다.

```javascript
"use strict";

try {
  a;
} catch (e) {}
console.log("a");
```

### Arrow Functions

- lambda와 같은 개념으로 es6에서 가장 많이 사용되는 화살표 함수
- this에 대해서 다른 scope를 가지고 있어서 불편함 해결

> 명시적으로 return 이라는 키워드 없이도 반환이 가능하다.

> 기존의 this의 범위와 다르게 동작함

    global 객체의 this를 사용함

- 아래와 같이 화살표 함수를 사용해서 간단하게 리펙토링이 가능하다.

```javascript
"use strict";

const { resolve } = require("node:path");

API.prototype.get = function (resource) {
  var self = this;
  return new Promise(function (resolve, reject) {
    http.get(self.uri + resource, function (data) {
      resolve(data);
    });
  });
};

API.prototype.get = (resource) =>
  new Promise((resolve, reject) =>
    http.get(this.uri + resource, (data) => {
      resolve(data);
    })
  );
```

### Arrow Functions 연습문제

- curried Function 현업에서 마주칠 수 있는

* 쇼핑몰 운영 vip, black-Friday
  - 할인율에 대한 코드를 작성
  - 등급에 따른 할인율이 다름

> Arrow Function 문제점

    코드를 사용하는 것은 문제가 없음
    쇼핑몰에서의 가격과, 할인율, 조건 별로 분류를 해야할 것이 많아짐
    분기별로 나눠야하는 내용이 너무나도 많아짐

> 합성함수

    f(x) = x + 1
    g(x) = x^2
    h(x) = f(g(x))
    대수학을 사용하여야 하는 경우 존재 -> 딥러닝

> 반복되는 호출 파라미터에 대해서 쉽게 사용이 가능하다.

    getDiscount = (rate) => (price) => rate * price;

```javascript
// curried Function
// Clousre
getDisCount = (rate) => (price) => rate * price;
const ans = (getTenpercentOff = getDisCount(0.1));
//price에 가격을 입력하게 되면 동일한 할인률에 대하여 모든 상품들을 적용 가능하게 됨
getTenpercentOff(price);

console.log(ans);
```

### Class

> 자바 스크립트 : 멀티 패러다임

    1. 객체지향 프로그래밍
    2. 함수형 프로그래밍

node.green

- ES2015 = ES6
- ES2016 = ES7
- ES2017 = ES8
- ES2018 = ES9

> class 사용처

    캐시 메니져 : 디자인 패턴(싱글턴)
    싱글턴 : 기존의 프로토타입 기반 -> 코드가 깔끔하지 않음(구현은 같음)
    Redis를 사용하는 경우 빈번
    데이터 베이스 메니져 : db 접근 과정 -> class
    ORM : crud 쿼리 직접 접근 안하고 접근
    쿼리메니져 db에서 class화 시켜서 사용하면 사용이 편함

- 서버 운용 환경에서의 코드 실행
  - 환경설정 변수를 설정하는 경우 class 많이 사용

* 네트워크의 경우 각각의 기능마다 독립적으로 트래픽 분산처리가 많음
  - 장애가 발생해서 환경변수 파일을 읽어 올 수 없는 경우
  - cache가 없는 심각한 문제가 생기게됨

> class 사용법

    생성자 : async, await : 비동기적 코드 사용 불가

### class Extends

- 클래스가 그대로 복제가 되면서 실행이 가능
- node의 경우 module화가 가장 중요함

> 기존 클래스를 확장한다는 의미로 생각하면 됨

    super : 기존 클래스의 생성자를 가져올 수 있음
    상위 클래스의 생성자를 호출한다는 의미
    상위 클래스의 설정을 그대로 가져온다는 것이 특징이다.

> module.export를 사용한 클래스 내보내기

    기존 클래스를 내보내서 다른 파일에서 사용이 가능하다.
    클래스 : 기존 모듈화된 기능들을 재활용 하는 것도 중요한 요소 중 하나
    그러기에 다시 재선언 할 필요 없이 사용할 수 있는게 extends의 목적이다.

### Static Method

> static

    정적으로 해석 되지만 일반적으로 정적으로 읽지 않고
    static 본질적 의미로 읽는다.
    new 를 이용한 생성이 아닌 바로 사용이 가능하다.

- 생성자를 통해서 class 초기화 되는 것은 사실이지만
- static 함수로 생성을 하면 바로 호출이 가능

```javascript
"use strict";

class test {
  static call() {
    console.log("static method");
  }
}

const ans = test.call();
```

### Destructing

> 비구조화 할당

    react 에서 많이 사용됨
    const { title, value } = obj;

> 배열 비구조화 할당

    const [, a, b] = arr;
    앞에 비어진 콤마는 자리수를 맞추기 위함
    a, b 에 1,2 번 인덱스의 배열이 출력됨

```javascript
"use strict";

const obj = {
  title: "node.js",
  value: "올인원 패키지",
};

// es6 비구조화 할당

const arr = [0, 1, 2];
const { title, value } = obj;
const [, a, b] = arr;
console.log(a, b);
```

### Generator 개념적 접근

- async await으로 인해서 사용빈도가 줄었을 뿐 아직도 사용 빈도가 있음

* 생성자라고 불리는 이유
  1. yield 문법을 사용
     - Generator -> 함수가 여러번 호출 될 때 다른 결과 값을 리턴함

> Generator

    생성하는 함수 -> 생성자
    function *을 통해서 생성을 하게 됨
    yield를 사용하는 것이 특징적
    객체 안에서도 사용이 가능하다.

```javascript
"use strict";

function* log() {
  console.log(0, yield);
  console.log(1, yield);
  console.log(2, yield);
}

const gen = log();

gen.next("zero");
gen.next("first");
gen.next("second");
gen.next("hi");
gen.next("hihi");

const obj = {
  *gen() {
    let cnt = 0;
    yield ++cnt;
    yield ++cnt;
    yield ++cnt;
  },
};

const g = obj.gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
```

### Timers

- nodejs 에서의 핵심 모듈 Timers

> Timers

    nodejs 접해보지 않았어도 빈번하게 사용
    이벤트를 만드는 조건에서 화면, worker Thread 에서 작성가능
    몇 초 뒤에 보이는 코드
    별도의 셋팅 없이 사용이 가능
    시간 : 최소 지연 시간을 뜻함

- setTimeout
  - 최소 지연 시간
  * 대량의 thread 에서 메세지 큐가 결정을 한다.
  * 내부적 정확한 실행 순서는 실행된 조건에서의 타이머가 몇 개 존재 하는지가 관건
  * 3개 ~ 10개를 작성하게 되면 비동기 코드가 완료되는 시점을 polling 방식으로 검사
  * 메모리 리소스, 네트워크등 코드 레벨에서 검사 불가한 요소들이 결정함

> setImmediate

    최소 지연 시간
    setTimeout과 같은 조건이라면 그 때 그 때 다른 결과가 나오게 됨

> setInterval

    최소 지연 시간
    특정 시간 간격으로 이벤트를 실행해줌

> 메모리 할당 해제

    상수로 화살표 함수로 만들어진 이벤트를 할당 시킨 후 해제 가능
    setTimeout -> clearTimeout
    setImmediate -> clearImmediateObj
    setInterval -> clearInterval

### Event Emitter

> node js

    비동기적
    이벤트 기반

> Emitter

    node js core 모델 중 하나
    기본 모듈 -> npm 설치 없음(require("events"))
    class 모델 extends 통해 기존 클래스 확장 가능
    - static -> class 생성 할 필요 없음

> Keyword

    1. on
        첫번 째로 이름 두번 째로 함수를 만들어서 call back 가능
        아니면 Arrow Function(화살표 함수) 이용해서 바로 함수 작성 가능
    2. emit
        on으로 설정된 string으로 이벤트 명을 호출 가능하게 됨
    - 정리하면 on으로 이벤트를 설정하고 emit을 통해 호출하는 개념이다.

### DNS

- Domain Name Sever

> DNS

    일반적인 웹 주소 -> www.naver.com -> 사람이 알기 쉽게 바꾸어둔 것
    컴퓨터가 알 수 있는 주소 -> 숫자체계
    실제 서버의 주소는 ip로 분류되어 있음
    모든 사이트가 resolve4를 지원하지 않는 것을 유의

- keyword
  1. lookup
     - dns.lookup('test.com', (err, add, family))
     - 대상 서버의 url을 입력하면 ip가 나옴
     - IPv4 -> Family : 4 IP version4
  2. resolve4
  3. reverse
     - dns reverse
     - 역방향 해결 ip 주소

### File System

> Node js

    웹 서버 생성하여 대량의 request를 처리 하는데 사용
    하드 디스크, 원격 클라우드에 접근 하는 것은 매우 빈번한 사례

- 파일을 읽고 쓰고 하는 경우에 대해 알아보는 것

> File_System

    require('fs')

> callBack 함수

    비동기 적 처리의 대표적인 예
    결과값을 올바르게 그리고 맞는 순서를 받아오기 위한 방법 중 하나
    고전적인 callback 방식은 가독성이 좋지 않으므로
    Promise 형식을 사용해서 코드를 작성해 주는 것이 좋다.

- Keywords
  1. readFile
     - readFile("string", "인코딩 방식", 화살표 함수)
     - 인코딩 방식 기입 안할 시 기본적으로 utf-8이 됨
  2. writeFile
     - content가 두번 째 파라미터로 들어가는 것이 특징
     - callback 함수에서 넘겨받을 데이터가 없으므로
     - err에 대한 실패 여부만 확인하면 됨

> require util

    promisfy -> 비구조화 할당을 통해서 사용
    const {promisfy} = require("util")

> callback 함수를 promisfy를 통해 Promise로 변형

    const read = promisfy(fs.readFile);
    const write = promisfy(fs.writeFile);
    - promisfy로 Promise로 변형하지 않는다면 await 뒤에 바로 나올 수 없다.

> await 에서의 에러 처리

    try, catch 구문을 사용을 사용해서 오류를 출력가능
    console.error(e);

- async를 사용해서 구문을 처리 하였다면 await을 사용해서 설정을 하면된다.
  - return await read('test.txt');

```javascript
"use strict";

const fs = require("fs");
const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
const wirteAndRead = async (data = "") => {
  try {
    await write("test.txt", data);
    return await read("test.txt");
  } catch (e) {
    console.error(e);
  }
};

const name = wirteAndRead("hi my name is jang");
console.log(JSON.stringify(name));
```

### Promise.all

- 다수의 Promise가 실행될 때 까지 기다림

> Promise.all

    실무에서 많이 사용
    다양한 API 호출 하고 필터링 해서 데이터를 조합해야 할 경우
    특정한 유저에 대한 API -> 결과를 기다려서 데이터를 조합하거나 병합하는 경우가 생김

```javascript
"use strict";

const promise = new Promise((res, rej) => res("즉시 호출"));
const promise2 = new Promise((res, rej) => {
  setTimeout(() => res("3초 뒤 호출"), 3000);
});

Promise.all([promise, promise2]).then((value) => console.log(value));
```

### Promise.race

- all과의 차이점
  - 가장 먼저 처리되는 Promise가 return 되는 특징이 있음

* setImmediately()
  - 매우 중요한 nodejs 함수

> Promise.race

    딜레이가 적은 것이 먼저 return 됨
    resolve 함수의 파라미터가 비어 있을 경우 undefined로 나오게 되는데
    이 것은 오류가 아님

```javascript
"use strict";

const promise1 = new Promise((res, rej) => {
  setTimeout(() => res(2000), 2000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => res("즉시"), 0);
});

Promise.race([promise1, promise2]).then((value) => console.log(value));
```

### htttp

- Node.js Core Modules

- http 개념 없이 express에 들어가면 low level 문제를 해결이 어려워짐
- socket 관점에서의 http 오류를 해결 어려움

> http

    Node.js http > express (low level)
    socket 운영을 하는데 더 효율적

- 파라미터
  1. createSever(req, res)
     - res.statusCode : 200 -> 정상적으로 작성되어서 동작을 한다는 의미
     * res.setHeader('Content-Type', 'text/html')
       json, xml일 경우도 있기에 어떠한 타입의 파일을 response로 보내는지에 대한 명시를 해줘야 함
     * res.end("<div>Hello world<div>") : 보내줄 수 있는 데이터를 정해줄 수 있음

### https

> http

    Hyper Text Protocol
    인터넷 문서를 교환하는 프로토콜

> https

    ssl 보안 프로토콜 사용
    data reqest : crud에 ssl 사용
    암호화가 주된 차이이다.

- 파라미터

  1. options
     - hostname: '도메인 이름 주소'
     - port : 443(일반적인 포트 주소)
     - path : '/login'(hostname 뒤에 붙는 동작을 의미)
     - method : crud(create, read, update, delete)
     - POST, PUT, UPDATE, DELETE
  2. response
     - statusCode : http의 statusCode와 동일한 역할을 함
     - 오류처리를 먼저 해주는 것이 중요함
     * respone에 대해서 on으로 하여 data, error를 받아올 수 있음
  3. req.end()를 통해서 종료

```javascript
"use strict";

const https = require("https");
const options = {
  hostname: "google.com",
  port: 443,
  path: "/login",
  method: "GET",
};

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (d) => {
    process.stdout.write(e);
  });

  req.on("error", (e) => {
    console.log(e);
  });
});
```

### Class vs Prototype

Prototype : 어떠한 함수나 객체 기존의 속성들을 모드 그대로 복사를 해서 새로운 함수나 객체를 말함

- 화살표 함수는 this를 바인딩 할 수 없다.
- 화살표 함수 내부의 this는 global 객체의 this이다.

> Prototype

    사용하기 위해서는 함수 지시어를 먼저 선언하면 됨
    1. get : set으로써 먼저

> function -> this

    class의 constructor의 내부에서 this로 참조되는 객체를 본인 클래스로 할당하는 것과 같음

> Hoisting

    선언 전 사용이 가능하다.

> Clouser(클로저)

    함수가 함수내부에 함수로 정의 되어있는 것을 뜻함
    특징 : 해당하는 함수가 함수 외부에 있는 변수에 접근 가능

- 리펙토링 -> 내부적인 동작 메커니즘을 바꾸는 것이 목적

- 실제 내부의 클로저를 갖는 것이 목적

> Class

    constructor : async(비동기적) 코드를 가질 수 없음, await 사용 불가
    static Factory method pattern 사용하면 비동기 코드 사용이 가능하다.

- constructor는 new 키워드를 통해서 생성을 할 때 에만 생성이 되므로 새로운 함수로 받을 때는 명시적으로 파라미터를 선언해야 한다.
  ```javascript
  setBackend(backend) {
      this.backend = backend;
  }
  ```

> class vs prototype

    기능적으로는 차이가 없지만
    내부적으로 퍼포먼스 향상, 모듈화, 유지보수 향상
    prototype : 내부적으로 클로저를 가져야 하는 것이 비효율적
    class : 실제 객체 지향 프로그래밍에 충족 됨

### Node.js TDD 프레임워크 소개

- TDD 프레임워크

1. MOCHA : nodejs 뿐 만 아닌 웹브라우저에서도 동작하게 됨
   - 가장 인기 있는 프레임 워크 중 하나
2. Istanbul : 코드를 정량적으로 체크를 해줌
   - 즉석으로 코드를 모듈화 시켜서 작성이 가능
   - CLI 툴 제공
   - 라이브러리
3. tape
   - 브라우저와 상관없이 작동가능
   - 기능 단위 테스트를 할 때 좋음
   * functional test
   * async await 문법을 사용해 비동기적 코드도 테스트 가능
   * 라이브러리
4. JEST
   - 일반적으로 frontend에서 많이 사용
   - MOCKING -> 회원가입 로직 클릭해보지 않고 테스트가 가능
   - Code coverage 제공
   - 프레임 워크
5. cypress
   - UI 테스트를 목적
   - 프레임워크 : 필요한 기능 모두 제공
   - 사람이 수동으로 해야 할 작업을 자동으로 해줌
   - 이벤트를 발생시켜서 테스트를 자동으로 시켜 줌
   - headless chrome

### Memory Leaks 개념적 접근

- 디버깅에 대해 메모리 cpu profiling, hip snapshot 메모리 운영에 대한 이해 필수

- chorme v8 garbage collection 이해

> 메모리 누수

    1. 불필요한 메모리 누적 -> 자원상의 문제 초래
    2. 메모리 할당이 되었지만 비할당 되지 않은 경우

- 불필요한 메모리 할당
  - v8 garbage collection -> 빈도가 높아짐
  - vs debugger inspector -> 객체 속성 접근 가능(화살표 함수) -> 상위에 정의 된 객체 접근 가능

> 문제점

    1. Arrow Function
    1. prototype 없이 접근 문제점
        함수는 최상위 객체로 정의됨 -> 함수도 객체로 취급됨 -> 클로져
        작동은 하지만 비지니스 로직에서 request 마다 프로토 타이핑 된
        메모리 해제가 이루어지지 않으면 문제가 됨
        내부에 있는 클로져를 계속 호출하게 되면 클로져 안 클로져가 계속 생성
        - 실무에서의 데이터가 계속 쌓이게 되는 것은 정말 큰 문제가 됨

```javascript
function study(value1, value2) {
  this.value1 = value1;
  this.value2 = value2;

  //string 참조로써 객체 참조는 문제 없지만
  this.func1 = () => {};
}

const problem = new study(undefined, undefined);
problem.func1();
```

### TDD 프로그래밍 실무

nodejs core

- 지금까지 개발 된 것이 정상적으로 동작하는 것이 가장 중요한 요소
- 다른 사람들이 본인의 코드를 수정하다가 다른 기능이 제 기능을 못하게 되는 경우가 있음
- 기존의 기능들이 비정상적으로 동작하는 것을 integration test
- CI 상에서 실행이 되는 것이 있고 안되는 것이 있음
- 모든 sub system module들은 기존의 코드와 통합이 잘되는가에 대해서 필수 전재로 pull request가 됨
- 무결성 (기존 코드와 통합)이 잘 맞는지 검사

> Test는 프로그램에 있어서 중요한 요소 중 하나이다는게 결론
