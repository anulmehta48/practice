//Rotate the array of cycalic rotation by 2 of array
let arr = [5, 7, 12, 9, 2, 4, 11, 14]; //=> [11,14,5,7,12,9,2,4]
let k = 2;

function RotatedArray(arr, i, j) {
  while (i < j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    i++;
    j--;0.
  }
  return arr;
}
console.log(RotatedArray(arr, 0, arr.length - 1)); // all the array reverse
console.log(RotatedArray(arr, 0, k - 1)); // first k element reverse
console.log(RotatedArray(arr, k, arr.length - 1)); // remaining element reverse

