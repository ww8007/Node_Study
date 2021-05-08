"use strict";

const co = require("co");

co(function*() {
    const a = Promise.resolve(1);
    const b = Promise.resolve(2);
    const c = Promise.resolve(3);
    const res = yield [a, b, c];
    console.log(res);
});