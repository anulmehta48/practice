//Bubble sort

let arr = [8, 4, 2, 13, 10, 6, 9, 7];
function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(BubbleSort(arr));
//TC-O(n^2)
//SC-O(1)


