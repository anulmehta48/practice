// 'use strict'
//this => this keyword is used for accessing data from parent constructor or parent of parents construtor.
//this keyword is diffrent-different usecase depend on how you used and where you used this keyword.
//As we know the javascript run in so many palaces like browser, nodejs,mobile, smart watches, smart light bulb,robot,etc.
//but its is run on thier run time environment of browser, nodejs,mobile ,smart watches, smart light bulb,robot these all have own Run Time Environment.
//And Always javascript run on Global Object it can be global or it can be winodow or it can be diffrent.
//Example -if javascript is run on Browser then its run time environment is Global Object is window Object.
//        -if javascript is run on Nodejs then its run time environment is Global Object is global Object {}.
//        -if javascript is run on Mobile then its run time environment is Global Object is Android Object.
//        -if javascript is run on Smart watchs then its run time environment is Global Object is Diffrent Object.
//so that means in diffrent-diffrent things for diffrent-diffrent Run Time Environment.

// What is Global Space=> when you write the code on top level or out of the function then that space is global space.
// Value of this keyword in Browser of Global Object is=> window.
// Value of this keyword in Nodejs of Global Object is=> global.

// console.log(this);

// function x(){
//     console.log(this);
// }
// x()
// window.x()

/*Note**
 *1.When we used top-level then this values:- 
     in Browser is - window 
     in Node is - {}

 *2.when we used this inside function then this value is diffrent because of strict mode or non strict mode like
    (this substitution) :-
    =>In the value of this keyword is undefined or null then
    =>this keyword will be replaced with global Object
    =>Only in Normal or 'non-strict' mode
        'normal'
     in Browser is- window 
     in Node is- global

        'use-strict'
     in Browser is- undefined 
     in Node is- undefined

 *3.this keyword value is depends on how this is called that is how you calling the function where this is present
        'Normal'
    => function x(){
        console.log(this)
    }
    window.x() => in Browser is-window
               => in Node is-Window is not defined

        'use strict'
    => function x(){
        console.log(this)
    }
    window.x() => in Browser is-window
               => in Node is-Window is not defined
 * 
 *4.when you used this inside in object then value is Object:- does not matter for strict mode or non -strict mode both have same
    => const student={
            name:"AnulMehta",
               x:function(){
            console.log(this);
            }
        }
        student.x()  => Object{name:"AnulMehta",x:function(){console.log(this)}}
    => const student={
            name:"AnulMehta",
               x:function(){
            console.log(this.a);
            }
        }
        student.x()  => Object{name:"AnulMehta"} => AnulMehta

 *5.when we used object sharing method like call,apply,bind then it also depends how you call the fuctions:-
    => call - Object
    => apply- Object
    => bind - Object

 *6.In Arrow function don't have its own this keyword value so it will take it from its value from lexical environment context where
 it is enclosed so there is whichever object paresent that same object refer arrow function this value also same.

 *7.In the DOM this values is HTML Element tag itself where this keyword is used.

 *8 In Class Constructor in OOPs in Diffrent values of this keyword.
        
 * */
// "use strict";

// const student = {
//   firstName: "Anul",
//   lastName: "Mehta",
// };
// const printFullName = (hometown, state) => {
//   console.log(
//     this.firstName + " " + this.lastName + " from " + hometown + " of " + state
//   );
//   console.log(this);
// };

// const studen2 = {
//   firstName: "Mohit",
//   lastName: "Gupta",
// };
// printFullName.call(student, "kota", "rajsthan");
// // newFun()

// //  const printName=function (name,age){
// //     console.log(name,age)
// //  }

// //  printName

// ********************************

// const obj={
//   name:"Anul Mehta",
//   age:25,
//   printFullName:function(){
//     console.log(this.name);
//   }
// }
// // obj.printFullName()

// const obj2={
//   name:"Mohit Gupta",
//   age:25,
// }

// // using call() we borrowing function from another object that is called function borrowing
// obj.printFullName.call(obj2)

// but now as we go head in deep then we not put our function indide in any object we keep it secure and outside of functions
// normal we giving here example so we can understood

// const obj = {
//   name: "Anul Mehta",
//   age: 25,
// };

// const obj2 = {
//   name: "Mohit Gupta",
//   age: 25,
// };

// // this is may any fuction for requirment uscase now how we use these function in any where
// const printFullName = function () {
//   console.log(this.name);
// };

// printFullName.call(obj) //we use for obj
// printFullName.call(obj2) //we use for obj2





// ***************************************************************************
//  if we have mutliple parameter or arguments then how we using in call
// const obj = {
//   name: "Anul Mehta",
//   age: 25,
// };

// const obj2 = {
//   name: "Mohit Gupta",
//   age: 25,
// };

// // this is may any fuction for requirment uscase now how we use these function in any where
// const printFullName = function (hometown,state) {
//   console.log(this.name +" "+ hometown +" ,"+ state);
// };

// printFullName.call(obj,"Kota","Rajasthan") //we use for obj
// printFullName.call(obj2,"bundi","Uatterpradesh") //we use for obj2

// // *******************************************************************************************
// //  if we have mutliple parameter or arguments then how we using in apply
// //  the only diffrence of apply method we passed arguments in  [] that it because apply method take argument in object and array is object in javascript.
// const obj = {
//   name: "Anul Mehta",
//   age: 25,
// };

// const obj2 = {
//   name: "Mohit Gupta",
//   age: 25,
// };

// // this is may any fuction for requirment uscase now how we use these function in any where
// const printFullName = function (hometown,state) {
//   console.log(this.name +" "+ hometown +" ,"+ state);
// };

// printFullName.apply(obj,["Kota","Rajasthan"]) //we use for obj
// printFullName.apply(obj2,["bundi","Uatterpradesh"]) //we use for obj2



// *******************************************************************************************
//  Bind is just like call method but only diffrence is inside call we direclty call the function but inside
//  in bind we not call the function direclty because bind method bindes the our methods with object and return the copy of that method that is function
//  so when we have to call that function then we store in varible and then called new variable that is returned function.
//  And apply not takes argument in [] we pass normally as an like call method
// const obj = {
//   name: "Anul Mehta",
//   age: 25,
// };

// const obj2 = {
//   name: "Mohit Gupta",
//   age: 25,
// };

// // this is may any fuction for requirment uscase now how we use these function in any where
// const printFullName = function (hometown,state) {
//   console.log(this.name +" "+ hometown +" ,"+ state);
// };

// const myfun=printFullName.bind(obj,"Kota","Rajasthan") //we use for obj
// myfun()
// const myfun2=printFullName.bind(obj2,"bundi","Uatterpradesh") //we use for obj2
// myfun2()
let my=window.document.all
if(my){
  console.log("hello");
}else{
  console.log("bye");
}