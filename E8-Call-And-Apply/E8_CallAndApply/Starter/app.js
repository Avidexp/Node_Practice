var obj = {
    name: 'Dylan Jackson',
    greet: function(){
        console.log(`Hello ${this.name}`);
    }
}

obj.greet();



obj.greet.call({name: 'Jane doe'}, param1, parm2); // .call consumes functions just like greet() but this is instead replaced with any parameters within .call()

obj.greet.apply({name: 'Jane doe'}, [param1, parma2]); 