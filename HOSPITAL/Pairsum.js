//pair sum equal to target or Two sum or sum of two element and return the index of those element or Pair sum

//this is brute force approach to only solve this problem any way and get the result
// let arr = [2, 4, 8, 6, 2];
// let k = 14;
// function PairSum(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == k) {
//         return[i,j];
//       }
//     }
//   }
//   return 0
// }
// console.log(PairSum(arr, k));
// TC-O(n^2)
// SC-O(1)


//herewe apply two pointer approach but it only apply on sorted array so that why first remember array must be in sorted order
//if using this output not matching that means you answer is made by unsorted array so two pointer here not work because 
// it make the array in sorted order
// function PairSum(arr, k) {
//   arr.sort((a, b) => a - b); //O(nlogn)
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {           //O(n)
//     if (arr[i] + arr[j] == k) {
//       return [i,j]
//     } else if (arr[i] + arr[j] < k) {
//       i++;
//     } else {
//       j--;
//     }
//   }
//   return 0;
// }
// console.log(PairSum(arr, k));
//TC-O(nlogn)
//SC-O(1)


// now using map we optimzie solution in o(n)   
let arr = [3, 2, 4];
let target = 6;

function TwoSum(arr, target) {
  const mp = new Map();
  for (let i = 0; i < arr.length; i++) {
      const value = target - arr[i];
      if (mp.has(value)) {
          return [mp.get(value), i];
        }
        mp.set(arr[i], i);
    }
  return 0;
}
console.log(TwoSum(arr, target));
//O(n)


