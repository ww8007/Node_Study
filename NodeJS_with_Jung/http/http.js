"use strict";

const http = require("http");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<div>Hello world<div>");
});

const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});