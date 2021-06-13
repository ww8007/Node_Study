const puppetter = require("puppeteer");

const fs = require("fs");

const main = async () => {
  const browser = await puppetter.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com", { waitUntil: "networkidle2" }); // 언제까지 기다림을 명시
  await page.waitForTimeout(3000);
  const html = await page.content();
  fs.writeFileSync("example.html", html);
  await browser.close();
};

main();
