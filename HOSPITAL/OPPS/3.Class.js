//*class 
//class keyword is just syenthetical sugar in javascript it is just like Prototype adding methods outside of constructor function that it. 
// in the class we cretated method inside of class itself but ouside of cunstructor functions.

class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance=0){
        this.customerName=customerName
        this.accountNumber=Date.now()
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount
    }

    withdraw(amount){
        this.balance-=amount
    }
}

const anulAccount=new BankAccount("Anul Mehta",6000)
const mohitAccount=new BankAccount("Mohit Gupta",6000)
console.log(anulAccount);
console.log(mohitAccount);

anulAccount.deposit(10000)
mohitAccount.deposit(5000)
console.log(anulAccount);
console.log(mohitAccount);



//SO now you know both syntax it depends on you which one you used and both are same thing 
//previous constructor syntax used and now class syntax used in indrusty because it a new and optimzed way
//Hoisting is not working with class construtor so always first create class then use it.