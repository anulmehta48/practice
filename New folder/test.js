let string=["bhola","bhopal","bhmi"]

// let longPrefix = function(string) {
//     if(string.length == 0) {
//         return "";
//     }
//     let str = string[0];
//     for (let i of string) {
//         while (i.indexOf(str) != 0) {
//             str = str.substring(0, str.length - 1);    
//             if (str == "")
//                 break;
//         }
//     }
//     // console.log(str)
//     return str;
// };
// console.log(longPrefix(string))

// let arr=["bhola","bhopal","bhoomi"]
// let longPrefix = function(arr) {
//     let ans ="";
//     for(let i=0;i<arr[0].length;i++){
//         let char=arr[0][i]
//         let match=true;
//         for(let j=1;j<arr.length;j++){
//             if(arr[j].length<i ||char !=arr[j][i]){
//                 match =false;
//                 break;
//             }
//         }
//         if(match==false){
//             break;
//         }else{
//             ans+=char
//         }
//     }
//     return ans
// }
// console.log(longPrefix(arr))

// let arr=["bhola","bhopal","bhoomi"]
// let longPrefix = function(arr) {
//     if(arr.length==0) return "";
//     for(let i=0;i<arr[0].length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[0][i]!=arr[j][i]){
//                 return arr[0].slice(0,i)
//             }
//         }
//     }
// }
// console.log(longPrefix(arr))