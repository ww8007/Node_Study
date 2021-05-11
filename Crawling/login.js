const puppeteer = require("puppeteer");
const moment = require("moment");
const main = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: 1300, // 페이지 너비

    height: 720, // 페이지 높이

    deviceScaleFactor: 1, // 기기 배율 요소를 지정 DPR( Device Pixel Resolution )

    isMobile: false, // 모바일

    hasTouch: false, // 터치 이벤트 발생여부

    isLandscape: false, //
  });
  await page.goto("https://ksc.kpu.ac.kr/sso/login_stand.jsp", {
    waitUntil: "networkidle2",
  });

  const kpu_id = "2015130035";
  const kpu_pw = "wy3227164!";

  await page.evaluate(
    (id, pw) => {
      document.getElementById("internalId").value = id;
      document.getElementById("internalPw").value = pw;
    },
    kpu_id,
    kpu_pw
  );
  // 로그인 버튼 클릭
  await page.click(".login_btn");
  // 다음 화면 이동
  await page.goto("https://portal.kpu.ac.kr/portal/default/stu");
  await page.click("#header > div > div > ul > li:nth-child(2) > a");
  await page.goto("https://iis.kpu.ac.kr/nx/");
  // 통정시로 이동
  await page.waitForTimeout(3000);
  //부속행정 클릭
  await page.click(
    "#mainframe_VFrameSet_TopFrame_form_mb_topMenu_MPA0001TextBoxElement > div"
  );
  //생활관 클릭
  await page.click(
    "#mainframe_VFrameSet_TopFrame_form_mb_topMenu_popupmenu_MPB0001TextBoxElement > div"
  );
  await page.waitForTimeout(500);
  // 외박신청 클릭
  await page.click(
    "#mainframe_VFrameSet_HFrameSet_leftFrame_form_grd_leftMenu_body_gridrow_7_cell_7_0_controltreeTextBoxElement > div"
  );
  // 추가하기 기다리기
  await page.waitForTimeout(1000);
  await page.click(
    "#mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_btn_dorm120_btn_addTextBoxElement > div"
  );
  let today = moment().format("YYYYMMDD");
  today *= 1;
  let today2 = "2021.05.11";
  console.log(today);
  // await page.click(
  //   "#mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_Div00_cal_outStayFrDt_dropbuttonAlignImageElement"
  // );
  //// 키보드 입력 도전 실패
  // await page.click(
  //   "#mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_Div00_cal_outStayFrDt_calendaredit"
  // );
  await page.keyboard.type("20210521");
  // await page.evaluate(
  //   (id) => {
  //     document.getElementById(
  //       "mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_Div00_cal_outStayFrDt_calendaredit_input"
  //     ).value = id;
  //     // document.getElementById(
  //     //   "mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_Div00_cal_outStayToDt_calendaredit_input"
  //     // ).value = pw;
  //   },
  //   today
  //   // today2
  // );

  // await page.waitForTimeout(1000);
  // await page.evaluate(
  //   (pw) => {
  //     document.getElementById(
  //       "mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_Div00_cal_outStayToDt_calendaredit_input"
  //     ).value = pw;
  //   },

  //   today
  // );
  // await page.waitForTimeout(100);
  // await page.click(
  //   "#mainframe_VFrameSet_HFrameSet_VFrameSet1_WorkFrame_Child_MPB0022_form_div_Work_btn_dorm120_btn_saveTextBoxElement > div"
  // );
};

main();
