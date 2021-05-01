"use strict";

class Sample {
  *gen() {
    let cnt = 0;
    yield cnt++;
  }
}

const fn = new Sample();

const gn = fn.gen();

console.log(gn.next());
console.log(gn.next());
console.log(gn.next());
