var sk = require('./SimpleKeys.js');

sk.capture();
sk.fg('white');
sk.bg('blue');
sk.on('u', function(){
	console.log('u key');
});
sk.on('enter', function(){
	console.log('hello world');
});
