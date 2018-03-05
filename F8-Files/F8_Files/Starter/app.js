var fs = require('fs');
    // deals with file system wraps c++ code that allows you do deal with files

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8'); //__dirname is directory name that the program is in.

console.log(greet);

var greet2 = fs.readFile(__dirname + '/greet.txt', 
    function(err, data){
        console.log(data);
    });

    var greet3 = fs.readFile(__dirname + '/greet.txt', 'utf8',
    function(err, data){
        console.log(data);
    });
    console.log('done');