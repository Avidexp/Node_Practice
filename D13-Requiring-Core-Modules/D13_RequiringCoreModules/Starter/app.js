var util = require('util'); //if you have a file that has the same name, you'd use ./ for a local modules, or not ./ for a native module

var name = "Dylan";
var greeting = util.format('Hello, %s', name);//.format takes string with place codes, places %s in order as it appears

util.log(greeting); // Puts a time stamp on a console.log

