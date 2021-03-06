# Express

### Express 기본

nodejs에서 가장 인기있는 웹 프레임워크
간결함과 미니멀리즘의 특색으로 유저층이 가장 많음

- 설치

  - npm i express --save
  - npm i cookie-parser --save

    > save 있고 없고의 차이

        dependency에 자동으로 추가가 됨
        express http 요청 처리 최소 기능만 가지고 있음

- 요즘에도 save 옵션이 없어도 의존성에 추가가 되기때문에 걱정하지 않아도 괜찮다.

- 서버를 생성할 때 싱글 턴 패턴 -> class 화 하여서 사용하면 좋음

> express -> class 사용해서 환경설정하기

- http.Server 에서 extends하여서 사용
- constructor (config) -> env나 환경설정을 사용이 가능함

- 데이터의 무결성 -> 클래스로 한번만 생성이 되면 유일성을 보장받을 수 있음

- API 서버에 대한 생성자 설정

```javascript
class ApiServer extends http.Server {
  constructor(config) {
    const app = express();
    super(app); // 모든 공간에서 사용이 가능하도록 super로 선언
    this.config = config;
    this.app = app;
    this.currentConnection = new Set(); //분산된 커넥션을 변수로 set으로 가지게 됨
    this.busy = new WeakSet(); // 무중단 배포 환경 ci cd -> 사용중인 connection
    this.stopping = false; //초기화 과정은 false로 설정
  }

  async start() {}
}
```

### Middlewares

parser, helmet등을 설치해서 사용하는 것을 권장

1. body parser

   - npm install body-parser

2. helmet
   - 보안 옵션에 대해서 보안 셋팅을 자동으로 해줌

- async start로 사용이 가능하다.
  - this.app.use(미들웨어 이름);

### Custom Middlewares

- 기존의 미들웨어를 사용하는 것이 아니라 직접 미들웨어를 작성하여서 사용하는 것이 목적
- 미들웨어도 하나의 함수임을 인지하는 것이 중요!!!
- 첫번째로는 에러 캐치를 먼저 해줘야 함
- req : cookie session body의 정보가 모두 들어가 있음
  - 여기서 필요한 value를 찾아서 사용하면 됨
  - custom middle ware의 작성이 가능하다.

> this.app -> express 이므로 초기화 해서 사용을 할 수 있다.

```javascript
async start() {
    this.app.use(cookieParser());
    this.app.use(bodyParser());
    this.app.use(helmet());

    this.app.use((err, req, res, next) => {
      console.error("Internal error", err);
      if (req) {
        console.log(req); // 모든 리퀘스트를 로깅
      }
      if (res) {
        console.log(res); // 모든 응답을 로깅하게 됨
      }
      next(); //다음 분기로 넘어갈 수 있다는 것을 알림
    });
  }
```

### 정적 파일 처리

- Static Files 변하지 않는 (렌더링, 뷰 제외)
- 리소스 파일이 여기 해당(이미지, 동영상)
- 리버스 프록시를 사용해서 제공하는 것이 메모리 관리 차원에서 좋음(Reverse Proxy)
- 정적 파일 관리는 express로 사용하는 것은 좋지 않음!!!
- 다만 방법론적으로 사용할 수 있다는 것을 보여주기 위함

> Access-Control-Allow-Origin

    어느 특정한 서버에서 접근이 가능하도록함

> Access-Control-Allow-Headers

    모든 헤더를 허용하는 구문

> Access-Control-Allow-Methods

    메소드 허용 구문

- 서브 스테틱 모듈 설치
  - npm i serve-static
  - constructor 부분에 this.app.static = static을 사용해서 사용

### REST API

> REST API

    CRUD 4가지 연산에 대해서 상호호환이 가능하도록 만든 프로토콜
    Post : 새로운 메소드 생성
    엔드 포인트, url
    앤드포인트에 대한 모든 crate,update,delete,pathc에 대해서 만들 필요가 없다.
    action에 대해서는 메소드만 사용하는 것이 맞는 표현

> Postman

    실제 환경에서는 cypress를 사용하는 것을 권장하도록 한다.

### Express 템플릿 엔진 소개

> 템플릿 엔진

    데이터를 받고 view를 처리하기 위한 html 페이지 리턴
    위의 과정을 좀 더 쉽게 하기 위한 것이 템플릿 엔진
    데이터를 적성을 하고 반복하는 과정과 템플릿 툴을 제공을 함

- html 코드 작성에서 보안이나 반복에 대한 요소들을 좀 더 쉽게 처리할 수 있게 해줌
- 템플릿 엔진을 어떤 것을 사용하는 것은 자신의 마음이다.

- 일반적으로 싱글 페이지 SP -> react 기반은 단일 페이지 기반
- contact 기반 (이메일 보내기) : 단순한 웹페이지의 경우에는 template engine을 사용하면됨
- 최근에는 자주 사용하지 않는 다는 것을 알아두면 됨

### Caching Layers

캐싱 계층에 대해서 학습

캐시를 관리하는 모듈
redis

- npm i redis
- npm i redis-cluster
  - 클라우드에서 분산 처리된 아키택쳐 사용

> redis

    redis에는 publiser subscribe 패턴 사용

- sub, publisher
  - pub -> 서버에서 생성
  - 클라이언트를 생성 중이기 때문에 subsciber만 생각을 하면 됨

### Express Single tern pattern
