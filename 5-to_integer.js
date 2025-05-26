const { argv } = require('node:process');

let firstArgument = parseInt(argv[2]);

if(Number.isNaN(firstArgument)){
	console.log('Not a number');
} else{
	console.log(`My number: ${firstArgument}`);
}
