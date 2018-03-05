'use strict'; // means js engine will be more picky about what you do / don't do 

class Person {
    contructor(firstname, lastname){
        this.firstname = firstname; 
        this.lastname = lastname; 
    }
    greet(){
        console.log(`Hello, ${this.firstname} ${this.lastname}`)

    }
}

