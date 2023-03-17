//reverse the array without any temp variable ;
// let arr=[5,9,3,1,4,5,6]
// function reversse(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--;
//     }
//     return arr
// }
// console.log(reversse(arr))


//revser uisng temp variable-
// let arr = [1, 36, 8, 7, 2, 6]
// function reverseString(arr) {
//     let start = 0;
//     let end = arr.length-1;
//     while (start <= end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
//     return arr
// };
// console.log(reverseString(arr))


//using destructuring swap the alternative element of array-
let arr = [2, 1, 4, 5, 6, 7, 8, 11]
function swapAlternate(arr) {
  [arr[0],arr[arr.length-1]]=[arr[arr.length-1],arr[0]]
  return arr
}
console.log(swapAlternate(arr))

//uinsg destructing method
// let a=10;
// let b=20;
// [a,b]=[b,a];
// console.log(a,b)


// Using Bitwise XOR operator
// let a=10;
// let b=20;
// a=a^b
// b=a^b
// a=a^b
// console.log(a,b)


// let arr = [2, 1, 4, 5, 6, 7, 8, 11]
// function swapAlternate(arr) {
   
// }
// console.log(swapAlternate(arr))



// s = ["h", "e", "l", "l", "o"]
// function reverseArray(s) {
//     let newArray = []
//     for (let i = s.length - 1; i >= 0; i--) {
//         newArray.push(s[i])
//     }
//     return newArray
// }
// console.log(reverseArray(s))

// let s= [1,36,8,7,2,6]
// function reverse(a){
//     var output = [];
//     for (var i =-2; i<= s.length; i++){
//         output.push(s.pop());
//         // console.log(output)
//     }

//     return output;
// }
// console.log(reverse(s));





// let s = [1, 36, 8, 7, 2, 6]
// function reverseString(s) {
//     let arr=[...s]
//     let temp=0
//     for(let i=arr.length-1;i>=0;i--){
//         s[temp]=arr[i]
//         temp++
//     }
//     return s
// };
// console.log(reverseString(s))

//revere the first 3 element of the array 
// let s = [1, 36, 8, 7, 2, 6]
// let k=3
// let n=s.length
// function reverseString(s,k,n) {
//     for(let i=0;i<n;i+=k){
//         let left=i
//         let right=Math.min(i+k,n-1)
//         let temp=0

//         while(left<right){
//             temp=s[left]
//             s[left]=s[right]
//             s[right]=temp
//             left+=1
//             right-=1
//         }
//         return s

//     }
// };
// console.log(reverseString(s,n,k))





