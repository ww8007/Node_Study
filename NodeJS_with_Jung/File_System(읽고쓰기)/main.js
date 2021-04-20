"use strict";

const fs = require("fs");
const { promisify } = require("util");

const read = promisify(fs.readFile);
const write = promisify(fs.writeFile);
const wirteAndRead = async(data = "") => {
    try {
        await write("test.txt", data);
        return await read("test.txt");
    } catch (e) {
        console.error(e);
    }
};

const name = wirteAndRead("hi my name is jang");
console.log(JSON.stringify(name));

// fs.readFile("test.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data);
// });
// const content = "Hi my name is Jang";
// fs.writeFile("fast.txt", content, (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
// });