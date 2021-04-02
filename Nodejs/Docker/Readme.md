# Docker

준비 사항 : aws 접속으로 ssh이용

포트 닫기 및 서비스 삭제 Nginx, 3000

docker를 이용해서 3000번과 80번 포트 삭제

- 보안 그룹에서 tcp 3000번 포트를 열어주면 됨

- prettier가 끝나게 되면 중지 시키면 된다.

mysql도 중지 시키는 것 잊지 말기

nginx port

### 설치

curl -s https://get.docker.com/ | sudo sh

- docker에 대한 관리자 권한을 바로 주는 법
  1. sudo usermod -aG docker ubuntu
  2. 터미널 다시 시작하기
  3. docker version을 쳐봐서 sudo 권한이 나오지 않으면 된것

### 도커란

도커는 전세계적으로 사용되고 있는 컨테이너 가상화 플랫폼
vm 웨어 -> os위에 가상 os를 올린다.(호스트 os를 거침)
도커 -> 호스트 os와 시스템 자원을 공유 -> vm웨어 보다 빠름

- 용어
  - 도커 이미지 : 우분투 + nodejs + express등 실행할 서비스들을 패키지화 해놓음
    - 이 이미지를 바탕으로 컨테이너를 띄움
  - 컨테이너 : 이미지를 토대로 서비스를 띄운다. 여러개의 컨테이너가 작동함
    - php mysql apach

이미지를 만들고 dockerhub를 통해 github처럼 push pull이 가능해짐

- docker 이미지를 통해서 띄워놓으면 운영체제나 설치 버전에 무관하게 동작이 잘 되도록 하는게 목적

- 이미지 검색방법
  1. dockerhub 사이트
  2. docker search 명령어

### 간단하게 이미지 띄워보기

docker pull ubuntu:latest

docker imges를 사용하여서 지금까지 불러온 이미지 목록을 볼 수 잇다

- 간단한 명령어 보기
  docker run ubuntu:latest /bin/echo 'hello world'
- 이미지 삭제
  docer rimi [이미지 명]

### 우분투에서 centos 띄워보기

지금까지 pull 하고 명령을 햇지만 run 하고 -it [이미지 명] 할 시 바로 다운 받아서 실행을 할 수 있게 된다.

### Nginx 를 가져와서 웹서버를 띄워보기

docker run -d -p 80:80 --name webserver nginx

- run -d -> background option
  npm start 같은 경우 아무것도 못하게 되니 이를 방지 하는 느낌으로 background 실행을 한다.

* 기존 nginx
  1. apt get update
  2. source list 최 하단 받고 싶은 버전 설정

우분투 기반 기본 이미지를 적고 docker run 하게 된다면 바로 설정이 가능

- 멈추고 싶을 경우
  1. docker ps
  1. docker stop container id

* 현재 실행 중인 모든 프로세스 종료하고 싶은 경우
  docker stop $(docker ps -a -q)

### 명령어

1. docker run : 컨테이너 생성 및 구동
1. docker start : 컨테이너 구동
1. docker stop : 컨테이너 중지
1. docker rm : 중지되어 있는 컨테이너 삭제

### Dockerfile로 이미지 만들기

1. Dockerfiles 생성
1. 이미지 생성
1. 이미지 바탕으로 컨테이너 실행

- docker file

```dockerfile
# centOS 이미지를 기반으로 작성
FROM centos:latest

# 아파치를 설치
RUN yum install -y httpd

# 현재 폴더의 index.html 파일을 아파치 첫 화면으로 복사
COPY index.html /var/www/html/

# 아파치 실행
# 컨테이너 실행 시 처음 실행되는 명령임
# 엔트리 포인트 : 인자를 받을 수 있음
# CMD : 인자를 받을 수 없음
CMD ["/usr/sbin/httpd","-D","FOREGROUND"]
```

- 이미지 파일 만들기

  - docker build -t test .
    - 현재 위치에서 dockerfile을 기반으로 -t:test1 이렇게 태그를 달 수 도 있고
    - 현재 위치 기반으로 도커 이미지를 생성해 준다.
  - docker images 로 이미지가 만들어진 것을 확인
  - docker run -d -p 80:80 test
    만들어진 이미지 파일을 실행

* 정상적으로 동작하는 지 확인

  1.  docker exec -it 43b0be8ed6a7 /bin/bash
      image 이름을 확인 하는 것

* 컨테이너를 여러개 가져오면 서로 연결을 시켜야함

### Docker Compose

- 컨테이너를 하나만 띄우는게 아니라 여러개 띄우면 문제가 생기게 됨
  내리는 것도 따로 다 설정을 해줘야 하기 때문에

1. 붙여넣을 파일이 많을 시
1. 컨테이너 간의 연결관계를 설정하는 파일
1. python 기반의 yml 확장자 사용

### docker-compsoe 설치

- ssh 연결
  ssh -i mytest.pem ubuntu@aws주소

* sudo 권한 부여하기
  sudo chmod +x /usr/local/bin/docker-compose

* docker compose 구성도

  - 각 컨테이너 구성도
  - node <-> mysql
  - 3000 ---- 3306

* mysql 같은 경우는 컨테이너로 하기에는 백업 옵션도 존재 하기 때문에 rds -> aws로 관리해주는 것이 좋음

* yml 작성 유의
  tab과 space과 다르게 동작하니 유의하여서 작성

* .env 변수

  - DB_HOST = db_url 이라고 작성을 하게 되면

    - docker compose yml 에서 node의 link를 변수 처럼 사용가능하다.

    ```dockerfile
      # node 이미지를 지정
    node:
    build: ./node
    restart: always
    links:
      - db:db_url
      - 이부분 이다.
    ports: :
      - 3000:3000
    ```

### node Dockerfile 작성

```dockerfile
# node 컨테이너 기반
FROM node


# 작업디렉토리를 생성하고 현 소스파일들을 전체를 붙여 넣는다.
WORKDIR /src
ADD . /src

# src 폴더로 이동한 다음에 패키지를 install 한다
RUN cd /src && npm install

# Expose port
EXPOSE  3000

RUN apt-get update && apt-get install -y netcat

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ./docker-entrypoint.sh
```

### docker-compose 하는 법

1. filezila를 통해서 만든 docker file과 node파일을 서버에 등록한다.
1. ubuntu서버로 접속 후 dockdr-compose build 하면 됨
1. docker-compose up

- 문제점 : 순서가 보장이 안됨

### 컨테이너 순서

netcat 설치하여서 순서를 정할 수 있음

- netcat
  nc

* shell 실행권한 주기
  chmod +x docker-entrypoint.sh

* entrypoint cmd 차이
  entrypoint는 인자를 받을 수 있고 cmd는 못받는다

* netcat 설치 후 entrypoint 설정하기

* nc 명령어를 사용하여서 올리기

* crud 위해서는 마이그레이션이 우선
