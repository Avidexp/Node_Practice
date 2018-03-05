var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('Somewhere, someone said hello.');
}); // runs whenever greet is emitter

emtr.on('greet', function(){
    console.log('A greeting occurred!');
});

console.log('Hello!');
emtr.emit('greet');