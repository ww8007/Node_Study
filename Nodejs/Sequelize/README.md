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
