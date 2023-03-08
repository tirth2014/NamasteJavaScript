// map, filter & reduce 🙏 Namaste JavaScript Ep. 19 🔥

// map => returns an output array
const arr = [1,2,3,4,5]

function squareFun(x){
    return x*x;
}

function binaryFun(x){
    return x.toString(2);
}

const output = (x) => x.toString(2); // it's anonymous function same as above function


const squareRes = arr.map(squareFun)
const binaryRes = arr.map(binaryFun)
// same as above
// const binaryRes = arr.map((x) => x.toString(2))
console.log(squareRes,'\n',binaryRes);


// filter => returns an output array

even_nos = arr.filter((x) => x%2 === 0);
console.log(even_nos);


//  reduce  =>  returns 1 resultant value

const arr2 = [5,1,3,2,6]

function findSum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

const output1 = findSum(arr2);
console.log(output1);           // 17

const output2 = arr2.reduce((acc,curr) => acc = acc+curr, 0)
console.log(output2);          // 17

// reduce takes 2 argument: (1) a callback function having two parameters: accumulator and current. Name pr thi j we can understand what they represents.
// (2)initial value for accumulator


// program to find max from array

maxNum = arr2.reduce(function(max,curr){
    max = curr > max ? curr:max;
    return max;
}, 0)

console.log(maxNum);