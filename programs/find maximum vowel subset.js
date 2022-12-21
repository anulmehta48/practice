//find the maximu vowel subset of kth element in the array 
//this is solve by using sliding windwo method
// let str=["f","u","n","c","t","i","o","n","u","p"]
// let k=4;

// function check(ch){
//     if(ch=="a"|| ch=="e"||ch=="i"||ch=="o"||ch=="u"){
//         return true;
//     }
//     return false;
// }
// function slidingvowel(str,k){
//     let count=0
//     let maxcount=0;
//     for(let i=0;i<k;i++){
//         if(check(str[i])){
//             count++
//         }
//     }
//     maxcount=Math.max(maxcount,count)
//     for(let i=k;i<str.length;i++){
//         if(check(str[i])){
//             count++
//         }
//         if(check(str[i-k])){
//             count--
//         }
//         maxcount=Math.max(maxcount,count)
//     }
//     return maxcount
// }
// console.log(slidingvowel(str,k))


// let word="cuaieuouac"
// var check=function(ch){
//     if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
//         return true
//     }
//     return false
// }
// var countVowelSubstrings = function(word) {
//     let count=0;
//     for(let i=0;i<word.length;i++){
//         if(check[word[i]]){
//             count++
//         }
//     }
//     return count
// };
// console.log(countVowelSubstrings(word))