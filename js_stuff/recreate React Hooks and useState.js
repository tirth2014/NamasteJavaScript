// Simple program to increment count everytime add(count) is called
// It works perfectly fine, But, has one major problem
// Anyone can alter the variable count in between.

let count = 0
function add(){
  count = count+1;
  return count
}

console.log(add(count))  // 1
console.log(add(count))  // 2
console.log(add(count))  // 3
count = 500    
console.log(add(count))  // 501
console.log(add(count))  // 502



// Let's put count variable inside a function add to try to fix the issue.

function add() {
  let count = 0;
  count = count + 1;
  return count;
}

console.log(add()); // 1
console.log(add()); // 1
console.log(add()); // 1
count = 501;  // ReferenceError: count is not defined
console.log(add());
console.log(add()); 

// we fixed the changing of count in-between issue but instead of count=1,2,3 it prints 1 everytime
// It did not work because we reset the local count every time we call the function.

//  A JavaScript inner function can solve this. 
// All functions have access to the global scope.  
// In fact, in JavaScript, all functions have access to the scope "above" them.
// JavaScript supports nested functions. Nested functions have access to the scope "above" them. 
// We need to find a way to execute count = 0 only once.
// We need a closure.

function getAdd() {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
}

const add = getAdd();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4


// But, this looks ugly....let's use IIFE.

const add = (function () {
  let count = 0;
  return function () {
    count = count + 1;
    return count;
  };
})();

console.log(add()); // 1
console.log(add()); // 2
console.log(add()); // 3
console.log(add()); // 4

