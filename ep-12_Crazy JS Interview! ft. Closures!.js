//ep-12: Crazy JS Interview! ft. Closures!

function outest(){
    var a = 10;
    function outer(b){
        function inner(){
            console.log(a,b); // 
        }
        var a = 100;
        return inner;
    }
    return outer;
};
var a = 500; // completely new variable in GLOBAL scope
outest()('tirth')();

/* Here inner function forms a closure with outer environment
 as well as outest function also.
 so, even if we have same "var a" in global scope then also it'll first look for "var a" in it's parent scope(outer)...then to it's grandparent function scope(outest) and at last if doesn't find "a"  in any of its scope then it'll print global var a(i.e. 500)
 so, priority of printing var 'a' in inner function=> 100 > 10 > 500
 */


// ----------Application of Closures------------
// 1. In some higher order functions(means which takes one or more functions as arguments OR returns a function as its result.) like memoize,once etc... all other functions are called first-order functions.
// Emulating private methods with closures (Data abstraction/encapsulation):

//JavaScript, prior to classes, didn't have a native way of declaring private methods, but it was possible to emulate private methods using closures. 
//Private methods aren't just useful for restricting access to code. They also provide a powerful way of managing your global namespace.
// example

const counter = (function() {
let privateCounter = 0;
function changeBy(val){
    privateCounter += val
}

    return {
        increment(){
            changeBy(1);
        },
        decrement(){
            changeBy(-1);
        },

        value(){
            return privateCounter;
        }
    }

})();

console.log('Counter Value: ' + counter.value());
console.log('Increment1' + counter.increment());
console.log('Increment2' + counter.increment());
console.log(counter.value());

console.log('dec' + counter.decrement());
console.log('final val: ' + counter.value());

// Constructor function (good and scalable way):

function Counter() {
    var count = 0;

    this.incrementCounter = function(){
        count++;
        console.log('count++'+'  '+count);
    }
    this.decrementCounter = function(){
        count--;
        console.log('count--'+'  '+count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();


// Disadvantages of closures:

// 1. Wastage of memory - variables bound with closures are not garbage collected..so it accumulates lots of memory.
// But nowadays modern browsers and JS engines "smartly" does garbage collection in case of closures also
// So like they understand if some variables are unreachable (not used) then they garbage collect it.
// ex:

function aFun(){
    var x = 0, z = 0;
    return function b(){
        console.log(x); // Here, if we put debugger then x=0 and z=undefined as z is smartly garbage collected.
    }
}

var y = aFun();
y();
