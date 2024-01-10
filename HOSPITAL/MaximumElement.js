//find the maximum element of array
let arr = [2, 5, 8, 12, 36, 34];
function FindMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(FindMax(arr));

//find the maximum sum of any two number in array of element
function MaximumSum(arr) {
  let max = 0;
  let smax = 0;
  let sum=0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax && arr[i] != max) {
      smax = arr[i];
    }
  }
  sum=max+smax;
  return sum;
}
console.log(MaximumSum(arr));