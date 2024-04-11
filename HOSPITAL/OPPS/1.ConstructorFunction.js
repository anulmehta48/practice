/*
*OPPS => It is programming Paradigm.
*Why we need =>to solve a complex problem or encapsulte those functionality and only shows accencial or nessecery things.
*just like Ligt bulb so when you have to use light bulb you only press the button of ligt bulb, you don't need to know how it is blow.
*so making these kinds of features we use opps concepts in prograamming.
*like -Inheritance, Polymorphism, abstraction, encapsulation
*/

//* constructor function;
//A constructor function in JavaScript is a special type of function used to create and initialize objects created within that function.
//costructor function is just like normal function but with some extra functionality or we can say it is a class 
function BankAccount(customerName,balance=0) {
    //these variables are called properties 
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance

    // these functions are called methods 
    this.deposit=function(amount){
        this.balance+=amount
    }
    this.withdraw=function(amount){
        this.balance-=amount
    }
}
//these are called instance of constructor function or we can say objects of constructor class
//here we are creating new instanse using new key word with construcor and his propetries
const anulAccount=new BankAccount("Anul Mehta",1000) // 1st object
const mohitAccount=new BankAccount("Mohit Gupta",2000)// 2nd object
console.log(anulAccount);
console.log(mohitAccount);

//here we are using methods of BankAccount Construtor class 
anulAccount.deposit(10000)
mohitAccount.deposit(5000)
console.log(anulAccount);
console.log(mohitAccount);

//**BUT inside constructor class we do not create method inside it because it is not good  */

/*
    1.JavaScript functions is an object so that we can use access their properties and method using dot . operator because we use . operrator
    for access the object properties method and functions

    2.When we create any function in javascript then javascript add a default property that is prototype and its value is empty object {} that
    is called prototype in javascript.

    3.Every Object in javascript like Array,functions,Object all they have prototype with their constructor function and also constructor functions
    has its own grand construtor prototypes so if any method is you want to use with create function then you can use it. 
*/



// //*class 
// //class keyword is just syenthetical sugar in javascript it is just like Prototype adding methods outside of constructor function that it. 
// // in the class we cretated method inside of class itself but ouside of cunstructor functions.

// class BankAccount{
//     customerName;
//     accountNumber;
//     balance;

//     constructor(customerName,balance=0){
//         this.customerName=customerName
//         this.accountNumber=accountNumber
//         this.balance=balance
//     }

//     deposit(amount){
//         this.balance+=amount
//     }

//     withdraw(amount){
//         this.balance-=amount
//     }
// }

// const AnulAccount=new BankAccount("Anul Mehta",6000)
// console.log(AnulAccount);



//SO now you know both syntax it depends on you which one you used and both are same thing 
//previous constructor syntax used and now class syntax used in indrusty because it a new and optimzed way
//Hoisting is not working with class construtor