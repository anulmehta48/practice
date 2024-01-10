let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9];

function MergeTwoArray(arr1, arr2) {
  let newArray = new Array();
  let i = 0;
  let j = 0;
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

console.log(MergeTwoArray(arr1, arr2));
