//find the fibonacci;
// function fib(n) {
//    if(n==0) return 0;
//    if(n==1) return 1;
//    return fib(n-1)+fib(n-2)
// }
// console.log(fib(7))


//using for loop or normal how we can print the fibonaci series
//print the fibonaci and prit the sum of all odd numbers
//this program i have not solved in my Interview that is very bad for me ...;
// function fib(n) {
//     let a=0;
//     let b=1;
//     let result=[]
//     let sum=a+b;
//     result.push(sum)
//     for(let i=0;i<=n;i++){
//         let temp=a+b;
//         a=b;
//         b=temp;
//         result.push(temp)
//     }
//     let ans=0
//     for(let i=0;i<result.length;i++){
//         if(result[i]%2==1){
//             ans+=result[i]
//         }
//     }
//     console.log(result)
//     return ans;

// }
// console.log(fib(5))


// Write a program in javaScript, which takes a number as a input parameter 
// and you have to print all the numbers(integer) in fibonnacci fashion till it is less than 
// equal to the input number.

// function fibonacci(n){
//     let a=0;
//     let b=1;
//     let result=[]
//     if(n==1) return 1
//     let sum=a+b;
//     result.push(sum)
//     for(let i=0;i<=n;i++){
//         let temp=a+b;
//         a=b;
//         b=temp;
//         if(temp<=n){
//             result.push(temp)
//         }else{
//             break;
//         }
//     }
//     return result
// }
// console.log(fibonacci(13))
