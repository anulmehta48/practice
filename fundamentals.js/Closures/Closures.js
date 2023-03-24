//what is closusers=> Function along with its lexical scopes forms closures bundle togwthers that is called closures.

//noramal way of closurser
// function fun1(){
//     let a=20;
//     function fun2(){
//         console.log(a)
//     }
//     fun2()
// }
// fun1()


//another waya of closures
// function fun1(){
//     let a=20;
//     function fun2(){
//         console.log(a)
//     }
//     return fun2
// }
// fun1()

// let z=fun1()
// console.log(z)
// z()
//output=> [function:fun2]
//           20


//more deep in closures
// function fun1(){
//     let a=20;
//     function fun2(){
//         console.log(a)
//         a=200
//     }
//     return fun2
// }
// fun1()

// let z=fun1()
// console.log(z)
// z()
//output=> [function:fun2]
//           200


// function z(){
//     let b=100;
//     function x(){
//         let a=7;
//         function y(){
//             console.log(a,b)
//         }
//         y()
//     }
//     x()
// }
// z()
//output=> 7 100

// function z(){
// let a=10
// console.log(a)
// }
// z()

// (function(){
//     console.log("I've excuted myself");
// }());

