"use strict";
// find
const arr = ["node.js", "올인원"];

const res = arr.find((key) => key === "올인원");

console.log(res);

// include

const ans = arr.includes("node.js");

console.log(ans);

for (const item of arr) {
  if (arr.includes(item)) {
    console.log("아이템 포함");
  }
}
