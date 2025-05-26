const { argv } = require('node:process');

let firstArgument = argv[2];

if(firstArgument != null){
	console.log(firstArgument);
} else{
	console.log('No argument');
}
