REST API

프런트의 요청에 따라서 추가하는 경우가 많아짐
백엔드를 거치는 방향이 있음

GraphQL

프런트 앤드에서 쿼리를 때려넣으면 바로 url이 생기게 된다.
두개의 데이터를 한번에 호출에 끝내버릴 수 있는 장점이 있음

- 만병통치약 같은 느낌은 아님
- 모델 및 필요한 필드를 호출해서 자유도를 높힐 수 있음

작성법

- 스키마 작성(데이터 구조)
- url 호출할 수 있게 작성

npm install graphql

### 쿼리 생성

- 원하는 쿼리를 생성하여서 받아올 수 있게 만들 수 있다.

```javascript
const schema = buildSchema(`
    type Query{
        hello: String,
        nodejs: Int,
    }
`);

const root = {
  hello: () => "hello world",
  nodejs: () => 20,
};

graphql(schema, "{nodejs}", root).then((res) => {
  console.log(res);
});
```

- 타입

1. int : 부호가 있는 32비트 정수
1. float: 부호가 있는 부동소수점 값
1. String: UTF-8 문자열
1. Boolean : true 또는 false

### Express 연동

쿼리에서 연동을 바로 할 수 있게 가능

npm i express express-graphql

- express 설정
  graphiql: true (gui를 설정해 준다고 보면 됨)
  나중에 보안상의 문제를 고려하여서 gui false로 설정해주면 됨

* query요청을 하게 되면 프런트에서의 요청이 조금 더 쉬워진다.
