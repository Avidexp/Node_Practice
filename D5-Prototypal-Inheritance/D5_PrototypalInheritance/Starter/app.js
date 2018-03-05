// Your Javascript Code Goes Here

function Person(firstname, lastname){
    this.lastname = lastname;
    this.firstname = firstname; 
}


Person.prototype.greet = function(){
    console.log("Hello, "  + this.firstname + ' ' + this.lastname);
}; // prototype of any person

var dylan = new Person("Dylan", "Jackson");
console.log(dylan.firstname);

dylan.greet();

var jane = new Person("Jane", "Doe");
jane.greet();

console.log(dylan.__proto__);
console.log(jane.__proto__);
console.log(dylan.__proto__ == jane.__proto__); //checks if they both have access to prototypes
