"use strict";

const arr = [0, 1, 2, 3, 4, 5, 6];

const res = numbers.reduce((tot, amt) => {
  if (amt > 0) tot.push(amt);
  return tot;
}, []);

console.log(res);
