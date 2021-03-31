# AWS

### AWS란

클라우드 호스팅
Amazon 블랙 프라이데이 때 서버 폭증 -> 남는 것을 다르게 사용해보자에서 나온 고안

### AWS 배포

t2 micro cpu 1개 ram 1gb라고 생각하면 됨

### pem 파일을 이용한 접속

test.pem 다른 pc에서 접속하도록 할 수 있음

- 권한 바꿔주기
  chmod 700 test.pem

ssh -i test.pem

ec2-54-180-109-19.ap-northeast-2.compute.amazonaws.com

### nodejs 설치

curl -sL https://deb.nodesource.com/setup_12.x | sudo E bash -

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

- local 설치 할 때는 apt-get을 통해서 설치를 한다.
- cd / -> root 로 가게됨
- 시스템 영역쪽은 관리자 권한을 줘야함

* ls -al -> 권한을 보는 것
  sudo chown ubuntu:ubuntu mypj/

* sudo npm install -g nodemon express express-generator

1. express 입력을 하면 자동으로 설치가 된다.
1. vi 일반모드, 입력모드 존재
   esc -> :wq + enter

- 인바운읃
  밖에서 안으로
- 아웃바운드
  안에서 밖으로

* 인바운드 규칙 결정
  0.0.0.0 -> 모든 사람들이 3000번 포트를 통해서 접속이 가능하도록 함

* 에러가 나면 서버를 내렸다 올리게 되는데 이는 문제가 생길 수 있다.
  nodemon
  pm2 -> 오류가 생기면 서버를 내렷다 올려줌
  sudo npm install -g pm2

* pm2 start bin/www <- 여기가 시작 지점이므로 이렇게 설정한다.
  pm2 list를 하면 떠 있는 리스트를 확인 가능하다.

* mysql 설정을 하면 마무리

* rm -rf mypj/\* -> 안에 모든 내용을 삭제해달라는 의미이다.
  조심해서 사용하는 것이 좋다.

### Mysql RDS

local 처럼 Mysql를 설치 할 수 있다.
RDS -> mysql 설치 하더라도 백업도 해야하고 에러로그 관리 접속자 증가 -> db에 대한 부담을 줄일 수 있다.

rds 설정을 해준다.

- 보안 그룹에서 서버를 두개를 열어줘야 한다.
  이는 하나는 내 ip 에서만 연결이 가능하도록 하고 하나는 다른 서버에서 본 서버로 접속을 하기 위함

* 퍼블릭 엑세스로 바꾸는 것 잊지 말기
