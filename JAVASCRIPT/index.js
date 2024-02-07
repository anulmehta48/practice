//Hoisting
// console.log(getName);
// console.log(x);
// getName();

// var x = 7;
// function getName() {
//   console.log("hello javaScript");
// }

//function invocation
// var x=1;
// a();
// b()
// console.log(x);

// function a(){
//     var x=10
//     console.log(x);
// }

// function b(){
//     var x=100
//     console.log(x);
// }

// scoping

// function a() {
//   c();
//   function c() {
//     console.log(b);
//   }
// }
// let b = 10;

// a();

//var let const
// let a=10
// console.log(a);
// var b=100

// const c=100

//block and block scope

//var == global scope
// let ans const == block scope

// {
//     var a=10
//     let b=20
//     const c=30
//     console.log(a);//--global
//     console.log(b);//--block(bracess)
//     console.log(c);//--block(bracess)
// }
// console.log(a);//--global so print
//console.log(b);//-- block o not print
//console.log(c);//-- block o not print

// var a=100
// {
//     var a=10
//     let b=20
//     const c=30
//     console.log(a);//--global
//     console.log(b);//--block(bracess)
//     console.log(c);//--block(bracess)
// }
// console.log(a)

// colousers
// function x(){
//     var a=7
//     function y(){
//         console.log(a);
//     }
//     return y
// }
// var z=x()
// console.log(z);
// z()

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);
// z();

// function x(){
//     var a=7
//     function y(){
//         console.log(a);
//     }
//     a=100
//     return y
// }
// var z=x()
// console.log(z);
// z()

// function z(){
//     var b=900
//     function x(){
//         var a=7
//         function y(){
//             console.log(a,b);
//         }
//        y()
//     }
//     x()
// }
// z()

//uses of clouser
// -module design pattern
// -curring
// fuctions like once
// Memoize
// maintaing state in async world
// Iterators

// About - settimeout
// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("hooooo");
// }
// x()

//! how you can pritn each second print 1 2 3 4 5

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     // console.log(i);
//     setTimeout(() => {
//       console.log(i);
//     }, i*1000);
//   }
//   console.log("hooo");
// }
// x()

// ! if interviewr told you using var you have to do this then
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("hooo");
// }
// x();

// console.log(1);

// new Promise((res)=>{
//     console.log(2);
// })
// console.log(3);

// console.log(1);
// function task() {
//   return new Promise((res) => {
//     console.log(2);
//   });
// }
// task();
// console.log(3);

// let arr = [1, 12, 35, 1, 34];
// function secondMax(arr) {
//   let max = 0;
//   let smax = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       smax = max;
//       max = arr[i];
//     } else if (arr[i] > smax && arr[i] != max) {
//       smax = arr[i];
//     }
//   }
//   return smax;
// }
// console.log(secondMax(arr));

// let arr = [1, 12, 35, 1, 34];
// function secondMax(arr) {
//  let a=arr.sort()
// let index=arr.length-2
// return a[index]
// }
// console.log(secondMax(arr));

// // Promise
// const p=new Promise((resolve,reject)=>{
//     resolve("resolved promise")
// })

// // Async await
// async function getdata(){
//     return p
// }
// const data=getdata()
// console.log(data);

// data.then(res=>console.log(res))

// const p=new Promise((resolve,reject)=>{
//     resolve("Resolved Promise value")
// })

// async function hanlde(){
//     const ans=await p;
//     console.log(ans);
// }
// hanlde()

// function xyz(){
//     p.then(res => console.log(res))
// }
// xyz()

// const p=new Promise((resolve,reject)=>{
//    setInterval(()=>{
//     resolve("Resolved Promise value")
//    },5000)
// })
// const z=new Promise((resolve,reject)=>{
//    setInterval(()=>{
//     resolve("Resolved Promise value")
//    },10000)
// })

// async function hanlde(){
//     console.log("Hello");
//     const ans=await p;
//     console.log(ans);
//     console.log("Hello -after ");

//     const ans2=await z;
//     console.log(ans2);
//     console.log("Hello -afte   r ");
// }
// hanlde()

// function xyz(){
//     p.then(res => console.log(res))
//     console.log("hello");
// }
// xyz()

// async function handle(){
//    try {
//     const data=await  fetch("https://dummyjson.com/products/1")
//     console.log(data);
//     const ans= await data.json()
//     console.log(ans);
//    } catch (error) {
//     console.log(error);
//    }
// }
// handle()

// async function handle() {
//   const data = await fetch("https://dujson.com/products/1");
//   console.log(data);
//   const ans = await data.json();
//   console.log(ans);
// }
// handle().catch((err)=>{
//     console.log(err);
// })

// const Akshay = async () => {
//   try {
//     const data = await fetch(
//       "https://courses.namastedev.com/learn/Namaste-React"
//     );
//     console.log(data.url);
//     const ans = await data.json();
//     // console.log(ans);
//   } catch (error) {
//     console.log(error);
//   }
// };
// Akshay();

// console.log('1' + 1 - '1')

// let arr1=[2,4,6,9]
// let arr2=[1,2,3,7]

// function calculate (arr1,arr2){
//     let even=[]
//     let odd=[]
//     let newArray=arr1.concat(arr2)
//     for(let i=0;i<newArray.length;i++){
//         if(newArray[i]%2==0){
//             even.push(newArray[i])
//         }else{
//             odd.push(newArray[i])
//         }

//     }
//     return [even,odd]

// }
// console.log(calculate(arr1,arr2));

// function printAllPairs(n){
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             console.log(i,j);
//         }
//     }

// }
// console.log(printAllPairs(5));

// function goingUpToDown(n) {
//   console.log("goingUp");
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
//   console.log("\n GoingDown");
//   for (let i = n - 1; i >= 0; i--) {
//     console.log(i);
//   }
// }
// console.log(goingUpToDown(10));

// function numberOfHalf(n){
//     let count=0;
//     while(n>1){
//         n/=2
//         count++
//     }
//     return count
// }
// console.log(numberOfHalf(10));

// 'use strict'
// // console.log(this);
// function x(){
//     console.log(this);
// }
// x()
// // window.x()


// prototype :-

// let obj={
//     name:"anul",
//     age:24
// }

// let OBJ=Object.create({name:"anul"})

// console.log(OBJ);
// // console.log(obj);

function myfun(){

}

console.dir(myfun);



















