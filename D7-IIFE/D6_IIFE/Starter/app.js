// Your Javascript Code Goes Here
var firstname = "Jane";

(function(lastname){

    var firstname = "Dylan";
    console.log(firstname);
    console.log(lastname);

}('jackson')) // wrapping in parenthesis makes it an expression function that is invoked immediately

console.log(firstname);