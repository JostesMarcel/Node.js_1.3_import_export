const {calc} = require("./functions.js")

console.log(calc(50, '+'));
console.log(calc(50, '*'));
console.log(calc(50, 20, '+'));
console.log(calc(50, undefined, '*'));
console.log(calc(50, 10));
console.log(calc(10, 5, "-"));