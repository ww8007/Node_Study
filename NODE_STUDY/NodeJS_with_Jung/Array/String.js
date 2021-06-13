"use strict";

let string = "node.js 올인원 패키지";

let isStartWith = string.startsWith("n");
let isIncludes = string.includes("올인원");
let isEndWith = string.endsWith("지");

const ans = () => {
  if (isStartWith && isIncludes && isEndWith) {
    return true;
  }
};

const ret = ans();

console.log(ret);
