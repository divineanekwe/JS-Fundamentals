const { argv } = require('node:process');

let num1 = parseInt(argv[2]);
let num2 = parseInt(argv[3]);

const add = (a, b) => {
	return a + b;
}

console.log(add(num1, num2));
