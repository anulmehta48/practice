// This is program of checking anagram 
// In this we have string so string does not have sort method so first we have to use split and convert into in array
// then we have sort the array because of array have sort method and then using join again conveted into an string 
// then apply loop and compare both of string element and return the results  
// let str1 = "anul";
// let str2 = "luna";
// let s1=str1.split("").sort().join("");
// let s2=str1.split("").sort().join("");
// str2.split("").sort().join("");
// function AnagramChcek(s1, s2) {
//   if (s1.length !== s2.length) {
//     return false;
//   }
//   for (let i = 0; i < s1.length; i++) {
//     if(s1[i]!==s2[i]){
//         return false
//     }
//   }
//   return true
// }
// console.log(AnagramChcek(s1, s2));


// This time we have given already array so we have apply sort method directly 
// let arr1=["a","n","u","l"]
// let arr2=["l","u","n","a"]
// function AnagramChcek(arr1,arr2){
//     if(arr1.length!==arr2.length){
//         return false
//     }
//     arr1.sort()
//     arr2.sort()
//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i]!==arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(AnagramChcek(arr1,arr2));


// //solve using frquency couner method
// let str1="anul"
// let str2="luna"

// function AnagramChcek(str1,str2){
//     if(str1.length!==str2.length){
//         return false
//     }
//     let frq1={}
//     let frq2={}
//     for(let i=0;i<str1.length;i++){
//         if(frq1[str1[i]]){
//             frq1[str1[i]]++
//         }else{
//             frq1[str1[i]]=1
//         }
//     }
//     for(let i=0;i<str2.length;i++){
//         if(frq2[str2[i]]){
//             frq2[str2[i]]++
//         }else{
//             frq2[str2[i]]=1
//         }
//     }

//     for(let key in frq1){
//         if(frq1[key]!==frq2[key]){
//             return false
//         }
//         if(frq2[key]!==frq1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(AnagramChcek(str1,str2));


//solve using frquency couner method
// let str1=["anul","mohit","ravi","rohan"]
// let str2=["luna","tihom","ivar","nahor"]

// function AnagramChcek(str1,str2){
//     if(str1.length!==str2.length){
//         return false
//     }
//     let frq1={}
//     let frq2={}
//     for(let i=0;i<str1.length;i++){
//         if(frq1[str1[i]]){
//             frq1[str1[i]]++
//         }else{
//             frq1[str1[i]]=1
//         }
//     }
//     for(let i=0;i<str2.length;i++){
//         if(frq2[str2[i]]){
//             frq2[str2[i]]++
//         }else{
//             frq2[str2[i]]=1
//         }
//     }
//     console.log(frq1);
//     console.log(frq2);
//     for(let key in frq1){
//         if(frq1[key]!==frq2[key]){
//             return false
//         }
//         if(frq2[key]!==frq1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(AnagramChcek(str1.join(""),str2.join("")));



// /BOTH ARE SAME
//solve using frquency couner method
// let str1 = ["anul", "mohit", "ravi", "rohan"];
// let str2 = ["luna", "tihom", "ivar", "nahor"];

// function AnagramChcek(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   let frq1 = {};
//   let frq2 = {};
//   const populateFrequncy = (str, frq) => {
//     for (let char of str) {
//       frq[char] = (frq[char] || 0) + 1;
//     }
//   };
//   populateFrequncy(str1, frq1);
//   populateFrequncy(str2, frq2);
//   console.log(frq1);
//   console.log(frq2);

//   for (let key in frq1) {
//     if (frq1[key] !== frq2[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(AnagramChcek(str1.join(""), str2.join("")));