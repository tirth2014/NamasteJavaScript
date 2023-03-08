// TRUST ISSUES with setTimeout() _ Namaste JavaScript Ep.17
// JS concurrency model

console.log("start");

setTimeout(function cb() {
    console.log("callback");
},5000)


let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}

console.log("while loop expired");

//  Ahiya pela Global execution context create thase call back queue ma je 10 sec sudhi rese j...cb function call web api ma register thase ane ena pachhi e call stack mathi nikdse ane cb function call stack ma jaine execute thase
//  That's why we can't trust setTimeout() function...pn ha we can guarantee that it'll *at least* wait for 5 ms....aa example ma nichenu while loop main thread ne block kari de chhe 10 sec mate

// But, why JS has only 1 call stack...bcz JS is a synchronous single-threaded language..that's what makes JS so fast then typical compiled languages...it's KIND OF a interpreted language



console.log("start");

setTimeout(function cb() {
    console.log("callback");
},0);

console.log("end");

//  OUTPUT:  start end callback