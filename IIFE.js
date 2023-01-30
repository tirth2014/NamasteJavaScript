// Immediately Invoked Function Expressions (IIFE)
// 1.
!function(){
}();
//2.
(function() {
    
})();

//example:
// How to prevent overriding using Immediately Invoked Function Expression in JavaScript?

var tirthGreeter = {};
tirthGreeter.name = "Tirth";
var greeting = "Hello"
tirthGreeter.sayHello = function(){
    console.log(greeting + ' ' +tirthGreeter.name);
}

var riddhiGreeter = {};
riddhiGreeter.name = "Riddhi";
var greeting = "Hi" // Here, greeting variable is overrided 
riddhiGreeter.sayHi = function(){
    console.log(greeting +' '+riddhiGreeter.name);
}

tirthGreeter.sayHello(); // Hello Tirth
riddhiGreeter.sayHi(); // Hello Riddhi


// Solution

(function (window) {
    var tirthGreeter = {};
    tirthGreeter.name = "Tirth";
    var greeting = "Hello"
    tirthGreeter.sayHello = function(){
        console.log(greeting + ' ' +tirthGreeter.name);
    }
    window.tirthGreeter = tirthGreeter;
})(window);

(function (window) {
    var riddhiGreeter = {};
    riddhiGreeter.name = "Riddhi";
    var greeting = "Hi" 
    riddhiGreeter.sayHi = function(){
        console.log(greeting +' '+riddhiGreeter.name);
    }
    window.riddhiGreeter = riddhiGreeter;
})(window);

tirthGreeter.sayHello(); // Hello Tirth
riddhiGreeter.sayHi(); // Hi Riddhi
