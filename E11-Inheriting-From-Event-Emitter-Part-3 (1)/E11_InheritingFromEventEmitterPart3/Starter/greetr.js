'use strict';


var EventEmitter = require('events');

module.export = class Greetr extends EventEmitter {
	constructor(){
		super(EventEmitter);
		this.greeting = 'Hello world!';
	}

	greet(data){
		console.log(` ${this.greeting} ${data}`);
	this.emit('greet', data);
	}
}