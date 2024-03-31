// let arr1 = [4, 2, 8, 5, 3];
// let arr2 = [16,4,64,25,9];

//brute force apporach 
//In this Both array elements of squares are having at the same indexs
// function checkSquare(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] ** 2 !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSquare(arr1, arr2));
// TC - O(n)
// SC - O(n)
//

// But here both array have not the same indexes of elements
let arr1 = [4, 2, 8, 5, 3,7];
let arr2 = [25, 64, 9, 4, 16,49];

function checkSquare(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  for(let i=0;i<arr1.length;i++){
    let charIndex=arr2.indexOf(arr1[i]**2)
    if(charIndex ==-1){
        return false
    }
    arr2.splice(charIndex,1)
  }
  return true
}
console.log(checkSquare(arr1, arr2));
//TC-O(n^2)
//SC-O(n)

// let arr1 = [4, 2, 8, 5, 3];
// let arr2 = [26, 66, 10, 5, 17];
// function checkSquare(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return true
//     }
//     for(let i=0;i<arr1.length;i++){
//         let square=arr1[i]*arr1[i]
//         let found=false
//         for(let i=0;i<arr2.length;i++){
//             if(arr2[i]==square){
//                 found=true
//                 break;
//             }
//         }
//         if(found==false){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkSquare(arr1,arr2))
//TC-O(n^2)
//SC-O(n)

// let arr1 = [4, 2, 8, 5, 3];
// let arr2 = [25, 64, 4, 9, 16];

// function checkSquare(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   let freqCounter1 = {};
//   let freqCounter2 = {};
//   for (let i of arr1) {
//     if (freqCounter1[i]) {
//       freqCounter1[i]++;
//     } else {
//       freqCounter1[i] = 1;
//     }
//   }
//   for (let i of arr2) {
//     if (freqCounter2[i]) {
//       freqCounter2[i]++;
//     } else {
//       freqCounter2[i] = 1;
//     }
//   }
//   for (let key in freqCounter1) {
//     if (freqCounter1[key] !== freqCounter2[key ** 2]) {
//       return false;
//     }
//     if (freqCounter2[key ** 2] !== freqCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSquare(arr1, arr2));
//here TC-O(n)
//here SC-O(n)

// ***** way to solved this using Frequency Counter *****

// let arr1 = [4, 2, 8, 5, 3];
// let arr2 = [25, 64, 4, 9, 16];

// function checkSquareI(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }
//   let freqCounter1 = {};
//   let freqCounter2 = {};
//   for (let i = 0; i < arr1.length; i++) {
//     if (freqCounter1[arr1[i]]) {
//       freqCounter1[arr1[i]]++;
//     } else {
//       freqCounter1[arr1[i]] = 1;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (freqCounter2[arr2[i]]) {
//       freqCounter2[arr2[i]]++;
//     } else {
//       freqCounter2[arr2[i]] = 1;
//     }
//   }
//   for (let key in freqCounter1) {
//     if (freqCounter1[key] != freqCounter2[key ** 2]) {
//       return false;
//     }
//     if (freqCounter2[key ** 2 != freqCounter1[key]]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSquareI(arr1, arr2));


// ***** One More way to solved this using Map *****

// let arr1 = [7, 8, 9, 10];
// let arr2 = [100, 49, 81, 64];

// function checkSquare(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   let mp1 = new Map();
//   for (let i = 0; i < arr1.length; i++) {
//     let x = arr1[i];
//     if (mp1.has(x)) {
//       mp1.set(x, mp1.get(x) + 1);
//     } else {
//       mp1.set(x, 1);
//     }
//   }
//   let mp2 = new Map();
//   for (let i = 0; i < arr2.length; i++) {
//     let x = arr2[i];
//     if (mp2.has(x)) {
//       mp2.set(x, mp2.get(x) + 1);
//     } else {
//       mp2.set(x, 1);
//     }
//   }
//   console.log(mp1);
//   console.log(mp2);

//   for (let [key, value] of mp1) {
//     if (!mp2.has(key ** 2) || mp2.get(key ** 2) !== value) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSquare(arr1, arr2));
// TC - O(n);
// SC - O(1);
// /


