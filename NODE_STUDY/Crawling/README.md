# Crawling

### Puppeteer 소개

클롤링의 경우 chrome의 공식적인 툴을 사용한느 것이 좋은 결과를 얻을 수 있음
백엔드에서 simulation 파일을 편집하고 올리는 과정 자동으로 해결 가능

정보를 얻어오는것이 다가 아닌
크롬에서의 대부분의 기능들을 사용이 가능하다.

1. 스크린샷 찍기(전체 페이지)
   - 썸네일을 생성할 경우 사용
   - 사이트를 접속하지 않고도 스크린샷을 자동으로 생성가능
2. pdf 파일 생성
3. 싱글 페이지의 어플리케이션의 경우에도 작동이 가능

- ui Testing이 목적인 경우 -> cypress
- ui Testing과 다른 경우의 수도 포함한다고 하면
- ci cd 과정의 하나 중 웹 풀스택 체그 -> intergration test의 일부분으로 사용이 가능
- 크롬 확장 프로그램도 사용이 가능
- timeline 시간 별로의 로딩의 기능도 포함

> 설치

    npm i puppeteer
    npm i puppeteer-core -> cloud server에서 비용을 절감을 위해서 이렇

> ci, cd 환경 패키지 --save
> --save-dev

- core가 아니라 puppeteer이기 때문에

### 스크린 샷 자동화

url 웹페이지 존재 시 자동화 구현

Chromium 버전이 자동으로 설치가 되기때문에 버전에 대한 걱정을 할 필요가 없다.

- 브라우저에 대한 새창을 여는 것과 같은 초기화 과정

  ```javascript
  const puppeteer = require("puppeteer");

  const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
  };
  ```

- goto : 스크린 샷의 전 단계

  - 웹페이지로의 이동

- 상대경로를 설정을 하는 것과 .close를 통해서 종료를 하는 것을 명시

```javascript
const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "screenshot.png" }); //상대 경로로 설정
  await browser.close(); // 수행 하고자 하는 동작이 종료됨을 완성
};

main();
```

### Data 크롤링

- html파일로 fs을 이용해서 작성
  ```javascript
  const html = await page.content();
  fs.writeFileSync("example.html", html);
  ```

### 웹페이지의 PDF 파일 생성

- page.goto("https://google.com", {waitUntill: "networkidle2"})
  - 페이지로 이동을 하고 네트워크가 여유가 있을 때 까지 기다림
  -
