"use strict";

const promise1 = new Promise((res, rej) => {
    setTimeout(() => res(2000), 2000);
});

const promise2 = new Promise((res, rej) => {
    setTimeout(() => res("즉시"), 0);
});

Promise.race([promise1, promise2]).then((value) => console.log(value));