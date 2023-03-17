//What is Function => A Function is set of statment that perform the perticular task based on the input and
// return output from it,that is called functions.

//this is a normal function in javascript
// function myFun(a,b){
//     let sum=0;
//     sum=a+b
//     return sum
// }
// console.log(myFun(5,3))

//What is CallBack Function => when you take a function and pass this function inside Another function as in argument so you can call this function
//sometime else in your code that is called CallBack Functions.

// function fun1(){
//     console.log("this is fun1")
// }
// // fun1()

// function fun2(loke){
//     console.log("this is fun2")
//     loke()
// }
// fun2(fun1)


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