//set question and suggested answer
var options = {
	school: 'UW',
	major: 'Info',
	year: 'Senior'
}

var reply = require('./..');

reply.get(options, function(err, answers){
	console.log("\nResults:");
	console.log(answers);
});
