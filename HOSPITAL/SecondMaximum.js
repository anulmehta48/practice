let arr = [2, 5, 8, 12, 36, 34];

function secondMax(arr) {
  let max = 0;
  let smax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax && arr[i] != max) {
      smax = arr[i];
    }
  }
  return [max, smax];
}
console.log(secondMax(arr));
