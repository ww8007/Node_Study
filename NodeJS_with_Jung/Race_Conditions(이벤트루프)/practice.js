"use strict";

class Lock {
  constructor() {
    this._locking = false;
    this._waiting = [];
  }
  lock() {
    const unlock = () => {
      let nextResolve;
      if (this._waiting.length > 0) {
        nextResolve = this._waiting.pop(0);
        unlock();
      } else {
        this._locking = false;
      }
    };
    if (this._locking) {
      return new Promise((res) => {
        this._waiting.push(res);
      });
    } else {
      return new Promise((res) => {
        res(unlock);
      });
    }
  }
}

let tot = 0;

async function getTotal() {
  return tot;
}

async function setTotal(val) {
  tot = val;
}

async function increment(ans, num) {
  return ans + num;
}

const my = new Lock();

async function add() {
  let crr, newVal;
  let k = my.lock();
  crr = await getTotal();
  newVal = await increment(tot, 20);
  await setTotal(newVal);
  let b = await k;

  console.log(k);
  console.log(b);
}

async function main() {
  let tr1, tr2;
  tr1 = add();
  tr2 = add();
  await tr1;
  await tr2;

  console.log(await getTotal());
}

main();
