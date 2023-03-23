//!What is Function =>
//A Function is set of statment that perform the perticular task based on the input and
// return output from it,that is called functions.

//this is a normal function in javascript
// function myFun(a,b){
//     let sum=0;
//     sum=a+b
//     return sum
// }
// console.log(myFun(5,3))

//!What is CallBack Function =>
//when you take a function and pass this function inside Another function as in argument so you can call this function
//sometime else in your code that is called CallBack Functions.

// function fun1(){
//     console.log("this is fun1")
// }
// function fun2(fun1){
//     console.log("this is fun2")
//     fun1()
// }
// fun2(fun1)

// console.log("hello")
// console.log("hello, anul")
// console.log("hello Anul Mehta")

//but suppose if we want to print Hello Anul after 5 second then how we can we do that so that here call backs came into picture
// setTimeout(function(){
//     console.log("Hello Anul")
// },5000)

// Callback Function Example using setTimeout
// function fun1(name, fun2) {
//     console.log('Hello world');
//     fun2(name);
// }

// function fun2(name) {
//     console.log(name);
// }
// setTimeout(fun1, 2000, 'John', fun2);

//so that means Any Asychronouse opertions we can do using call back functions
//example=> suppouse we want to buy some products how the process will go

// const cart = ["shorts", "pants", "kurta"];
// In shopping in how the process will happens
// first is create Order then it will go to the processTopayment then it will go for ordersummery then others
// but we want to do these all process one after another by itself so how we can do this
// that means its dependent on each others

// api.createOrder(cart,function(){
//     api.processTopayment(orderid,function(){
//         api.orderSummery(paymentId,function(){
//             api.walletUpadate(balance,function(){
//                 api.TotalBalance()
//             })
//         })
//     })
// })

// setTimeout(function(){
//     console.log("Hello Anul")
// },5000)

//? A funtion takes a callback function and if it happens nested function and nested callback function also then it create call back hell
// fun1(function(a){
//     fun2(a,function(b){
//         fun3(b,function(d){
//             fun4(d,function(e){
//                 fun5(e,function(f){
//                     console.log(f)
//                 })
//             })
//         })
//     })
// })

// But here is problems suppouse when we have large codebase and there is many multiple api are dependent on each others so it will
// create Callback Hell problem and our code goes horizontaly instead of vertically this is called callback hell.
// DisAdvanatge of using callbacks-
//1.Unmantainable & Unreadable code
//2.It structure known as pyramid of doom
//3.Developers also confused to understood the code
//4.Inversion Control of our code that means we loose our control of our code that means it will be called automatically one time
// two time , three time or may be not single time we don't know so that it is very Risky also

//!What is Promise=>
// Promise is used for Handle async operations in JavaScript.
// promise is an object that representing evantual compelition of async operations

//promise is nothing but an object with values that is returning by the function or any API value But Function ans API must be an
//Asynchronous operation that takes some time to execute.

//Its Api will return A promise and promise is nothing but an empty object and when it goes to execute it will take some time to execute
//and during in this time it will fetch some data from api and fill our empty object with that data automeically and now you have your data
//now you can do aything with your data that do you want this is call promise.

// let promise = new Promise(function(resolve, reject){
//    let a=5
//    let b=5
//    if(a==b){
//     resolve()
//    }else{
//     reject()
//    }
// })
// .then(()=>console.log("succesfully"))
// .catch(()=>console.log("somthing wrong"))

// console.log(promise.then())
// console.log(promise.catch())

//? now we takes that promise returned object value and attacted with callback function for further upcomming functions.
//like - processTopayment for

// const promise=createOrder(cart)
// promise.then();

//! previous in callback we are doing like this
// createOrder(cart,function(orderId){
//     processTopayment(orderId)
// })

//! Now in Promise we are doing like this
// const promise=createOrder(cart)
// promise.then(function(oerderId){
//     processTopayment(oerderId)
// })

//! Advantages of Promise
// Promise is help us to avoid callback hell because promise comes with promise chaining.
// It will gives us trust and grantee that it will call only when we got the data of our api or function
// It will called only one time so it is not risky camapre to callbacks
// And Also in this we are not passing our code of control to any other funtions
// Promise is immutables that means you can pass returned values to another function but you can not be able to edit or update that.
// Promise has three state => Pending, Fullfill ,Rejected

// implimentation =>
// const promise = createOrder(cart);
// promise
//   .then(function (orderId) {
//     return processTopayment(orderId);
//   })
//   .then(function (paymentId) {
//     return OrderSummary(paymentId);
//   })
//   .then(function (summeryId) {
//     return UpdateWallet(summeryId);
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// how behind the seen execution happens in promise
// how we impliment asycronouse opertions using promise

const cart = ["shorts", "pants", "kurta"];

const promise = createOrder(cart);
// console.log(promise)
promise
  .then(function (oderId) {
    console.log(oderId);
    return oderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (oderId) {
    return processTopayment(oderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo)
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (oderId) {
    console.log(oderId);
    return oderId;
  })
  .then(function (oderId) {
    console.log("no matter i will definatlly called");
  })

function createOrder(cart) {
  const promise = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId
    if (!isValidateCart(cart)) {
      const err = new Error("Cart is not vaild");
      reject(err);
    }
    // logic of create oder
    const oderId = "12345";
    if (oderId) {
      setTimeout(function () {
        resolve(oderId);
      }, 5000);
    }
  });
  return promise;
}

function isValidateCart(cart) {
  return false;
}

function processTopayment(oderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment successful");
  });
}



//now using promise in .then() function multiple time 





// this is asychrnouse call or network call;
// const axios=require('axios')
// async function getApiData(){
//     const data=await axios("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1301436&lng=75.8421382&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING");
//     const jsonData=await data.json()
//     console.log(jsonData)
// }

// getApiData()

//old way used callback for asycnosue
// createOrder(cart,function(orderId){

// })

// const promise=createOrder(cart)

// promise
// .then(function(oderId){
//     procssToPayment(oderId)
// })
// .then(function(paytnmenId){
//     perocssTosupply(paytnmenId)
// })
// .catch()
