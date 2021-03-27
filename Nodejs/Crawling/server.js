const express = require("express");

// 모듈선언
const request = require("request-promise");
const cheerio = require("cheerio");

const app = express();
const port = 3000;

app.get("/shipping/:invc_no", async (req, res) => {
  try {
    //대한통운의 현재 배송위치 크롤링 주소
    const url = `https://www.doortodoor.co.kr/parcel/ \
        doortodoor.do?fsp_action=PARC_ACT_002&fsp_cmd=retrieveInvNoACT&invc_no=${req.params.invc_no}`;
    let result = []; //최종 보내는 데이터

    const html = await request(url);
    const $ = cheerio.load(
      html,
      { decodeEntities: false } //한글 변환
    );

    const tdElements = $(".board_area").find("table.mb15 tbody tr td"); //td의 데이터를 전부 긁어온다
    // 아래 주석을 해제하고 콘솔에 찍어보세요.
    console.log(tdElements[0].children[0].data);

    res.send("111");
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, function () {
  console.log("Express listening on port", port);
});
