// let arr1 = [7, 8, 9, 10];
// let arr2 = [100, 49, 81, 64];

// function checkSqure(arr1,arr2){
//     if(arr1.length != arr2.length){
//         return false
//     }
//     for(let i=0;i<arr1.length;i++){
//         let correctIndex=arr2.indexOf(arr1[i]**2)
//         if(correctIndex==-1){
//             return false
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true
// }
// console.log(checkSqure(arr1,arr2));
// TC- O(n^2)
// SC- O(1)

// ****Solve in O(n) TC using Frequency counter approach *****

// let arr1 = [7, 8, 9, 10];
// let arr2 = [100, 49, 81, 64];

// function checkSqure(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   }

//   let frequency1 = {};
//   let frequency2 = {};

//   for (let i of arr1) {
//     if (frequency1[i]) {
//       frequency1[i]++;
//     } else {
//       frequency1[i] = 1;
//     }
//   }
//   for (let i of arr2) {
//     if (frequency2[i]) {
//       frequency2[i]++;
//     } else {
//       frequency2[i] = 1;
//     }
//   }
//   console.log(frequency1);
//   console.log(frequency2);
//   for (let key in frequency1) {
//     if (frequency1[key] != frequency2[key ** 2]) {
//       return false;
//     }
//     if (frequency2[key ** 2] != frequency1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkSqure(arr1, arr2));

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

//   for(let [key,value] of mp1){
//     if(!mp2.has(key**2) || mp2.get(key**2)!==value){
//         return false
//     }
//   }
//   return true
// }
// console.log(checkSquare(arr1, arr2));
//TC- O(n)
//SC- O(1)

// console.log(console.log("test"));


