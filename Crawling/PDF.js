const puppeteer = require("puppeteer");

const main = async () => {
  const bw = await puppeteer.launch();
  const page = await bw.newPage();
  await page.goto("https://google.com", { waitUntil: "networkidle2" });
  await page.pdf({ path: "test.pdf", format: "a4" });
  bw.close();
};

main();
