# React

### React 소개

### 장점

1. Virtual DOM
   - DOM : Document Object Model
   - html에서 보는 모든 요소가 DOM이다.

> DOM

    dom 객체에 대한 수정은 웹브라우저 상 가능하다.
    일부 데이터를 수정하기 위해서는 DOM트리 전체를 리로딩 하는 점이 특징이다.

> SPA

    Single Page Application
    페이지가 전체가 리로드 되는 경우는 SPA가 아니다.
    현재 페이지에서 모든 전환 과정이 이루어지는 경우를 SPA라 칭함

- 전체가 리로드되는 것이 아니기 때문에 업데이트 된 돔만 리로드되는 것은 사용자가 보는데 매우 편리함
- 전체 트리를 업데이트를 하는 것이 아닌 선택적으로 비교하여서 업데이트 됨
- 선택적 업데이트는 매우 매력적인 기능!!!

2. Only View, NO MVC

- 단방향 데이터 흐름
- Angular -> MVC(Model, View, Controller)
  - MVC 패턴을 적용할 시 웹이 무거워지는 단점이 존재함
  - 모든 것을 View로 보고 일관성을 유지시키는 것이 목적
    > 데이터를 단방향으로 흐르게 하는 것이 Redux!!
    > react에서 모든 것은 view

3. Reusable Components

> Component : 컴포넌트 기반의 ui 라이브러리

    Library   : 퍼포먼스가 빠름, 데이터 바인딩은 내가 결정 가능
    Framework : 방대한 모든 필요들을 제공

- nodejs, react core 모듈들은 최소화하고(경량화)

  - 사이즈는 매우 민감한 요소이다. -> 퍼포먼스 관점
  - 경량화가 가능하다는 점은 매우 중요함

- 재사용 가능하다는 점이 매우 중요한 점 이다.
- Reack hook -> Functional 기반의 컴포넌트를 생성할 수 있다는 것이 매우 좋아짐.

4. Hot reloading

- 페이지를 수정할 필요 없이 결과를 확인 가능
- html 코딩과는 다든점

5. Server Side Redering (feat. SEO)

- SPA가 갖는 검색엔진 최적화
- 모바일 어플리케이션의 경우 성능간의 문제가 생길 수 있음
- 랜더링 : 클라이언트 -> 백엔드와 엮어서 nodejs에서 처리하고
- 백엔드에서 처리하는 것이 SSR이다.

### JSX 와 Fragment

모든 html 코드를 -> javascript 코드로 집어넣는 과정을 말함

- react hook 등장 전에는 class -> state로 관리를 함
- stateless function
- 모든 경우에 대해서 return 구문으로 코드를 작성

> 특징

    1. class -> className
    1. camelCase : 두번째 단어에 대해서 대문자로 작성을 한다.
    1. 모든 것들이 props에 객체로 전달이 된다.

- props : customvalue의 값들이 props로 전달이 됨
  - properties의 약자
  - 정의 하고 싶은 모든 custom value가 props 객체로 전달!!!
- 컴포넌트에는 모든 닫는 요소가 존재해야한다.

- 전달하고 싶은 요소를 props.vlaue로 쉽게 전달이 가능하다.

> Fragment

    jsx 컴포넌트는 하나의 부모 요소를 가져야함
    한개의 컴포넌트로 리턴이 되어야 함
    Fragment 등장 이전 -> span, div
    이제는 비어있는 블락 <> </>

- 컴포넌트들을 하나의 레포로 감싸서 리턴하는 역할을 Fragment로 함

### 개발 환경 설정

> npm

    node modules 폴더를 생성

> npx

    node modules 폴더를 생성하지 않음

- 운영체제의 독립적인 과정이기 때문에 모든 환경에서 동일하게 동작하게 된다.

### 개발을 위한 ES6+ 문법

1. ui 랜더링을 위한 함수

   - JSX : JavaScript + XML
   - 기존의 템플릿 코딩이 아닌 모든 것을 컴포넌트화 가능
   - 템플릿 언어(html) 사용 시 모듈의 독립성을 보장하기 어려움
   - map이 여기 해당

2. class -> className

> key

    index 값을 사용하면 절대 안됨
    고유의 값을 사용해야 함을 숙지한다.

### Rendering

