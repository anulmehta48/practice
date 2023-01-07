//find divisible by 7 element ;
// let arr=[14,23,17,26,67,47,42,101,48,45]
// let n=7
// function divisible(arr,n){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%n==0){
//             console.log(arr[i],"yes")
//         }else{
//             console.log(arr[i],"no")
//         }
//     }
// }
// console.log(divisible(arr,n))
//here Tc is O(n);
// here Sc is O(1);



//using recursion 
// let arr=[14,23,17,26,67,47,42,101,48,45]
// function divisibleby7(arr){
//     if(arr.length==0) return;
//     else{
//         let element=arr.pop();
//         if(element%7==0){
//             console.log(element,"Yes")
//         }else{
//             console.log(element,"No")
//         }
//         divisibleby7(arr)
//     }
// }
// console.log(divisibleby7(arr))
//here TC is O(n);
// Here is SC is O(1)


//write a countdown N to 1  or decresing order
// using brute force 
// function countdown(n){
// //   we can solve using only for loop
//     for(let i=n;i>0;i--){
//         console.log(i)
//     }
// }
// console.log(countdown(10))

// function countdown(n){
// //   we can solve using only while loop
//    while(n>0){
//     console.log(n);
//     n--
//    }
// }
// console.log(countdown(10))


// Now using Recursion
// function countdown(n){
//     if(n==0) return //basecase 
//     else{
//         console.log(n); //process
//         n--             // reduce input
//         countdown(n)    // call function again with reduce input
//     }
// }
// console.log(10)


// find sum of number 1 to N;
//brute force
// function sumUpto(n){
//     let sum=n*(n+1)/2
//     return sum
// }
// console.log(sumUpto(10))

//using recursion
// function sumUpto(n){
//     if( n==1) return 1;//here is Mandatory return 1 
//     return n + sumUpto(n-1);
// }
// console.log(sumUpto(10))

// let sum=0
// function sumUpto(n){
//     if( n<1) return 1;//here is Mandatory return 1 
//     else{
//         sum=sum+n;
//         n--
//         sumUpto(n)
//     }
//     return sum
// }
// console.log(sumUpto(10))


//find the factorial
//5!=5*4*3*2*1
// using brute force 
// function fac(n){
//    let result=1;
//    for(let i=n;i>0;i--){
//     result=result*i
//    }
//    return result
// }
// console.log(fac(5))



//find the factorial
//5!=5*4*3*2*1
// function fac(n){
//     if(n==0) return 1;
//     return n*fac(n-1)
// }
// console.log(fac(5))


//find fibonacci series;
//1 1 2 3 5 8 13 21 34 55 89 .....
// function fibo(n){
//     if(n<=2) return 1;
//     return fibo(n-1)+fibo(n-2)
// }
// console.log(fibo(6))


// find the  product of the array
// let arr=[1,2,3,4]
// function prod(arr){
//     if(arr.length==0) return 1;
//     return arr[0] * prod(arr.slice(1))
// }
// console.log(prod(arr))


//find power of given numper;
//pow(3,5) = 3*3*3*3*3
// function pow(num,exp){
//     if(exp==0) return 1;
//     return num*pow(num,exp-1)
// }
// console.log(pow(3,5))

