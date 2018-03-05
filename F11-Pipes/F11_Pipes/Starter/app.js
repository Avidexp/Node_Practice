var fs = require('fs');
var zlib = require('zlib');


//copy greet and send it to greet in gz format 




var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var readable = fs.createReadStream(__dirname +
	 '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

readable.on('data', function(chunk) {
	console.log(chunk);
	writable.write(chunk);
}); // when reading data it then writes it via chunks 

readable.pipe(writable).pipe; //returns the destination (writable) // pipes the chunk through various streams 


var gzip = zlib.createGzip(); //creates a gzip stream both readable and writable 
readable.pipe(gzip).pipe(compressed);

//files are a type of stream that we are working with