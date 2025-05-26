const { argv } = require('node:process');

function factorial(number) {
	if (Number.isNaN(number) || number < 0) {
		return 1;
	}

	if (number === 0 || number === 1) {
		return 1;
	}

	return number * factorial(number - 1);
};

let firstArgument = parseInt(argv[2]);

console.log(factorial(firstArgument));
