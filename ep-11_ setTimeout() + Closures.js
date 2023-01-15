// CLOSURE = function along with its lexical scope bunduled together forms a CLOSURE.
// ep-11: setTimeout() + Closures

// We want to print 1,3,3,4,5 each with gap of 1 sec.
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i); // this "i" refers to the same memory location everytime.
//         }, i * 1000);
//     }
//     console.log('Hello Tirth!...Namaste from JS');  // this will be logged first and not after the above code as JS "waits for no one!"
// };

// x();

/* But, surprisingly the above program prints the 6 everytime with expected interval.
   The reason for that is var. var is a function-scoped..so the inner callback function forms the closure with same old i(which is 6) everytime.
   for loop fatafat ultrafast speed thi 5 vakhat goomi jase ane pachhi andarnu call-back function execute thase and tyare i=6 thai gyu hse.

   solution: use "let" as it's block-scoped...so callback function forms closure with a fresh brand new "i" in every iteration of for loop. 
   so i's value won't be 6 everytime.
*/

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log('Hello Tirth!...Namaste from JS');  // this will be logged first and not after the above code as JS "waits for no one!"
};

x();

// Now, we can do the same thing with "var" and the solution is closure only.

function x(){
    for (let i = 1; i <= 5; i++) {
        function close(p) {
            setTimeout(() => {
                console.log(i);
            }, i*1000);
        }
        close(i) // this will pass new memory location of i everytime.
    }
    
}

x();