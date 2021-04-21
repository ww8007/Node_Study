"use strict";

const https = require("https");
const options = {
    hostname: "google.com",
    port: 443,
    path: "/login",
    method: "GET",
};

const req = https.request(options, (res) => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (e) => {
        process.stdout.write(e);
    });

    req.on("error", (e) => {
        console.log(e);
    });
});

req.end();