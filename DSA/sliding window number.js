//sliding window used for find the max sum of two number from given array

// let arr=[45,25,36,1,4,26,25,9,21]
// let k=4
// function FindMax(arr,k){
//   let currSum=0;
//   let maxSum=0;
//   for(let i=0;i<k;i++){
//     currSum=currSum+arr[i];
//   }
//   maxSum=currSum;
//   for(let i=k;i<arr.length;i++){
//     currSum=currSum+arr[i];
//     currSum=currSum-arr[i-k]
//     maxSum=Math.max(maxSum,currSum)
//   }
//   return maxSum
// }
// console.log(FindMax(arr,k))



//find the vowels form given srting array and find maximum subset of vowel and print the max number of vowels
// let str=["f","u","n","c","t","i","o","n","u","p"]
let str="functionup"
let k=4
function check(ch){
    if(ch=="a"|| ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        return true
    }
    return false
}

function vowelsubset(str,k){
    let count=0
    // console.log(count)
    let maxcount=0
    for(let i=0;i<k;i++){
       if(check(str[i])){
        count++
       }
    }
    maxcount=Math.max(maxcount,count)
    for(let i=k;i<str.length;i++){
        if(check(str[i])){
            count++
        }
        if(check(str[i-k])){
            count--
        }
    maxcount=Math.max(maxcount,count)
    }
    return maxcount;
}
console.log(vowelsubset(str,k))


















// let arr1 = [1,2,2,3]
// let arr2 = [1,4,9,4]

// function same(arr1, arr2){
//    if(arr1.length != arr2.length){
//      return false;
//    }
//       let frequencyCounter1 = {}
//       let frequencyCounter2 = {}
   
//     for(let val of arr1){
//        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1
//        console.log(frequencyCounter1)
//     }
     
//      for(let val of arr2){
//        frequencyCounter2[val] = (frequencyCounter2[val] || 0)+1
//        console.log(frequencyCounter2)
//     }
    
    
//     for(let key in frequencyCounter1){
//     //   if((key **2 in frequencyCounter2)){
//     //       return false
//     //   }
       
//         if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
//           return false 
//         }
//     }
//     return true
// } 


// let result = same(arr1,arr2)
// console.log(result)


