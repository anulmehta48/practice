// function BankAccount(customerName,balance=0) {
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
//     this.balance=balance

//     this.deposit=function(amount){
//         this.balance+=amount
//     }
//     this.withdraw=function(amount){
//         this.balance-=amount
//     }
// }
// const anulAccount=new BankAccount("Anul Mehta",1000) // 1st object
// const mohitAccount=new BankAccount("Mohit Gupta",2000)// 2nd object
// console.log(anulAccount);
// console.log(mohitAccount);

// anulAccount.deposit(10000)
// mohitAccount.deposit(5000)
// console.log(anulAccount);
// console.log(mohitAccount);

// Here we see both have same properties & methods but when these are cretated so it will take memory space uses so here same things are taken 
// memory space so this is very bad to waistge of memory so we have to make simple not comlex so how we avoding this problem.
// we can make one time only propties and method and use in multiple time but how so here prototype come into picture.

/*
    1.JavaScript functions is an object so that we can use access their properties and method using dot . operator because we use . operrator
    for access the object properties method and functions

    2.When we create any function in javascript then javascript add a default property that is prototype and its value is empty object {} that
    is called prototype in javascript.

    3.Every Object in javascript like Array,functions,Object all they have prototype with their constructor function and also constructor functions
    has its own grand construtor prototypes so if any method is you want to use with create function then you can use it. 
*/


function BankAccount(customerName,balance=0) {
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance

}
BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}
BankAccount.prototype.whithdraw=function(amount){
    this.balance-=amount;
}

const anulAccount=new BankAccount("Anul Mehta",1000) // 1st object
const mohitAccount=new BankAccount("Mohit Gupta",2000)// 2nd object

console.log(anulAccount);
// BankAccount {
//     customerName: 'Anul Mehta',
//     accountNumber: 1704127073017,
//     balance: 1000
//   }
// now here in anul object have only their properties but not any methods 
// now if he wanted to use some method so he has to take help of his prototype and we add some method on prototype then
// it search any method in his itself and use it and if not then it will go his parent constructor prototype methods and search and use it if not
// then its go for his next grand parent constructor prototype and so on untill root Object constructor Prototype .. this is called prototye chaining.
// In javascript have Array,Object has buit-in Constructor and his  properties & methods.

anulAccount.deposit(5000)
console.log(anulAccount);