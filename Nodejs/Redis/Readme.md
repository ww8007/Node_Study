# Redis

### Redis란

메모리에 데이터를 저장
C언어로 작성

DB처럼 사용가능

- 용도
  1. 사용자의 세션 서버
  2. 웹페이지 캐싱
     - 사이트 접속 시 미리 데이터를 적재 해둬서 속도 빠르게 하기

* 서버를 여러개 둬서 하나의 redis 서버를 바라보게 함

### 설치

brew install redis

docker run -p 6379:6379 redis

### 사용처

- url은 하나지만 서버는 달라지는 경우가 있음 - 채팅 서버
  세션 서버를 여기에 사용, 인증 관련

* docker 설치하기 싫은 경우

  1. redis-server
  1. redis-cli

* docker 진행 하는 이유
  윈도우에서 하위 버전 설치 지원 안하는 것과 공식 버전을 설치 할 수 있기 때문에 좋음

### redis 사용하기

docker run -p 6379:6379 redis

- 컨테이너로 접속

1.  docker exec -it [containerid] /bin/bahs 2. redis-cli

- 데이터 타입
  1. Strings
  1. Lists
  1. Sets
  1. Hashes

* 간단한 변수 설정

  1. set a 10
  1. get a

* expire로 삭제되는 변수 설정하기
  ttl a 시간이 사라짐

* 배열 생성하여 push 하기

  1. lpush num_lists 1
     - 확인 : lrange num_lists 0 0
     - 모두 확인 : lrange num_lists 0 -1 -> 전체 배열 확인하기
  2. 오른쪽에 삽입
     - rpush num_lists 3

* set, list

  - set -> 중복 허용안함
  - list -> 중복 허용

* 자바스크립트처럼 리터럴 객체 사용하기
  - hmset fruit orange 2000 apple 1000
  * 가져 오는 것은 hmget으로 가져오면 된다. -> hmget fruit orange apple

###
