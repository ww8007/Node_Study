"use strict";

[0, 1, 2].map((item) => {}); // 자연수 이기 때문에 문제가 없음

[Promise1, Promise2].map((item) => {
  //비동기 코드를 사용할 수 없다.
  //선결 조건을 명시할 수 없기 때문에
});

const arr = [Promise1, Promise2];

arr.forEach((item) => {
  // 비동기 코드 작성이 불가능하다.
  console.log(item);
});

for (const item of arr) {
  // 비동기 코드 작성이 가능하다.
}
