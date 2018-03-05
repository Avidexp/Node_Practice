var Person = {
    firstname: "",
    lastname: "",
    greet: function(){
        return this.firstname + " " + this.lastname;
    }
}


var dylan = Object.create(Person);
//creates empty object Person with properties

dylan.firstname = "Dylan";
dylan.lastname = "Jackson";


var jane = Object.create(Person);
//creates empty object Person with properties

jane.firstname = "jane";
jane.lastname = "Jackson";


console.log(dylan.greet());
console.log(jane.greet());