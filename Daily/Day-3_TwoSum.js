//find the two element sum that is equal to the target and print the index of that element or if not then return false
// let arr=[2,3,4,7,8]
// let target=11

// function twoSum(arr,target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 return [i,j]
//             }
//         }
//     }
//     return false
// }
// console.log(twoSum(arr,target));
//TC-O(n^2)

// let arr=[2,3,4,7,8]
// let target=11
// using two pointer approach but it is only apply on sorted array or incresing order
//and also we have sorted array so we can use it
// function twoSum(arr,target){
//     let i=0;
//     let j=arr.length-1
//     while(i<j){
//         if(arr[i]+arr[j]==target){
//             return [i,j]
//         }else if(arr[i]+arr[j]<target){
//             i++
//         }else{
//             j--
//         }
//     }
//     return false
// }
// console.log(twoSum(arr,target));
// TC-O(n)

// let arr = [2, 8, 6, 4, 3, 5];
// let target = 11;
// // using two pointer approach but it is only apply on sorted array or incresing order
// //and  we do not have sorted array so we can use it in a diffrent way using map
// function twoSum(arr, target) {
//   let mp = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let value = target - arr[i];
//     if (mp.has(value)) {
//       return [mp.get(value), i];
//     } else {
//       mp.set(arr[i], i);
//     }
//   }
//   return 0;
// }
// console.log(twoSum(arr, target));
// TC-O(n)


let arr = [2, 8, 6, 4, 3, 5];
let target = 11;
// using two pointer approach but it is only apply on sorted array or incresing order
//and  we do not have sorted array so we can use it in a diffrent way using map
function twoSum(arr, target) {
  let mp = new Map();
  let result=[]
  for (let i = 0; i < arr.length; i++) {
    let value = target - arr[i];
    if (mp.has(value)) {
      result.push([mp.get(value), i])
    } else {
      mp.set(arr[i], i);
    }
  }
  return result
}
console.log(twoSum(arr, target));
// TC-O(n)

