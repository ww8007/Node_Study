# sequelize crud

DB를 만드는 작업이라고 생각하면 됨

### dotenv 설정

Folder마다 id, pw 치기가 힘듬
환경 설정 변수를 dotenv에 넣어둠
localhost mysql id,pw 설정 한다고 생각하면 됨

- npm install dotenv

* .env 설정을 하여서
  process.env로 접근할 수 있음

### Database 생성

접속은 터미널을 열어서
mysql -u root -p
root pw 입력

- create database exercise

* 비밀번호 설정
  ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Ehdgus123!'

### DB접속

npm install mysql2
npm install sequelize@4.42.0

- .env의 설정 입력
  - DATABASE = "exercise"
  - DB_USER = "root"
  - DB_PASSWORD = "ehdgus123!"
  - DB_HOST = "localhost"

.env 의 내용들을 접근가능하게 해준다.

index.js를 제외하고 나머지 모든 파일 싱크를 해주는 파일

```js
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".js") && file !== "index.js";
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });
```

db를 가져와서 설정해줌

- env중요한것
  .env의 끝에 공백이 있으면 오류가 생기게 된다. 유의

### 모델 작성

models index.js 싱크를 하는 역할
제외한 product.js 입력 수정 crud 가능

sql -> create table

create table Products

id: primaryKey, autoIncrement

GET /admin/products/write

### DB 작성

.then 구문을 이용한 res.redirect("/admin/products")로 이동
변수형을 맞춰서 req.body.사용할 구문 사용

DATABASE = "exercise"
DB_USER = "root"
DB_PASSWORD = "Ehdgus123!"
DB_HOST = "localhost"

req.body가 필드가 맞춰서 들어가므로 바로
models.Products.create(req.body)로 이용해도좋다

비동기적 처리가 일어나므로 .then 문법을 사용해아함

### DB 조회

sequlize에서 거의 모든 것을 해ㅕㄹ

nunjucks 반복문 뿌려줌

- {%for proudct in product%}

- {%endfor%}
  endfor를 사용하여서 for문을 끝내는 것 잊지 말기

* key , value 값 일치 하면 하나만 적어줘도 괜찮음

### 상세페이지 보기

링크를 걸어서 detail과 delete로 가는 점은 react와 동일하다.

/:id 하는 것은 react router의 기능과 동일하게 변수로 만들어서 가져옴

detail : findPk 같은 것 있지만 하나만 찾아올 수 있도록 만들어줄 수 있음

### Moment.js 적용

Sequlize에서 메소드를 하나 추가하는 것과 같음

js 날짜를 개선하고 싶은 경우

- 년 월 일을 표현하고 싶은 경우
  보통의 경우에는 년월일을 설정하여서 따로 설정이 가능함

* 위의 문제점은 소스가 더러워지게 됨
  함수나 소스를 추가할 수 있음

[momentjs](https://momentjs.com/)

npm install moment

const moment = requrie('moment')

Produc.prototype -> 함수를 추가하는 것

- 년, 월, 일로 표현해 주고 싶은 경우
  moment(data).formant('YYYY-MM-DD')

- Products.prototype.dateFormat = (date) =>
  moment(date).format("YYYY년 MM월 DD일");

* YYYY MM DD 형식만 지켜 준다면 양식을 마음대로 만들 수 있음

* 바로 return이 되는 값은 {}를 사용하지 않고 return을 바로 해주면 됨

### Prototype 설명

prototype으로 함수를 추가할 수 있음

- html 안에 함수를 작성하는 것 보다 prototype으로 함수를 생성 하는 방법을 더 사용을 하야함

```js
fucntion abc(){
    this.name = "안녕";
    this.clolor= "red";
}

abc.prototype.logging = function() {
    conosole.log(this.color)
}

var log = new abc();

log.logging() 가능하게 됨

class abc() {
}
```

### DB 수정

Update와 같음

GET /admin/products/edit/:id

Post /admin/products/eidt/:id

- 함수를 생성하여 내보내기 admin/index.js에서 사용

```javascript
exports.get_products_edit = (req, res) => {
  //기존에 폼에 value안에 값을 셋팅하기 위해 만든다.
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/write.html", { product: product });
  });
};
```

- 만들었던 form을 재활용하여서 사용하게 된다.
  -> 여기서도 value와 key값이 동일하므로 따로 적어주지 않아도됨

* html부분에 value값을 추가하여서 기존의 데이터를 불러올 수 있도록 하게 한다.

* 지금까지 해보면서 느낀점은 지금까지 해온 것들이 react에서의 내용과 동일하다는 점 이다. 아직은 잘 모르겠다.

* sql where 조건
  ```javascript
  {
    where: {
      id: req.params.id;
    }
  }
  ```

### DB 삭제하기

query문 공부해보는 것이 좋음

# Promise

### 문제점

.then으로 계속 들어가게 되면 코드가 너무 길이지게 되고 분기가 생기게 된다.
이러한 경우는 너무 비효율적임

- 위와 같은 경우를 callbackhell이라고 부름

-> 단계적으로 소스가 실행되게 하고 싶음

### Promise 문법 알아보기

1. resolve, reject를 인자로 가지는 함수를 만든다.
1. 원하는 시점을 resolove로 받아옴

- 실행 보장을 받는 것을 resolve로 받아옴

* js 단일로 실행하고 싶다면 -> node make_promises.js

```javascript
const aa = new Promise((reslove, reject) => {
  reslove(console.log("Promise complete"));
});

aa.then(() => {
  console.log("프라미스 실행 완료");
});
```

- resolve안에 변수를 넣어주면 .then 문법에서 result를 변수로 받아올 수 있게 할 수 있음

* 1초 뒤에 실행하고 싶은 경우
  setTimeout(()=>{},1000)이렇게 사용하여서 사용할 수 있다.

* 에러를 표시하고 싶은 경우는
  reject를 사용하여서 에러를 던질 수 있음
  catch로 에러를 잡을 수 있음

### Promise Chaining Promise all

1초 뒤에 찍고 싶으면 return값으로 줘서 한다.

- 이렇게 chaining 방식으로 할 수도 있다.

```javascript
p1.then((result1) => {
  console.log("p1 = " + result1.p1_text);
  return p2;
}).then((result2) => {
  console.log("p2 = " + result2.p2_text);
});
```

- 배열을 이용해서 Promise.all([배열])을 통해서 동시에 처리 가능
  최종 끝나는 시간은 보장이 되지만 각각 실행되는 것은 아님

```javascript
Promise.all([p1, p2])
  .then((result) => {
    console.log("p1=" + result[0].p1_text);
    console.log("p2=" + result[1].p2_text);
  })
  .catch((err) => {
    console.log(err);
  });
```

### async await
