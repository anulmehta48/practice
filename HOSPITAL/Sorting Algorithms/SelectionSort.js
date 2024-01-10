//selection sort is first sorting algorithm
//What=> In this we have diffrent diffrent rounds or passed in which we take first min index then iterate all the array
//      and select the smallest element then swap with our min index value and so on untill our array has been sorted.

//process=> 1.we loop from 0 to length-1 of array
//          2.we take minIndex of first index of arrayaa that minIndex=i
//          3.we loop inside 0 to length of arry and check if any other values are small or not if yes then makes it minIndex value;
//          4.out of inside loop we swap minIndex value to our first index value that is arr[i] and then return arr

let arr = [5,7,2,9,3,4,10];
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(selectionSort(arr));
//TC-O(n^2)
//Sc-O(1)
