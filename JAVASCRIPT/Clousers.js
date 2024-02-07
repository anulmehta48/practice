//What is Clousers => Function Along with its lexical scopes bundle together is called clousers.

// that means when we access varibles from our parent function or return the function from function then javascript make this
// clouser and return it from function then we able to access those varibles values becuase it remember the clouser values.

// or function with some preserved values is called clousers.

//When Program execution happen then Global Execution Context is Created and inside this GEC every function have also its own Execution Context and when these
// Function are executed done then its Execution context is deleted but Global Execution Context is not deleted because you are access another functions values or lexical values
//so this time GEC maintains or preserved all variables values that is called clousers. but when we not access any clouser values then Global Execution Context is also deleted on copmleted program.


// Example;-
//when we access parent varibles 
// function parent(){
//     let a=10;
//     function child(){
//         console.log(a)
//     }
//     child()
// }
// parent()

//when we return function from function
// function x(){
//     let a=7
//     return function y(){
//         console.log(a);
//     }
//     a=100
// }
// let z=x()
// console.log(z);
// z()

// when i chnaged the varible value
// function x(){
//     let a=7
//      function y(){
//         console.log(a);
//     }
//     a=100
//     return y
// }
// let z=x()
// console.log(z);
// z()
//it shows 100 because referece of variable of memory

//Usecase of Clousers=>
// 1.Making private varibale
// 2.Currying
// 3.Module design pattren
// 4.Memoize
// 5.setTimeout

//example making private variable
// function createCounter(){
//     let count=0
//     function increment(){
//         count++
//         return count
//     }
//     return increment;
// }
// let counter=createCounter()
// console.log(counter());
// console.log(counter());


// Example of currying-
// function boilNoodles(){
//     console.log("boiling Noodles");
// }

// function cookNoodles(){
//     console.log("cook Noodles");
// }
// let hasCustomerCame=false

// function curry(){
//     boilNoodles()
//     return function(){
//         cookNoodles()
//     }
// }
// const cookedMyFood=curry()

// setTimeout(function(){
//     hasCustomerCame=true
//     cookedMyFood()
// },3000)


//Example of module design pattern
//  - this is nothing but making private variable and private function 
//     or public variable and public function using IIFE 
// Main moto of that is create Encapulation,Organized code structure,resuablity.

const MyModule=(function(){
    //private
    let privateVariable="I am private variable"
    function privateFunction(){
        console.log("I am Private function");
    }
    //public
    return {
        publicVariable:"I am public variable",
        publicFunctiob:function(){
            console.log("I am public Function");
            console.log(privateVariable);
            privateFunction()
        }
    }
})()
//we can access only public things
// console.log(MyModule.publicVariable);
// MyModule.publicFunctiob()

//we can't access private things
// console.log(MyModule.privateVariable);
// MyModule.privateFunction()