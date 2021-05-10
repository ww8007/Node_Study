const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://ksc.kpu.ac.kr/sso/login_stand.jsp?returnurl=http%3A%2F%2Fwww.kpu.ac.kr%3A80%2Floginnewsso.do%3FreturnUrl%3Dhttp%3A%2F%2Fwww.kpu.ac.kr%2Findex.do%3Fsso%3Dok&returnUrl=http://www.kpu.ac.kr/index.do?sso=ok",
    { waitUntil: "networkidle2" }
  );

  const kpu_id = "아이디";
  const kpu_pw = "비번!";

  await page.evaluate(
    (id, pw) => {
      document.getElementById("internalId").value = id;
      document.getElementById("internalPw").value = pw;
    },
    kpu_id,
    kpu_pw
  );
  await page.click(".login_btn");
  await page.waitForNavigation();
  await page.goto("");
  await page.screenshot({ path: "hi.png" });
  await browser.close();
  // 사이트 로그인 까지 마무리
};

main();
