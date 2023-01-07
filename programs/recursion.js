//this is noramal way how to write recursion function
//
// function factorial(n){
    //this base case
//     if(n==0)
//         return 1;
    //this is recursion relation
//     let small=factorial(n-1);
//     let big=n*small

//     return big;
// }

// console.log(factorial(5))

//this is Acutal recurstion
//this is for factorial find like=5!=5*4*3*2*1=120
// function factorial(n){
//     if(n==0)
//         return 1;
//     return n*factorial(n-1);
// }
// console.log(factorial(5))


//this is Print the number in reverse order by recursion
//this is tail recursion because recurive call in last
// function ReverseNumber(n){
//     if(n==0)
//         return;
//     console.log(n)
//     ReverseNumber(n-1)
// }
// ReverseNumber(10)

//this is head recursion because recurive call in first
// function ReverseNumber(n){
//     if(n==0)
//         return;
//     ReverseNumber(n-1)
//     console.log(n)
// }
// ReverseNumber(10)





//this is Print the number in incresing  order by recursion but we not use this way 
// function ReverseNumber(n){
//     if(n==11)
//         return;
//     console.log(n)
//     ReverseNumber(n+1)
// }
// ReverseNumber(1)

// source to destination 
// function sourceTodestination(src,dest){
//     console.log("source",src,"destination",dest)
//     if(src== dest){
//     console.log("pahuch gya")
//         return;
//     }
//     src++
//     sourceTodestination(src,dest)
// }
// sourceTodestination(1,10)


//counting the total stairs
// function climbStairs(n){
//     if(n<0)
//         return 0;
//     if(n==0)
//         return 1;
//     return climbStairs(n-1)+climbStairs(n-2)
// }
// console.log(climbStairs(10))


//say number problem 
// let arr=["zero","one","two","three","four","five","six","seven","eight","nine","ten"]
// let n=412
// function sayDigit(n,arr){
//     //base case
//     if(n == 0) return;

//     //processing
//     let digit= n % 10
//     // n=n / 10

//     //recursive
//     // console.log(arr[digit]+" ")
//     sayDigit(n,arr)
//     console.log(arr[digit]+" ")
// }

// console.log(sayDigit(12,["zero","one","two","three","four"]))




