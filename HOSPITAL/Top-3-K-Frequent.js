// 347. Top K Frequent Elements 
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
// Example 1:
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

let arr=[1,1,1,2,2,3]
let k=2
function Top3kFrequent(arr,k){
    let mp=new Map()
    for(let i=0;i<arr.length;i++){
        if(mp.has(arr[i])){
            mp.set(arr[i],mp.get(arr[i])+1)
        }else{
            mp.set(arr[i],1)
        }
    }
    console.log(mp);
    let mpsort=[...mp.entries()].sort((a,b)=>a[1]-b[1])
    console.log(mpsort);
    let result = mpsort.slice(0, k).map(entry => entry[0]);
    return result
}
console.log(Top3kFrequent(arr,k));