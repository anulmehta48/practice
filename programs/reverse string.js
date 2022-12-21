//this is first way
// s = ["h", "e", "l", "l", "o"]
// function reverseArray(s) {
//     let newArray = []
//     for (let i = s.length - 1; i >= 0; i--) {
//         newArray.push(s[i])
//     }
//     return newArray
// }
// console.log(reverseArray(s))


//this two pointer apporach only works on array of string like-["anul","mehta"] or ["K","O","T","A"]
//this is second way 
// s = ["h", "e", "l", "l", "o"]
// function reverseArray(s) {
//   let i=0;
//   let j=s.length-1;
//   while(i<j){
//    let temp=s[i]
//    s[i]=s[j]
//    s[j]=temp
//     i++;
//     j--
//   }
//   return s
// }
// console.log(reverseArray(s))


//if you have given string like - "somthing" and print output like gnihtmos then you have to use like this 
//**** very very impotant */
// let str="anul"
// let s=''
// for(let i=str.length-1;i>=0;i--){
//     s+=str[i]
// }
// console.log(s)


// let str = ["anul","mehta"]
// function reverse(str) {
//     let i = 0;
//     let j = str.length - 1;
//     while (i < j) {
//         let temp = str[i];
//         str[i] = str[j];
//         str[j] = temp;
//         i++;
//         j--
//     }
//     return str
// }
// console.log(reverse(str))



//but if you wnat to do this using two pointer then use it but in this many inbulit function used here
// let str="anul"
// function reverse(str){ 
// let strArr = str.split('');
//   let start = 0;
//   let end = str.length - 1;

//   while (start <= end) {
//     const temp = strArr[start];
//     strArr[start] = strArr[end];
//     strArr[end] = temp;
//     start++;
//     end--;
//   }
//   return strArr.join('');
// }
// console.log(reverse(str))