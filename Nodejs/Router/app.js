const express = require("express");
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");
const nunjucks = require("nunjucks");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

nunjucks.configure("template", {
  autoescape: true,
  express: app,
});

//미들웨어 셋팅
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/fastcampus", (req, res) => {
  res.send("fastcampus geeeeeet");
});

function vipMiddleware(req, res, next) {
  console.log("최우선 미들웨어");
  next();
}

// admin 사용
app.use("/admin", vipMiddleware, admin);
// contacts 사용
app.use("/contacts", contacts);

app.listen(port, () => {
  console.log("Express listening on port", port);
});
