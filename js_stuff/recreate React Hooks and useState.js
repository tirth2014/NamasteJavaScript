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
