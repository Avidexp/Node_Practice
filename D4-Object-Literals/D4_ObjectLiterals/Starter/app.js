// Your Javascript Code Goes Here
var person = {
    firstname: "Dylan",
    lastname:"Jackson",
    greet: function(){
        console.log("Hello, " + this.firstname + ' ' + this.lastname);
    }
};

person.greet();

console.log(person['firstname']);