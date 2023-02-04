// find the duplicate element are present or not 
// using itration and sort using for loop
//here is TC is O(nlogn)
// let nums=[1,2,5,1,5,3,6]
// function duplicate(nums) {
//     nums.sort()
//     // console.log(nums)
//     for(let i=0;i<nums.length;i++){
//        if(nums[i]==nums[i+1]) {
//            return true
//        }
//     }
//     return false
// };
// console.log(duplicate(nums))



// find the duplicate elememt and print them 
// using for loop ;
// here is TC is O(nlogn)
let nums=[1,2,5,1,5,3,6]
function duplicate(nums) {
    nums.sort()
    // console.log(nums)
    let result=[]
    for(let i=0;i<nums.length;i++){
       if(nums[i]==nums[i+1]) {
           result.push(nums[i])
        //    return true
       }
    }
    return result
};
console.log(duplicate(nums))


//now we can solve by frequueny counter method 
//here is TC is O(n)
// let nums=[1,2,5,1,5,3,6]
// function duplicate(nums) {
//     let frq={}
//     let result=[]
//     for(let val of nums){
//         if(frq[val]){
//             frq[val]++
//         }else{
//             frq[val]=1
//         }
//     }
//     // console.log(frq)
//     for(let val of nums){
//         if(frq[val]==2){
//             result.push(val)
//             frq[val]--
//         }
//     }
//     // console.log(result)
//     // console.log(frq)
//     return result
// };
// console.log(duplicate(nums))


//but we want to solve this in time coplexity is O(n) space complexity is O(1) Constant time 
//we have first length of array is n
// second we have no. are in range [1,n]
// third we have each no is appear 1 times or 2 times 
// fouth we have all no. are postive numbers 
//here is Time is O(n)



// let nums=[1,2,5,1,5,3,6]
// function duplicate(nums) {
//     let result=[]
//     for(let i=0;i<nums.length;i++){
//         let x=Math.abs(nums[i])
//         let index=x-1
//         if(nums[index]<0){
//             result.push(x)
//         }else{
//             nums[index]=nums[index]*-1
//         }
//     }
//     return result;
// };
// console.log(duplicate(nums))
