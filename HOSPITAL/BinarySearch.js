//Binary search
let arr = [2, 5, 8, 13, 15, 17, 20, 22, 25];
let key = 20;
function BinarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor(start + (end - start) / 2);
  while (start <= end) {
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
}
console.log(BinarySearch(arr, key));
//TC- O(logn)
//SC-O(n)