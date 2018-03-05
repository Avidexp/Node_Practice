// Your Javascript Code Goes Here

function greet(){
    console.log("greet");
}

greet();

// functions are first-class

function logGreeting(fn){
    fn();
};

// netsted functions. passed function through parmaeter and ran function. shocker.
logGreeting(greet);


//function expression
var greetMe = function(){
    console.log("Hi Dylan");
};

greetMe();

//since it's first class 
logGreeting(greetMe);



