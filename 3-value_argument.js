const { argv } = require('node:process');

count = 0;
arguments = [];

argv.forEach((val, index) => {
	count++;
	
	if(count > 2){
		arguments.push(val);
	}
});

if(count < 3){
	console.log('No argument');
} else{
	arguments.forEach((value) => {
		console.log(value);
	});
}
