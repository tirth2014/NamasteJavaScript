// if(false) {let a = 10;}
//     console.log('hi');
//     console.log(a);
//  {} <--- block or compund statements
// to use multiple statements where JS expects a single statement.

// BLOCK SCOPE:-
// let and const are hoisted inside Block scope...so they're not accesible outside of block
// {
//     var a = 10;  // hoisted inside Global scope
//     let b = 11; 
//     const c = 12;
// }

// console.log(a) // 10
// console.log(b) //ReferenceError: b is not defined
// console.log(c) //ReferenceError: c is not defined

// SHADOWING in JS:-

// var a = 100;
// {
//     var a = 10; // a in Global scope is shadowed by the 'a' inside block..it overwrites it bcz both are pointing to the same location(i.e. in Global Scope)
//     let b = 20;
//     const c = 30
//     console.log(a) //10
// }
// console.log(a); // 10

// let b = 100; // this is hoisted in 'Script' scope
// {
//     var a = 10; 
//     let b = 20; // this b shadows the b in script scope but it won't overwrite it as this is in Block scope.
//     const c = 30 // same is the case for const
//     console.log(b) //20
// }
// console.log(b); //100


// ILLEGAL SHADOWING ex.:
// let a = 100;
// {
//     var a = 10
// }

// But this is valid 
// let a = 100;
// function f(){
//     var a = 10
// }
// f()
// console.log(a); //100

// also vice versa is valid

// var a = 100;
// {
//     let a = 10;
//     console.log(a); // 10
// }
// console.log(a); // 100

// const fun = (name) => {
//     console.log(name+'hello tirth');
// };

// console.log(fun());
