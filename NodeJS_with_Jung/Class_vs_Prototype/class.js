"use strict";

class fullStack {
    constructor(backend, frontend) {
        this.backend = backend;
        this.frontend = frontend;
    }

    getBackend() {
        return this.backend;
    }

    getFrontend() {
        return this.frontend;
    }

    setBackend(backend) {
        this.backend = backend;
    }

    setFrontend(frontend) {
        this.frontend = frontend;
    }
}

const Fullstack = new fullStack("js", "js");

const a = Fullstack.getBackend();
const b = Fullstack.getFrontend();

console.log(a, b);