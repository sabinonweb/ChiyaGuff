// const people = require("./people");
// // console.log(people);
// console.log(people.name, people.age);

const { name, age } = require("./people");
console.log(name, age);

const os = require("os");
console.log(os.platform(), os.homedir());
