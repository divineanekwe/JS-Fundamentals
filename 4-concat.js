const { argv } = require('node:process');

count = 0;

let firstArgument = argv[2];
let secondArgument = argv[3];

console.log(`${firstArgument} is ${secondArgument}`);
