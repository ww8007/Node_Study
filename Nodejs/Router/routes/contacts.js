const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("이 페이지는 contact 입니다");
});
router.get("/list", (req, res) => {
  res.send("이 페이지는 contact의 list 입니다.");
});

module.exports = router;
