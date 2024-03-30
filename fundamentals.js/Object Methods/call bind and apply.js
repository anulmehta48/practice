// call, bind and apply method;-

// 1.call() => using a call method we can do a function borrowing so this is known as function Borrowing method aswell because we we 
// borrowing the function from other object and use it with the data of some other objects.

let name={
    Firstname:"Anul",
    LastName:"Mehta",
    printFullname:function(){
        console.log(this.Firstname+" "+this.LastName)
    }
}
// name.printFullname()

//now we are creating other objects
let name2={
    Firstname:"Mohit",
    LastName:"Gupta",
}

//so here how i can use printFullname() method for our second object name2 for so here is call() method came into the picture 
//now we can browwing the printFullname() from name object and then we will be able to use this in object name2 object.

// name.printFullname.call(name2)
// now we calling the same funtion for name2 object so it will fetch the data of name2 object and print-Mohit Gupta.
// In this call method its take two argument first is object reference and second is function arguments like-
// Generally we use function outside of an object so-

let printFullname=function(home,state){
    console.log(this.Firstname+ " "+ this.LastName +" "+"from"+" "+home+" "+state)
}

//so now here is this method is not inside in any object so we do not use object.method because it now outside so we use directly
// printFullname.call(name2,"Surat","Gujarat") //<-- this is call() method
// printFullname.call(name,"Kota","Rajasthan")  //<-- this is call() method


// 2.apply() => this is same like call method it only deference is that how you pass the  arugments into the function that's it .
// so basically we are passing the arugments in Array of list like -
//  printFullname.apply(name2,["Surat","Gujarat"]) //<-- this is apply() method
//  printFullname.apply(name, ["KOta","Rajastha"])  //<-- this is apply() method


//3.bind() =>this is also same like call & apply method but only defrenece is that we instead of using directly call the function method 
// we can bind the funtion(call) method with a object and return the copy of that method and use it with others.
// basically we create a copy of bind() method  with new variable and assigned in function methdod and call that method using variable name.
// bind in if function taking some argumnet then it will passed by in same like call method like one my one normally

let obj={
    Firstname:"Anul",
    LastName:"Mehta"
}
let printName=function(){
    console.log(this.Firstname + " " +this.LastName)
}

let MyPrintName=printName.bind(obj)
MyPrintName()

// this is here bind() method 

function greet(greeting,state) {
    return greeting + ", " + this.name + " " +state;
}

var person = { name: "John" };
var greetJohn = greet.bind(person, "Hello","rajasthan");

console.log(greetJohn()); // Outputs: Hello, John
