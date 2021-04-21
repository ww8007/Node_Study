"use strict";

const promise = new Promise((res, rej) => res("즉시 호출"));
const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("3초 뒤 호출"), 3000);
});

Promise.all([promise, promise2]).then((value) => console.log(value));