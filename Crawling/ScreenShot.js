const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  await page.screenshot({ path: "screenshot.png" }); //상대 경로로 설정
  await browser.close(); // 수행 하고자 하는 동작이 종료됨을 완성
};

main();
