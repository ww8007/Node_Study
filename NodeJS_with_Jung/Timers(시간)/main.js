"use strict";
//최소 지연 시간을 뜻함
const timeoutObj = setTimeout(() => {
  console.log("first");
}, 0);

const immediateObj = setImmediate(() => {
  console.log("second");
});

const intervalObj = setInterval(() => {
  console.log("third");
}, 1000);

clearTimeout(timeoutObj);
clearImmediateObj(immediateObj);
clearInterval(intervalObj);
