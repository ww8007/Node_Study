class Robot {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name}`);
  }
}

class Ai extends Robot {
  constructor(name) {
    super(name);
  }
  walk() {
    console.log(`walk : ${this.name}`);
  }
}

const r = new Robot("hi");
const a = new Ai("bye");

r.speak();
a.walk();
