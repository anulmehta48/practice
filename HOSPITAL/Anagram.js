// let str1="cinema"
// let str2="iceman"

// Brute Force
// function AreAnagram(str1,str2){
//     if(str1.length!=str2.length){
//         return false
//     }
//     string1=str1.split("")
//     string2=str2.split("")
//     string1.sort()
//     string2.sort()
//     for(let i=0;i<string1.length;i++){
//         if(string1[i]!=string2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(AreAnagram(str1,str2));
//TC-O(nlogn)
//SC-O(n)


//**Best Way to solve this using frequency counter method **/
let str1 = "cinema";
let str2 = "iceman";
function AreAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  let frq1 = {};
  let frq2 = {};
  for (let i = 0; i < str1.length; i++) {
    if (frq1[str1[i]]) {
      frq1[str1[i]]++;
    } else {
      frq1[str1[i]] = 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (frq2[str2[i]]) {
      frq2[str2[i]]++;
    } else {
      frq2[str2[i]] = 1;
    }
  }
  for (let key in frq1) {
    if (frq1[key] != frq2[key]) {
      return false;
    }
    if (frq2[key] != frq1[key]) {
      return false;
    }
  }
  return true
}
console.log(AreAnagram(str1, str2));
//TC-O(n)
//SC-O(n)