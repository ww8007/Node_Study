"use strict";

let total = 0;

async function getTotal() {
  return total;
}

async function setTotal(val) {
  return val;
}

// 추상화 메소드 생성
// 내부 클로저 -> 유틸리티 함수
async function increment(val, inc) {
  return val + inc;
}

async function add() {
  let current, newVal;
  current = await getTotal();
  // 내부 클로저를 사용하여서 증가를 시키게 됨
  newVal = await increment(current, 20);
  await setTotal(newVal);
}

async function main() {
  let transaction1, transaction2;
  // js의 호이스팅 개념을 사용하여서 먼저 함수를 사용이 가능하다.
  transaction1 = add();
  transaction2 = add();

  await transaction1;
  await transaction2;
  console.log(await getTotal());
}

let my = main();
