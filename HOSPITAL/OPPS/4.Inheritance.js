//Inhetance 

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


function CurruntAccount(customerName,balance=0) {
    BankAccount.call(this,customerName,balance)
    this.transcationLimit=50000;
}
CurruntAccount.prototype=Object.create(BankAccount.prototype)
CurruntAccount.prototype.takeBusinessLoan=function(amount){
    console.log("Taking business loan",+ amount)
}
const anulAccounts=new CurruntAccount("Anul Mehta",1000) // 1st object


function SavingAccount(customerName,balance=0) {
    // how to access all propeties of parent constructor, here is BankAccount
    // here this is point only own SavingAccount and its properties and next paramter is varibles names of parent constructor
    // it is called custrurtor linking
    BankAccount.call(this,customerName,balance)
    this.transcationLimit=10000;

}

SavingAccount.prototype=Object.create(BankAccount.prototype)

SavingAccount.prototype.takeBusinessLoan=function(amount){
    console.log("Taking Personal loan",+ amount)
}

const anulAccountss=new SavingAccount("Anul Mehta",1000) // 1st object
anulAccountss.whithdraw(500)
console.log(anulAccountss);


///

// class BankAccount{
//     customerName;
//     accountNumber;
//     balance;
//     constructor(customerName,balance=0){
//         this.customerName=customerName
//         this.accountNumber=Date.now()
//         this.balance=balance
//     }
//     deposit(amount){
//         this.balance+=amount
//     }
//     withdraw(amount){
//         this.balance-=amount
//     }
// }
// const anulAccount=new BankAccount("Anul Mehta",6000)


// class CurruntAccount extends BankAccount{
//     tarnscationLimit=50000
//     constructor(customerName,balance=0){
//         //access properties form parent construdtor
//         // here super is used for parent and set the values of passed parameter values in parent
//         super(customerName,balance)
        
//     }
//     takeBusinessloan(amount){
//         console.log("Taking business loan",+ amount)
//     }
// }
// const anulAccounts=new CurruntAccount("Anul Mehta",6000)


// class SavingAccount extends BankAccount{
//     tarnscationLimit=10000;
//     constructor(customerName,balance=0){
//         super(customerName,balance)
//     }
//     takePersonalloan(amount){
//         console.log("Taking persnal loan",+amount)
//     }
// }
// const anulAccountss=new SavingAccount("Anul Mehta",6000)

// console.log(anulAccountss);


