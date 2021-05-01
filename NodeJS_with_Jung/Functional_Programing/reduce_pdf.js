"use strict";

const res = ["pdf", "html", "html", "gif", "gif", "gif"];

const ans = res.reduce((cnt, fileType) => {
  cnt[fileType] = (cnt[fileType] || 0) + 1;
  return cnt;
}, {});

console.log(ans); // res ret값을 통해서 결과값을 리턴한다고 생각하면 됨