- 리엑트는 뷰만 고려하면 됨
- 어떤 조건에 대한 랜더링이 이루어지는에 대한 설명

- Iternaly Operator

- 로딩창을 만드는 것은 필수적 요소
- 조건을 만들어서 랭더링 하는 것

- 실무 예제

  - 로딩 경우 로딩 컴포넌트 반환
  - 한가지 경우만 만족해야 할 경우
  - && 연산자 사용

- es6 문법을 사용하게 되면 if나 else로 작성해야하는 코드를 간단하게 리펙토링이 가능하게 된다.
- ui 로직 리펙토링 가능

### React Lifecycle

- 라이프 사이클이 존재하는 경우는 클래스 기반의 react
- render 함수를 기점으로 라이프 사이클이 존재하게 된다.

> componentWillMount() : 컴포넌트 랜더링 전

- render() 후

> componentDidMount() : 컴포넌트 랜더링 후

- js -> event driven programming
  - 특정한 이벤트에 publisher -> subscriber 구조로 작성이 가능

> componentWillUnmount() : subscription 작업이 더 이상 필요 없음

        모든 로직의 코드를 여기서 초기화 시키면 된다.

> this.setState : 현재 클래스의 상태를 초기화 하는 비동기 함수

    render, WillUnmount 에서는 사용 불가
    redering -> 비동기적이므로 결과 보장 불가
    WillUnmount -> 삭제 중 이기 때문에 사용 불가

### Props vs State

- React Hook의 도입으로 stateless component가 나오게 됨

> props

    상위 계층의 컴포넌트와의 교류

> state

    다른 컴포넌트와의 교류가 목적이 아닌
    내부적 class에서의 사용이 목적임
    constructor(생성자) 내부의 this.state에서 객체로 상태를 보존이 가능하다.

- state는 객체로 초기화 됨
- state의 형은 무엇이든 선언이 가능하다.
- state안의 props
  - props로 상속받은 모든 데이터를 state안에 넣을 수 있다.

```javascript
class Fast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "javscript",
      date: new Date(),
    };
  }
  render() {
    const { lang, date } = this.state;
    return <div>{(lang, date)}</div>;
  }
}
```

### Event handling

- DOM onlcik

> React에서는 camelCase 표기법을 따라서 Click이 대문자이다.

> e.preventDefault();

    이벤트 버블링 : 하나의 돔 객체가 내부 안에 있어 외부와 중첩
    -> 이벤트가 중첩될 수 있음

- 이벤트에 파라미터를 담아서 파리미터를 넘겨주기도 가능하다.

### Key Warnings 해결 방법

map 함수를 사용하여 jsx, component에서 key warnings 오류가 많이 생기게 됨

- 중복되는 데이터가 없는 경우
  - 요소를 그대로 키 값으로 가질 수 있다.

> Virtual DOM

    기존의 jquery, library 같은 경우 전체 DOM 트리 초기화
    VD의 경우 기준점과 변경점의 달라진 부분만 잡아내서 동작함

- 리엑트에 키값이 필요한 이유

  - 사용자가 어느 시점에 업데이트를 요청하는 지에 대한 사용자에게 열쇠를 줌
  - 데이터의 중복성이 없는 요소를 사용하도록 한다.

- index를 key 값으로 사용하지 말아야 하는 이유
  - 재사용 가능한 컴포넌트가 반복되면 index에 대한 고유값이 깨지게 됨

> map 안에 들어오는 함수들은 비동기 적으로 처리가 됨

    그 컴포넌트가 2개 이상이면 race condition이 일어나게 됨
    인덱스를 사용하게 되면 고유값을 잃게 될 수 있음

### setState 실무 테크닉

setState는 비동기 적으로 실행이 되는 것을 유의!!!

- setState는 render함수 내에서 선언이 불가능하다.

- render, constructor -> setState 호출 불가
  - 그 외 모든 custom 함수에서는 사용 가능
  - componentWillUnmount에서는 사용 불가

> 실무에서 update, API

    비동기 코드 이기 때문에 코드의 순서를 보장하지 않음
    update된 setState를 보여주지 않는다.
    이 경우 setState의 두번째 인자로 화살표 함수로 callback 함수를 선언하면
    완료에 대한 결과를 함수로 받거나 ArrowFunction을 통해 받을 수 있다.
