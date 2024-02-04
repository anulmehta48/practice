//Group Anagrams - Leetcode-49

// let arr = ["eat","tea","tan","ate","nat","bat"]
// function groupAnagarm(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let str1 = arr[i].split("").sort().join("");
//     let group = [arr[i]];
//     for (let j = i + 1; j < arr.length; j++) {
//       let str2 = arr[j].split("").sort().join("");
//       if(str1==str2){
//         group.push(arr[j])
//         arr.splice(j, 1); 
//         j--
//       }
//     }
//     result.push(group)
//   }
//   return result;
// }
// console.log(groupAnagarm(arr));
// TC-O(n^4)

//using map frequccyt counter
let arr = ["eat","tea","tan","ate","nat","bat"]
function groupAnagarm(arr) {
  let mp=new Map()
  for(let i=0;i<arr.length;i++){
   let str=arr[i].split('').sort().join("")
   if(mp.has(str)){
    mp.get(str).push(arr[i])
   }else{
    mp.set(str,[arr[i]])
   }
  }
  return [...mp.values()]; 
  // return Array.from(mp.values())
}
console.log(groupAnagarm(arr));
// T