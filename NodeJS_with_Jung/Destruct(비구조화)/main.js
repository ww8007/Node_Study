"use strict";

const obj = {
  title: "node.js",
  value: "올인원 패키지",
};

// es6 비구조화 할당

const arr = [0, 1, 2];
const { title, value } = obj;
const [, a, b] = arr;
console.log(a, b);
