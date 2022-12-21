// // Given an array of N integers arr[] where each element represents the max length of the jump that can be made forward from that element.
//  Find the minimum number of jumps to reach the end of the array (starting from the first element). 
//  If an element is 0, then you cannot move through that element.

// // Note: Return -1 if you can't reach the end of the array.


// // Example 1:

// Input:
// N = 11 
// arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9} 
// Output: 3 
// Explanation: 
// // First jump from 1st element to 2nd 
// // element with value 3. Now, from here 
// // we jump to 5th element with value 9, 
// // and from here we will jump to the last. 
// // Example 2:

// Input :
// N = 6
// arr = {1, 4, 3, 2, 6, 7}
// Output: 2 
// Explanation: 
// // First we jump from the 1st to 2nd element 
// // and then jump to the last element.


// let arr=[1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// let traget=9
// function minimumJumps(arr,target){
//     let jump=0
//     for(let i=1;i<=arr.length;i++){
//         if(arr[i]==target){
//             jump++
//         }
//     }
//     return jump
// }
// console.log(minimumJumps(arr))

// function jumparr(arr){
//   let jump = 0;
//   let pos = 0;
//   let des = 0;
//   for(let i=0;i<arr.length;i++){
//     des = Math.max(des ,arr[i]+i);
//     if(pos == i) {
//       pos = des;
//       jump++;
//     }
//   }
//   return jump;
// }
// console.log(jumparr([1, 3, 5, 8, 9, 2, 6,7,6,8,9]))



//second time test 4sum find
// https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers1732/1