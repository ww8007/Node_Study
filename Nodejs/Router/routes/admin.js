const express = require("express");
const router = express.Router();

function testMiddleware(req, res, next) {
    console.log("첫 번째 미들웨어");
    next();
}

function testMiddleware2(req, res, next) {
    console.log("두 번째 미들웨어");
    next();
}

router.get("/", testMiddleware, testMiddleware2, (req, res) => {
    res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
    // res.send("admin 이후 products");
    res.render("admin/products.html", {
        message: "<h1>태그가 출력됩니다.<h1>",
        online: "gooood",
    });
});

router.get("/products/write", (req, res) => {
    res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
    res.send(req.body);
});

module.exports = router;