const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
    res.send("admin 이후 products");
});

module.exports = router;