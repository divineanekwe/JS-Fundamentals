const { argv } = require('node:process');

let firstArgument = parseInt(argv[2]);

const factorial = (number) => {
	let factorial = number;
	
	if (Number.isNaN(number)){
		console.log(1);
	} else {
		for (let i = number; i > 1; i--){
			factorial *= i - 1;
		}
		
		console.log(factorial);
	}
};

factorial(firstArgument);
