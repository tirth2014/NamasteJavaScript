// CLOSURE = function along with its lexical scope bunduled together forms a CLOSURE.

// function x(){
//     var a = 10;
//     function y() {
//         console.log(a);
//     }
//     return y; // Here closure of y is returned. and not just function y alone. i.e., function y along with its lexical scope is returned.
// }

// var z = x(); // after this assignment entite execution context of x() and every single thing of it is vanished
// console.log(z);
// z(); // 10 ... here function y still remembers its reference to var a

// IMP. thing to note: 

// function x(){
//     var a = 10;
//     function y() {
//         console.log(a); // here, a is not bound with value 10 but the reference to var a.
//     }
//     a = 100;
//     return y;
// }

// let z = x();
// z(); // 100 

// GOING ONE MORE LEVEL DEEP...

// function z() {
//     var b = 900;
//     function x(){
//         var a = 10;
//         function y() {
//             console.log(a,b);
//         }
//         y();
//     } 
//     x();
// }
// z();

// function z() {
//     var b = 900;
//     function x(){
//         var a = 10;
//         function y() {
//             console.log(a,b);
//         }
//         // a=200;
//         // b=200;
//         return y;
//     } 
//     b = 100; 
//     a=100;  // won't re-assign because "var" has function-scope. and a is defined in function x(). 
//     return x;
// }


// let v = z();
// v()();
