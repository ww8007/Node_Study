"use strict";

const dns = require("dns");
const { constants } = require("dns");

dns.lookup("google.com", (err, add, family) => {
    console.log(`add : ${add}, ${family}`);
});

dns.resolve4("google.com", (err, addresses) => {
    if (err) throw err;
    const res = JSON.stringify(addresses);
    console.log(res);

    addresses.forEach((a) => {
        dns.reverse(a, (err, hostname) => {
            if (err) throw err;

            console.log(`reverse of ${a}; ${JSON.stringify(hostname)}`);
        });
    });
});