// function fun() {
//     c();
    
//     function c(){
//         var b = 8;
//         console.log(b)
//     }
// }
// fun()
// console.log(b);  // ReferenceError: b is not defined

// // control won't go down because of error in above line
// let a = 10
// console.log(a);

// function fun(){
//     c();
//     function c(){
//         console.log(myVar);
//         const myVar = 8; // Uncaught ReferenceError: Cannot access 'myVar' before initialization
                            // If we use "var" instead of const then it will log 'undefined'
//     }
// }

// const myVar = 10;
// fun()
// console.log(myVar)

// function fun(){
//     c();
//     function c(){
//         console.log(myVar); //10
//     }
// }

// const myVar = 10;
// fun()
// console.log(myVar) //10

// function fun(){
//     const myVar = 8;
//     c();
//     function c(){
//         console.log(myVar);  //8
//     }
// }

// const myVar = 10;
// fun()
// console.log(myVar) //10

function fun(){
    c();
    function c(){
        console.log(myVar);
        var myVar = 8;
    }
}

const myVar = 10;
fun()
console.log(myVar)
