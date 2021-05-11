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
