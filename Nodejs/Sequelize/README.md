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
  ALTER user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'ehdgus123!'

### DB접속
