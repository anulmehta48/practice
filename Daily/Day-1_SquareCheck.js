// let arr1=[2,5,6,8]
// let arr2=[4,25,36,64]

//if array is given in same values in incresing order
// function checkSquare(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]**2!==arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2));
//Tc-O(n)

//if order is mixed
// let arr1=[2,5,6,8]
// let arr2=[25,64,36,4]

// function checkSquare(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         let charIndex=arr2.indexOf(arr1[i]**2)
//         if(charIndex==-1){
//             return false
//         }
//         if(charIndex){
//             arr2.splice(charIndex,1)
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2));
// TC-O(n^2)

//using frequency counter apporoach
// let arr1 = [2, 5, 6, 8];
// let arr2 = [4, 25, 36, 64];

// function checkSquare(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frq1 = {};
//   let frq2 = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (frq1[arr1[i]]) {
//       frq1[arr1[i]]++;
//     } else {
//       frq1[arr1[i]] = 1;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (frq2[arr2[i]]) {
//       frq2[arr2[i]]++;
//     } else {
//       frq2[arr2[i]] = 1;
//     }
//   }
// we are checking frq1[key] that is 2 of value is 1 and this 2 value of square that is 4 now we are checking in frq2 in 4 is present or not
// and also we checking the value of 4 that is 1 or not if it is not equal then false else true
// and in second if condition we cheking for frq2 inside or vice versa
//   for (let key in frq1) {
//     if (frq1[key] !== frq2[key ** 2]) {
//       return false;
//     }
//     if (frq2[key ** 2] !== frq1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSquare(arr1, arr2));
// TC-O(n)

// if order is mixed
let arr1 = [2, 5, 6, 8];
let arr2 = [25, 64, 36, 4];

function checkSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let mp1 = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (mp1.has(arr1[i])) {
      mp1.set(arr1[i], mp.get(arr1[i]) + 1);
    } else {
      mp1.set(arr1[i], 1);
    }
  }
  let mp2 = new Map();
  for (let i = 0; i < arr2.length; i++) {
    if (mp2.has(arr2[i])) {
      mp2.set(arr2[i], mp.get(arr2[i]) + 1);
    } else {
      mp2.set(arr2[i], 1);
    }
  }
  //here we are checking if mp2 has our mp1 of key of square that is 4 is present in mp2 or not and also we checig
  //if present then also checking the  value of mp1 square in mp2 has or not.
  for (let [key, value] of mp1) {
    if (mp2.has(key ** 2) == false || mp2.get(key ** 2) !== value) {
      return false;
    }
  }
  return true;
}
console.log(checkSquare(arr1, arr2));
// TC-O(n)
