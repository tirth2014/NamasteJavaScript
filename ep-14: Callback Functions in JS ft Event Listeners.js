//  ep-14: Callback Functions in JS ft Event Listeners

// JavaScript is a synchronous single-threaded language but, due to callbacks we can do async things inside JS!

// What is Callback function in JS

// Blocking main thread 
//  ahiya "setTimeout" ni andar nu function is callback function. je 3000 ms pachhi execute thase, but tya sudhi call stack blocked nhi re bcz of asynchronousim...it'll move on and execute other things.
setTimeout(function() {
    console.log('timer');
}, 3000)

function x(y) {
    console.log('x');
    y();
}
x(function y() {
    console.log('y');
})

// add click event on click me button...here the function is callback function
// document.getElementById("clickMe").addEventListener("click", function(){
//     console.log('clicked...');
// })

// let's add click counter

// let count = 0;
// document.getElementById("clickMe").addEventListener("click", function(){
//     console.log('clicked...', ++count);
// })
// but using global variable is not a good idea! as anyone can change it. so let's make it abstract.

function attachEventListeners() {
    let count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log('clicked...', ++count);
})
}

attachEventListeners();

// Garbage Collection and removeEventListeners
// Event listeners are heavy as they form closures. So even when call stack is empty, EventListener won't free up memory allocated to count as it doesn't know when it may need count again. So we remove event listeners when we don't need them (garbage collected) onClick, onHover, onScroll all in a page can slow it down heavily.