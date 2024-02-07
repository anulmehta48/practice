// const dulha="lab"
// const dulhan="laby"

// dulha="haramzada"
// console.log(dulha+" weds "+dulhan);

// var a=12
// var b=a

// b=b+2

// console.log(a);
// console.log(b);

// var a=[1,2,3,4]
// var b=a
// b.pop()

// console.log(a);
// console.log(b);

// function abcd(){
//     for(var i =1;i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }

// abcd()

// ****************************

// var a=15
// function abcd(){
//     for(var i=1;i<12;i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abcd()

// let arr=[2,5,6,8,9]

// let a=arr.forEach((val)=>{
//   console.log(  val+2);
// })

// let obj={
//     name:"anul",
//     age:24,
//     city:"kota"
// }

// for(let key in obj){
//     console.log(key,obj[key]);
// }

// first class functions
// function abcd(a){
// console.log(a);
// a()
// }
// abcd(function(){
//     console.log("kkk");
// })

// let arr=[2,5,6,9,51]
// arr[-1]=2
// console.log(arr);

// console.log(typeof(arr));

// console.log(Array.isArray([]));
// console.log(Array.isArray({}));

// IIFE
// var ans = (function () {
//   var privateVal = 12;
//   return {
//     getter: function () {
//         console.log(privateVal);
//     },
//     setter:function(val){
//         privateVal=val
//     }
//   };
// })();

// Prototype
// let obj={
//     name:"jjj"
// }

// let a=12

//prototype inheriatenace
// let Human={
//     name:"ANul",
//     canFly:false,
//     CanDie:true,
//     CanTalk:true
// }

// let AnotherStudent={
//     solveJsQuetion:true,
//     createWebesite:true
// }

// AnotherStudent.__proto__=Human;

// function abcd(){
//     console.log(this);
// }
// abcd()

// this call apply bind

// call
// function abcd(){
//     console.log(this);
// }

// let obj={
//     name:"Mehta"
// }

// abcd.call(obj)

// function abcd(val,val2,val3){
//     console.log(this,val,val2,val3);
// }

// let obj={
//     name:"Mehta"
// }

// abcd.call(obj,1,2,3)

// apply
// function abcd(val,val2,val3){
//     console.log(this,val,val2,val3);
// }

// let obj={
//     name:"Mehta"
// }

// abcd.apply(obj,[1,2,3])

// bind
// function abcd(){
//     console.log(this);
// }

// let obj={
//     name:"Mehta"
// }

// let newBindedFunction=abcd.bind(obj)

// newBindedFunction()

//todo Namaste JAVASCRIPT

// getName()
// console.log(x);
// console.log(getName);

// var x=7
// function getName(){
//     console.log("hello");
// }

// var a=15
// console.log(typeof a);

// a="45454"
// console.log(typeof a);

// function a(){
//     var b=10

//     c()
//     function c(){

//         console.log(b);
//     }
// }

// a()

// function myFun() {
//     var a = 10;
//     function myop() {
//         var b = 20;
//         console.log(a);
//     }
//     myop()
//     // console.log(b);
// }
// myFun();

// a=[2,5,6,7,8,9,-1]
// console.log(a);

// // a.forEach(element => {
// //     console.log(element+10);
// // });
//  for(let i of a){
//     console.log(i);
//  }

// var b={
//     s:"lokesh",
//     b:"kumar"
// }
// for(var key in b){
//     console.log(key);
// }

// function square() {
//   console.log("this is square");
// }

// function myFun(p) {
//   console.log("this is myFun");
//   setTimeout(() => {
//     p();
//   }, 5000);
// }
// myFun(square)

// setTimeout(() => {
//   console.log("print");
// }, 5000);

// First calss fuctions or citizen
// var a=function myfun(){
//   console.log("hello");
// }
// a()

// function abcd(a) {
//   a()
// }
// abcd(function () {
//   console.log("hello");
// });

// var arr = [15, 4, 54, 45, 47, 454,-255,-257];
// arr[-1]=75
// arr[-2] = 100;
// arr[-3]=150
// console.log(arr);
// console.log(arr.length);

// todo Interviews Higher Order function

// function abcd(fun){
//   fun()
//   return function(){
//     console.log("lokesh");
//   }

// }
// console.log(abcd(function(){console.log("hhh");}));

// todo Constructor
// A Normal Fuction in which we used this key word (for craeting instance on window)and this is
// function is called by using new key word that is called constructor function
// function saanchaOfBistuit(){
//   this.width=12;
//   this.height=22;
//   this.color="brown"
//   this.taste="sugary"
// }
// let ParleG=new saanchaOfBistuit()
// let ButterBite=new saanchaOfBistuit()
// let Orio=new saanchaOfBistuit()

// function circularButton(color){
//   this.radius=2;
//   this.color=color
//   this.icon=false
//   this.pressable=true
// }

// let redBtn=new circularButton("Red")
// let yellowBtn=new circularButton("yello")
// let greenBtn=new circularButton("Green")

// todo new => when you use just imagine new blackobject {} creted (for intance creation)and new key word after we have function so call it

//todo iife => Immediete invocked function expression and it used for create private variable
// (function(){
//   let a=12
//   console.log("hiii");
// })()

// let ans=(function(){
//   let private=12;
//   return {
//     getter:function(){
//       console.log(private);
//     },
//     setter:function(val){
//       private=val
//     }
//   }
// })()

//Asynchronouse
//callback
//let ans = fetch("http://www.facebook.com/").then().catch();

//promise
// let Ans=new Promise((resolve,reject)=>{
//   if(true){
//     return resolve()
//   }else{
//     return reject()
//   }
// })
// Ans.then(()=>{
//   console.log("reslove ho gaya");
// })
// .catch(()=>{
//   console.log("reject ho gya");
// })

// function abcd() {
//   fetch("https://dummyjson.com/products/1")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// abcd()

//async await

// async function abcd() {
//   let raw =await fetch("https://dummyjson.com/products/1")
//   let ans= await raw.json()
//   console.log(ans);
// }
// abcd()






//hoisting
