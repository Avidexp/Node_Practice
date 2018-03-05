function Emitter(){
    this.events = {
        prop: []
    };
}

Emitter.prototype.on = function(type, listener) { //takes type of event and listener
    this.events[type] = this.events[type] || []; //Checks if exists if not its an empty array
    this.events[type].push(listener); //attaching a functino to the type array property of Emitter
    
    //create an object, make sure its an array and put objects in the array 
}

Emitter.prototype.emit = function(type){
if(this.events[type]){
    this.events[type].forEach(listener => {
        listener()
    });
}
} //Emitting an event, envent happens




module.exports = Emitter;








