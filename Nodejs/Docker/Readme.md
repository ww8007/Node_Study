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
