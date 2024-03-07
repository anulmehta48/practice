//write a progrm of mergesort

let arr1 = [6, 7, 8, 9, 10];
let arr2 = [1, 2, 3, 4, 5];

function MergeSort(arr1, arr2) {
  let i = 0;
  let j = 0;
  let newArray = new Array();
  let index = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray[index] = arr1[i];
      index++;
      i++;
    } else {
      newArray[index] = arr2[j];
      index++;
      j++;
    }
  }
  while (i < arr1.length) {
    newArray[index] = arr1[i];
    index++;
    i++;
  }
  while (j < arr2.length) {
    newArray[index] = arr2[j];
    index++;
    j++;
  }
  return newArray;
}
console.log(MergeSort(arr1, arr2));
