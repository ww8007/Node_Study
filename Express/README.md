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
