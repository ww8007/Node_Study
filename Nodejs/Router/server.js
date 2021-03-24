const app = require("./app.js");
const port = 3000;
//나중에 소켓도 추가해서 넣을 예정
app.listen(port, () => {
  console.log("Express listening on port", port);
});
