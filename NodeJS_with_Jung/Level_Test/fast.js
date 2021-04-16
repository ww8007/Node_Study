"use strict";

const obj = {
  title: "nodejs pk",
};

function isEmptrObj() {
  if (obj.title) {
    return true;
  } else {
    return false;
  }
}

const isEmpty = () => (obj.title ? true : false);

const ans = isEmptrObj();
console.log(ans);
