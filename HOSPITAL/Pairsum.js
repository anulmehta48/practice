let arr = [2, 4, 8, 6, 2];
let k = 14;

// function PairSum(arr, k) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == k) {
//         return 1;
//       }
//     }
//   }
//   return 0
// }
// console.log(PairSum(arr, k));
//TC-O(n^2)
//SC-O(1)

function PairSum(arr, k) {
  arr.sort((a, b) => a - b); //O(nlogn)
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {           //O(n)
    if (arr[i] + arr[j] == k) {
      return 1;
    } else if (arr[i] + arr[j] < k) {
      i++;
    } else {
      j--;
    }
  }
  return 0;
}
console.log(PairSum(arr, k));
//TC-O(nlogn)
//SC-O(1)


