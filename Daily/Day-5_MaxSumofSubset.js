//find the sum of subset of array where k is subset and find the maximum subset of array

let arr=[3,5,8,25,50,72]
let k=4
function Maxsumsubset(arr,k){
    let currsum=0;
    let maxsum=0;
    for(let i=0;i,i<k;i++){
        currsum=currsum+arr[i]
    }
    maxsum=currsum;
    for(let i=k;i<arr.length;i++){
        currsum=currsum+arr[i]
        currsum=currsum-arr[i-k]
        maxsum=Math.max(maxsum,currsum)
    }
    return maxsum
}
console.log(Maxsumsubset(arr,k));