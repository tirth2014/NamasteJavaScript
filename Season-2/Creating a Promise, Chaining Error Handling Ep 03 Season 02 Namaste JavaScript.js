// Creating a Promise, Chaining Error Handling Ep 03 Season 02 Namaste JavaScript

// How to Create a Promise?

//  Consuming a promise

const cart = ["shoes","kurta","goggles"]

/*
const promise = createOrder(cart);  // orderId

console.log(promise);

promise.then(
    //-----callback function----
    function(orderId){
    console.log(orderId);
    // proceedToPayment(orderId);
})

// In case the promise is rejected then it'll show red error in browser
// But, as a developer we should always gracefully handle the error and so we should always use catch in promise
.catch(function(err){
    console.log(err.message);
})
*/

//  Producing a promise
//  Here we're creating a createOrder API
//  Once we call this API, it'll create a new promise pr and return it.

function createOrder(cart){


    const pr = new Promise(function(resolve,reject){
    // createOrder
    // validateCart
    // orderId

    if(!validateCart(cart)){
        const err = new Error("Cart is not valid!")
        reject(err);
    }

    // logic for createOrder
    const orderId = "1245";  // whatever logic to fetch orderId from db for example
    if(orderId){
        // aama resolve ma je kai pass karsu e callback function ma malse upr
        setTimeout(function(){
            resolve(orderId); 
        },5000)
    }

    });

    console.log(pr);
    return pr;

}

function validateCart(cart){
    // --logic---
    // for sake of simplicity we're skippin' it.
    // return true

    // to reject the promise
    return false 
};


// We covered the easy part...now let's see some complex stuff
// Promise Chaining
// Note: Here we can pass the data from each chain level to other chain level.

createOrder(cart)
.then(function(orderId){
    console.log(orderId);
    // ahiya je return karsu e promise chain ma niche pass thase
    return orderId;
})
.catch(function(err){
    //  now even if cart is invalid! it'll proceed ahead to next then in promise chain
    // Here, we're jst ATTACHING a failure callback function to our promise object. we're NOT traditionally CALLING a callback function.
    console.log(err.message);
})
.then(function(orderId){
    // returns new promise
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    // handle the proceedToPayment promise in consecutive .then promise chain
    // this is the clean way to write the code. otherwise aapne direct upr na return function ma .then karine pn lakhi sakiye horizontally...but then we'll be stuck in promise hell ;)
    console.log(paymentInfo);
})
// generic catch.. 
// suppose aapne cart error aave chhe toy proceed to payment karvu hoy to what we can do is..to put the catch above
.catch(function(err){
    console.log(err.message);
})
.then(function(){
    console.log("No matter what happens!....I'll definitely be called!");
})


function proceedToPayment(orderId){
    return new Promise(function(resolve,reject){

        if(!paymentTransferred(orderId)){
            reject(new Error("Payment Failed!"))
        }

        resolve("Payment Successful");
    })
}

function paymentTransferred(orderId){
    return true;
    // return false;
}


//  This PROMISE CHAINING helps us to get rid of callback hell!