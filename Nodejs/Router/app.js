const express = require("express");
const admin = require("./routes/admin");
const contacts = require("./routes/contacts");
const nunjucks = require("nunjucks");
const app = express();
const port = 3000;

nunjucks.configure("template", {
    autoescape: true,
    express: app,
});

app.get("/", (req, res) => {
    res.send("hello express");
});

app.get("/fastcampus", (req, res) => {
    res.send("fastcampus geeeeeet");
});

// admin 사용
app.use("/admin", admin);
// contacts 사용
app.use("/contacts", contacts);

app.listen(port, () => {
    console.log("Express listening on port", port);
});