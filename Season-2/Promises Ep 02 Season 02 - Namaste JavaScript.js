// Promises Ep 02 Season 02 - Namaste JavaScript

// Traditional callback


createOrder(cart, function(orderId){
    proceedToPayment(orderId);
})

// Using Promise
const pr_obj = createOrder(cart); 

pr_obj.then(function(orderId){
    proceedToPayment(orderId);
})
*/

//  here the inner call function is ATTACHED to promise object and not passed to it like traditional callback.
// jyare pr_obj ma value/data aavse tyare then vadu callback function call thase.
/* 
1. Promise is a container for the future value (OR)
1. Promise is a place holder for a certain period of time until we receive a value from an asynchronous operation. (OR)
1. Promise is an object representing the eventual completion or failure of an asynchronous operation.



//  realtime example

const GITHUB_API = "https://api.github.com/users/tirth2014";

const user = fetch(GITHUB_API);  // {user: undefined}
// here, the user wil have a Promise object but in pending state and [[PromiseResult]]: undefined

console.log(user);