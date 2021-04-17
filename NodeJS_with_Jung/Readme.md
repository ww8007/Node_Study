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
