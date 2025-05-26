const { argv } = require('node:process');

let firstArgument = parseInt(argv[2]);

if (Number.isNaN(firstArgument)){
	console.log('Missing number of occurrences');
} else if (firstArgument > 0){
	for (let i = 0; i < firstArgument; i++){
		console.log('C is fun');
	}
}
