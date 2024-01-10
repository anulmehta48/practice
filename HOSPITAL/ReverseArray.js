//Swap or Reverse the Array
let arr = [12, 4, 6, 7, 14, 3, 9, 10];
// function ReverseArray(arr) {
//   let i = 0;
//   let j = arr.length - 1;
//   while(i<j){
//     let temp=arr[i]
//     arr[i]=arr[j]
//     arr[j]=temp
//     i++;
//     j--
//   }
//   return arr

// }
// console.log(ReverseArray(arr));

//Swap or Reverse the Array without taken third variable

function ReverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
    i++;
    j--;
  }
  return arr;
}
console.log(ReverseArray(arr));
