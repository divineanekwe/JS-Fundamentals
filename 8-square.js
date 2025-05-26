const { argv } = require('node:process');

let firstArgument = parseInt(argv[2]);

if (Number.isNaN(firstArgument)){
	console.log('Missing size');
} else if (firstArgument > 0){
	const character = 'X';
	const repeatedString = character.repeat(firstArgument);
	
	for (let i = 0; i < firstArgument; i++){
		console.log(repeatedString);
	}
}
