// CLOSURE = function along with its lexical scope bunduled together forms a CLOSURE.
// ep-11: setTimeout() + Closures

// We want to print 1,3,3,4,5 each with gap of 1 sec.
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000);
    }
    console.log('Hello Tirth!...Namaste from JS');
};

x();

/* But, surprisingly the above program prints the 6 everytime with expected interval.
   The reason
*/