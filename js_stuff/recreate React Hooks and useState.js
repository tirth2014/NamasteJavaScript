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



// Let's implement useState hook.

function useState(initVal) {
  let _val = initVal;
  const state = _val;
  const setState = (newVal) => {
    _val = newVal;
  };

  return [state, setState];
}

const [count, setCount] = useState(1);

console.log(count); // 1
setCount(2);
console.log(count); // 1


// one simple (but cheap) way to fix it is to make state a getter function.

function useState(initVal) {
  let _val = initVal;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };

  return [state, setState];
}

const [count, setCount] = useState(1);

console.log(count()); // 1
setCount(2);
console.log(count()); // 2


// does the same thing, just introduced MyReact module
const MyReact = (function () {
  function useState(initVal) {
    let _val = initVal;
    const state = () => _val;
    const setState = (newVal) => {
      _val = newVal;
    };

    return [state, setState];
  }
  return { useState };
})();

const [count, setCount] = MyReact.useState(1);

console.log(count()); // 1
setCount(2);
console.log(count()); // 2  



// Let's also introduce Component and render:

const MyReact = (function () {
  let _val;
  function useState(initVal) {
    const state = _val || initVal;
    const setState = (newVal) => {
      _val = newVal;
    };

    return [state, setState];
  }

  // teach MyReact what's render
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = MyReact.useState(1);
  return {
    render: () => console.log(count),
    click: () => setCount(count + 1)
  };
}

var App = MyReact.render(Component); // 1
App.click();
var App = MyReact.render(Component); // 2
App.click();
var App = MyReact.render(Component); // 3
App.click();
var App = MyReact.render(Component); // 4


// let's use another state fruit also with useState hook

const MyReact = (function () {
  let _val;
  function useState(initVal) {
    const state = _val || initVal;
    const setState = (newVal) => {
      _val = newVal;
    };

    return [state, setState];
  }

  // teach MyReact what's render
  function render(Component) {
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = MyReact.useState(1);
  const [fruit, setFruit] = MyReact.useState("apple");
  return {
    render: () => console.log({ count, fruit }),
    click: () => setCount(count + 1),
    type: (word) => setFruit(word)
  };
}

var App = MyReact.render(Component); // {count: 1, fruit: "apple"}
App.click();
var App = MyReact.render(Component); // {count: 2, fruit: 2}
App.type("mango");
var App = MyReact.render(Component); // {count: "mango", fruit: "mango"}


// What's wrong here?
// The issue in code is that we are using the same _val variable for both count and fruit state variables. 
// As a result, when we call setFruit(word), it updates _val to the new word value, and this change affects both count and fruit state variables.


const MyReact = (function () {
  let states = [];
  let idx = 0;
  function useState(initVal) {
    const state = states[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      states[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  // teach react what's render
  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  return { useState, render };
})();

function Component() {
  const [count, setCount] = MyReact.useState(1);
  const [fruit, setFruit] = MyReact.useState("apple");
  return {
    render: () => console.log({ count, fruit }),
    click: () => setCount(count + 1),
    type: (word) => setFruit(word)
  };
}

var App = MyReact.render(Component); // {count: 1, fruit: "apple"}
App.click();
var App = MyReact.render(Component); // {count: 2, fruit: "apple"}
App.type("mango");
var App = MyReact.render(Component); // {count: 2, fruit: "mango"}
