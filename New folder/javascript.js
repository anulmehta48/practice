// 1.Who is created JavaScript?
// Ans- JavaScript was created by Brendan Eich in 1995. It was Developed for Netscape 2 and 
// become the ECMA-262 standard in 1997.
// ECMA- European Computer Manufacturers Association

// 2.What is JavaScript?
// Ans1- JavaScript is a Scripting Language that allow to implement complex features on webpage
// like-update, Interactive and animation. It is third layer of standard web Technology – HTML+CSS+JAVASCRIPT.
// It is used in Frontend as well as in Backend for build the Application using Node.js.

// 3.What is Scripting language means?
// Ans- A scripting language means is a programming language that is used to interpret and execute the
// high-level code command at a time. In general scripting language is easier to learn and faster to code 
// other than structured and complied language such as C and C++.

// 4.How JavaScript is works?
// Ans- When we Run the JavaScript program then Global Execution Context is created and it is created in 
// Two phase- Memory Component (for variable environment (key: value)), and 
// Code Component (for thread of execution).

// 5.JavaScript is Synchronous Single-threaded Language or What is Multi-threaded in JavaScript?
// Ans- Yes, it is Synchronous single-threaded means JavaScript can execute one command at a time in a specific order
// that means is it can only go to the next line once the current line has been finished execution.

// Multi-threaded means is Two or more command run at a time. In JavaScript 
// Introduce workers-threads-module which allows you to create threads and execute 
// multiple java-script task in parallel. Once a thread finished a task it sends a message 
// to the main thread that contains the result of the operation so that it can be used with 
// other parts of the code.


// 6.What is Call-Stack in JavaScript?
// Ans- When the Program Execution happens in JavaScript so Global Execution Context will be 
// created but when the multiple functions and variable are executed inside the functions in functions 
// then it will very difficult to manage the execution context so here call stack comes in to picture. 
// And in the Call-Stack creation updation, deletion and all control handle by the Call-Stack.
// It takes the Global Execution Contexts first and when the new Execution Context is created then 
// it push in the Call stack one by one and when it completed then it is popped out from call-stack and Finally 
// Global execution context completed then it also removed from call-stack and call-stack will be Empty Now.

// 7.What is Hoisting in JavaScript?
// Ans- Hoisting is the phenomena in JavaScript by which you can Access the variables and functions even before
// you have initialized it and even before you have put some value Init you can access without any error.
// Hoisting is nothing but it specifies the value in global scope of variable. if it is only declared then 
// it is allocated in memory a special value undefined and when it executed then it has value that 
// it is shows values.

// 8.What is Scope and Lexical Environment?
// Ans- Where you can Access the Specific variable and functions in are code that is the Scope.
// And Lexical Environment is created whenever the Global execution Context is created and lexical 
// environment is nothing but a local memory with reference of lexical environment of his parent. 
// And these multiple scopes are called scope-chain

// 9. What is var, let, const in JavaScript?
// Ans- all are the variable declaration ways in java-script but they have some differences between all together.
// VAR- var have global scope so you can access the var before have you initialized and before have you
//      put the value in it. you can be re-initialized or duplicate the variable and it is mutable.

// LET- let have block scope so you cannot access the let before have you initialized and have you
//      put the value in it and you can normally declare the variable and after that you can initialized 
//      the value it fine but you cannot be re-initialized or duplicate the variable and it is mutable.

// CONST- const have also block scope so you cannot access the const before have you initialized and 
//        have you put the value in it and you cannot be normally declare the const variable without 
//        value initialized you have you put the value in it then only you able to declare and const is immutable.

// 10.What is let & const in Temporal dead Zone?
// Ans-whenever you try to access a let and const variable inside a temporal dead zone then
// it gives you reference error, they can only be accessing once some values are initialized to them.

// 11. What is Block and Block Scope?
// Ans-Block-{} and we group multiple statement together in block so that we can use it where java-script 
// expect single(one) statement that is called block.
// Block Scope-what all variable and functions that we can access inside the block that is called Block-scope.

// 12.What is Shadowing in java-script?
// Ans. If you have same name variable out of the block scope so that variable shadows this variable values
// that is inside in the block this is called shadowing but in var it is same but let & const in different.

// 13.What is Closure in java-script?
// Ans- Function along with its lexical scope forms closure that known Closure. 
// And when the function return any function then it  return function as well as the function lexical scope
// also with the function so that it remember the variables values that is inside the lexical scope 
// or his parent scope. That is closure.
// Use of closures- Module design pattern, functions like Once, memoize,
// maintain state of async word, setTimeouts, Iterators and many more.

