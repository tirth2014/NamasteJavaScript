// ep-15: Asynchronous JS & Event Loop

// function a() {
//     console.log('a');
// }

// a();
// console.log("End");

// Here, everything will be executed line by line in call stack of JS engine.
// But, what if we want to execute certain piece of code after certain delay?..But, call stack has no timer..so,how can we get the superpower of timers?
// BROWSER has lots of superpowers like urls, timers,databases access (like netfilx db access), It can show shows on UI, bluetooth, locations etc..
// So, how can we access all these superpowers inside call-stack of JS engine.

// To access all those superpowers, we need Web APIs! like..
// setTimeout(), 
// DOM APIs,
// fetch(), 
// LocalStorage,
// console,
// Location
// whatevere we do after document. is DOM APIs 

// console.log("Start");

// setTimeout(function cb() {
//     console.log("Callback");
// },5000);

// console.log("End");

// Here, console is a web API provided to JS engine by "window". 
// First global execution context is created inside call stack and we somehow need callback function inside call stack after 5sec to execute..so, call stack will quickly execute it jevu aavse e bhegu
// So, here comes in the picture, the "Event Loop" and "Callback Queue"
// As soon as the 5000ms timer expires the cb(callback) function cannot directly go to Call Stack. Rather cb(callback) function is pushed inside the cb queue. Now, the task of the Event Loop is to push whatever is there inside cb queue to Call Stack.

// --fetch-- it doesn't work same like event listeners or setTimeout()...it's a different case.
// fetch basically goes and requests an API call.

console.log("Start");

setTimeout(function cbT(){
    console.log("CB Timeout!");
}, 5000);

fetch('https://api.netflix.com') // fetch is a Web API used to make network calls.
.then(function cbF(){
    console.log("CB Netflix!");
});

console.log("End!");

// Here, after fetching data from netflix API, the cbF won't go to cb Queue like usual case. but, it goes to "Microtask Queue" {It's given priority over cb Queuse}
// So, now cbF goes to Microtask Queue and cbT in cb Queue.
// Microtask Queue has callbacks only from Promises and MutationObserver 
// jya sudhi microtask queue ma badha callbacks call stack ma na pochadi de tya sudhi Even Loop doesn't put CB Queue call backs to call stack.

// STARVATION of tasks inside cb queue: when Microtask queue doesn't give a chance.