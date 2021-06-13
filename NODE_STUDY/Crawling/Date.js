const moment = require("moment");

let day = moment().format("L");
let today = moment().format("YYYYMMDD");
today *= 1;
console.log(today);
