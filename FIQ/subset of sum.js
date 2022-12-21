//find subset of sum that is maximum in the array
// let arr=[22,55,12,36,75,14,50,43]
// let k=3
// function Subset(arr,k){
//     let currsum=0
//     let maxSum=0;
    
//     for(let i=0;i<k;i++){
//         currsum+=arr[i]
//         for(let j=k;j<arr.length;j++){
            
//         }
//     }
// }
// console.log(Subset(arr,k))


// let arr=[1,3,2,8,4,7,9,5,1]
// let k=4

// function subsetSum(arr,k){
//     let currsum=0;
//     let maxsum=0;
//     for(let i=0;i<k;i++){
//         currsum+=arr[i]
//     }
//     maxsum=currsum
//     for(let i=k;i<arr.length;i++){
//         // console.log(i)
//         // console.log(k)
//         currsum+=arr[i]
//         currsum-=arr[i-k]
//         // console.log(currsum) 
//         maxsum=Math.max(maxsum,currsum)
//     }
//     return maxsum;
// }
// console.log(subsetSum(arr,k))

//find the vowels form given srting array and find maximum subset of vowel and print the max number of vowels
// let str=["f","u","n","c","t","i","o","n","u","p"]
// let str="functionup"
// let k=4
// function check(ch){
//     if(ch=="a"|| ch=="e"||ch=="i"||ch=="o"||ch=="u"){
//         return true
//     }
//     return false
// }
// function vowelsubset(str,k){
//     let count=0
//     let maxcount=0
//     for(let i=0;i<k;i++){
//        if(check(str[i])){
//         count++
//        }
//     }
//     maxcount=Math.max(maxcount,count)
//     for(let i=k;i<str.length;i++){
//         if(check(str[i])){
//             count++
//         }
//         if(check(str[i-k])){
//             count--
//         }
//     maxcount=Math.max(maxcount,count)
//     }
//     return maxcount;
// }
// console.log(vowelsubset(str,k))