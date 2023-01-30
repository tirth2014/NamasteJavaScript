// ep-13

a() // a called!
b() // Uncaught TypeError: b is not a function

// FUNCTION STATEMENT AKA FUNCTION DECLARATION

function a(){
    console.log("a called!");
}

// FUNCTION EXPRESSION 

var b = function (){
    console.log("b called");
}

// So, the difference bwtween function statement and function expression is of Hoisting!

// ANONYMOUS FUNCTIONS - used when assigning function as a value.
function () {
    console.log('throws error:Function statements require a function name ');
}
// because it's not used as a value so it throws an error!

// FIRST CLASS FUNCTIONS: The ability to be used like values
// Functions are first class citizens in JS.