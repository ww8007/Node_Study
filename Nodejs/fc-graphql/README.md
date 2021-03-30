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

### 데이터 조회

변수를 주고 받듯이 쿼리를 주고 받는 것을 작성하는 것이 목표

1. 스키마 설정
   - type Product를 잡는 것이 우선
     1. id: ID! (무조건 존재하여야 한다는 의미)
     1. name: String,
     1. price: Int
     1. description : String 대문자인 것이 특징
   - Query를 생성하여서 불러올 쿼리를 생성
     getProduct(id: iD!): Product
1. 더미 데이터 생성
1. root에서 뿌려주기
   - query문에 대하여 원하는 값을 찾도록 도와줌
1. express생성
1. app.use("/graphql", graphqlHTTP({}))

```js
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String
        price: Int
        description: String
    }
    type Query{
        getProduct( id : ID! ) : Product
    }
`);

const products = [
  {
    id: 1,
    name: "첫번째 데이터",
    price: 2000,
    description: "hi",
  },
  {
    id: 2,
    name: "두번째 데이터",
    price: 4000,
    description: "bye",
  },
];

const root = {
  getProduct: ({ id }) =>
    products.find((proudct) => proudct.id === parseInt(id)),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("running server port 4000");
});
```

### 데이터 추가

- 수정 삭제 등록 post요청으로 처리 가능하지만 mutation으로 처리

*

### 데이터 수정, 삭제

인자로 아이디, 데이터 두개가 필요
mutation에서 작성

operating 연산자로 변수가 펼쳐지게 만듬
