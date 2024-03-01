//write a program of Dutch National flag or 0 1 2 segrigate elements
let arr = [1, 2, 0, 1, 2, 0, 0, 1, 2, 0];
function DucthFlag(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;
  let temp;
  while (start <= end) {
    if (arr[mid] == 0) {
      temp = arr[mid];
      arr[mid] = arr[start];
      arr[start] = temp;
      start++;
      mid++;
    } else if (arr[mid] == 1) {
      temp = arr[mid];
      arr[mid] = arr[end];
      arr[end] = temp;
      end--;
    } else {
      mid++;
    }
  }
  return arr;
}
console.log(DucthFlag(arr));
