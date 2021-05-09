class Lock {
  constructor() {
    this._locked = false; // 잠긴상태 의미
    this._wait = []; // 메세지 큐 : 빈 배열
  }
  // 잠그는 함수와 푸는 함수 -> 클로져 개념 이용
  lock() {
    const unlock = () => {
      let nextResolve;
      if (this._wait.length > 0) {
        // 하나 이상일 경우 lock true
        nextResolve = this._wait.pop(0);
        nextResolve(unlock); // resolve 시킨다고 보면됨
        // 완료 순서를 명시적으로 보여줌
        // 클로져 -> unlock 내부적 클로져 -> 외부에
      } else {
        this._locked = false;
      }
    }; // 어느 시점에서의 unlock 명시 안햇음
    if (this._locked) {
      // 잠겨있을 경우
      return new Promise((resolve) => {
        this._wait.push(resolve);
      });
    } else {
      this._locked = true;
      return new Promise((resolve) => {
        resolve(unlock);
      });
    }
  }
}

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

const account = new Lock();

async function add() {
  let current, newVal;
  // 이부분에서 unlock을 해주는 것이 좋음
  unlock = await account.lock(); // unlock으로 선결조건을 함
  current = await getTotal();
  // 내부 클로저를 사용하여서 증가를 시키게 됨
  newVal = await increment(current, 20);
  await setTotal(newVal);

  await unlock();
}

async function main1() {
  let transaction1, transaction2;
  // js의 호이스팅 개념을 사용하여서 먼저 함수를 사용이 가능하다.
  transaction1 = add();
  transaction2 = add();

  await transaction1;
  await transaction2;
  console.log(await getTotal());
}

main1();
