"use strict";

class Sample {
  *[Symbol.iterator]() {
    let cnt = 0;
    yield ++cnt;
  }
}

const my = new Sample();

console.log(Array.from(Sample));
