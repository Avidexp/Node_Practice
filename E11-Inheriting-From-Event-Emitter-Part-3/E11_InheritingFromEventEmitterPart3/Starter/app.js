var EventEmitter = require('events');
var util = require('util');

function Greetr() {
	EventEmitter.call(this);
	this.greeting = 'Hello world!';
}

util.inherits(Greetr, EventEmitter); // any new objects from Greetr will get all properties from EventEmitter


Greetr.prototype.greet = function(data) {
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');



/*
Basic Event Emitter


var Emitter = require('events');
var emtr = new Emitter();



emtr.on('greet', function(){
    console.log('Somewhere, someone said hello.');
}); // runs whenever greet is emitter

emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');



*/