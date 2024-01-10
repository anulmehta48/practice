let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let start = 0;
let end = arr.length - 1;

function MergeSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let mid = Math.floor(start + (end - start) / 2);
  MergeSort(arr, start, mid);
  MergeSort(arr, mid + 1, end);
  Merge(arr, start, mid, end);
  return arr;
}

function Merge(arr, start, mid, end) {
  let newArray = new Array();
  let index1 = start;
  let index2 = mid + 1;
  let newindex = 0;

  while (index1 <= mid && index2 <= end) {
    if (arr[index1] < arr[index2]) {
      newArray[newindex] = arr[index1];
      newindex++;
      index1++;
    } else {
      newArray[newindex] = arr[index2];
      newindex++;
      index2++;
    }
  }
  while (index1 <= mid) {
    newArray[newindex] = arr[index1];
    newindex++;
    index1++;
  }
  while (index2 <= end) {
    newArray[newindex] = arr[index2];
    newindex++;
    index2++;
  }

  let j = start;
  for (let i = 0; i < newArray.length; i++) {
    arr[j] = newArray[i];
    j++;
  }
}
console.log(MergeSort(arr, start, end));
