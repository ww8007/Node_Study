const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello express");
});

app.get("/fastcampus", (req, res) => {
  res.send("fastcampus geeeeeet");
});

app.listen(port, () => {
  console.log("Express listening on port", port);
});
