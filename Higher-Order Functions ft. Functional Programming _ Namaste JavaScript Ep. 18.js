// Higher-Order Functions ft. Functional Programming _ Namaste JavaScript Ep. 18
// Things learned:
// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// First-class functions are JavaScript functions that can behave like variables. They can also be passed as arguments to higher-order functions.
// 5. If we use Array.property.function-name. This function is accessible to any array in your code.

// Higher-Order Functions : which takes function as an argument or returns a function

//  Reusability, Modularity etc.. are important things to learn from functional programming
//  Break down logic into smaller functional units. for ex. Circle no area,circumference,diameter etc.. find karvano code karvo hoy to badha na separate function nhi banavvana
//  traney na formula mate alag alag function ane 1 generic calculate function banavvanu je array of radius for ex. as an input le ane formula le from that modular functions and calculate karine o/p array return kare


const radiusArr = [1, 2, 3, 4];

// logic to calculate area
const area = function (radius) {
    return Math.PI * radius * radius;
}

// logic to calculate circumference
const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const calculate = function(radiusArr, logic) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
        output.push(logic(radiusArr[i]));
    } 
    return output;
}
console.log(calculate(radiusArr, area));
console.log(calculate(radiusArr, circumference));
// Over here calculate is HOF
// Over here we have extracted logic into separate functions. This is the beauty of functional programming.

// Polyfill of map
// Over here calculate is nothing but polyfill of map function
// console.log(radiusArr.map(area)) == console.log(calculate(radiusArr, area));

// ***************************************************
// Lets convert above calculate function as map function and try to use. So,

Array.prototype.calculate = function(operation) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(operation(this[i]));
    } 
    return output;
}
console.log(radiusArr.calculate(area))

//  radiusArr.map(logic) returns the same output as radiusArr.calculate(logic)