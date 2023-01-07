// Find Prosum
// Time Limit: 2 sec
// Memory Limit: 128000 kB
// Problem Statement
// You are given an array of N integers A1, A2,. . An. You have to calculate prosum of the array.

// Prosum is defined as the sum of all the Ai x Aj over all pairs (i, j) such that 1 <= i < j <= N, modulo (10^9 + 7)
// Input
// The first line of the input contains a single integer N
// The next line of the input contains N different integers A1, A2,. . An

// Constraints:
// 1) 2 <= N <= 2 x 10^5
// 2) 0 <= Ai <= 10^9
// Output
// Print the answer
// Example
// Sample Input 1:
// 4
// 1 2 3 4

// Sample Output 1:
// 35

// Explanation:
// 1 x 2 + 1 x 3 + 1 x 4 + 2 x 3 + 2 x 4 + 3 x 4 = 35


// Sample Input 2:
// 4
// 141421356 17320508 22360679 244949

// Sample Output 2:
// 437235829


// let arr=[1,2,3,4];
// let ans=0
// function prosum(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             ans+=arr[i]*arr[j]
//         }
//     }
//     return ans
// }
// console.log(prosum(arr))




// "use strict"
// const prompt=require("prompt-sync")({sigint: true});
// let arr=parseInt(prompt())
// // let arr=[1,2,3,4];
// let ans=0
// function prosum(arr){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             ans+=arr[i]*arr[j]
//         }
//     }
//     return ans
// }
// console.log(prosum(arr))