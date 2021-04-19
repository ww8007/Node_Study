"use strict";

const obj = {
  title: "node js 패키지",
};

const newObj = {
  name: "패스트 캠퍼스",
};

const res = Object.assign({}, obj, newObj);

console.log(res);

const ans = {
  ...obj,
  ...newObj,
};

console.log(ans);
