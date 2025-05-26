const { argv } = require('node:process');

count = 0;
argv.forEach((val, index) => {
	count++;
});

if(count < 3){
	console.log('No argument');
} else if(count == 3){
	console.log('Argument found');
} else{
	console.log('Arguments found');
}
