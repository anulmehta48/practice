// let isPalindrome  = function(S){
//     let start = 0;
//     let end = S.length-1;
//     if(S.length == 1 ){
//         return 1
//     }
//     while(start < end){
//         if(S[start] == S[end]){
//             start++;
//             end--;
//         }else {
//             return false;  
//         }
//     }
//     return true;
// }
// console.log(isPalindrome([1,2,2,2,1]))


// let arr=[1,2,2,2,1];
// function checkpalindrom(arr){
//     let i=0;
//     let j=arr.length-1;

//     if(arr.length ==1) return 1;
//     while(i<=j){
//         if(arr[i]==arr[j]){
//             i++;
//             j--
//         }else{
//             return false
//         }
//     }
//     return true
// }
// console.log(checkpalindrom(arr))



let arr=[1221];
function isPalindrome(arr){
    if(arr.length == 0) return 1;
    let number=arr;
    let reverse=0;
    while(number>0){
        reverse=reverse*10+number%10;
        // console.log(reverse)
        number=Math.floor(number/10)
        console.log(number)
    }
    return arr=reverse
}
console.log(isPalindrome(arr))