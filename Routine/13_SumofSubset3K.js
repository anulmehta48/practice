let arr=[1,3,2,8,4,7,9,5,1]
let k=3

function SumofSubset3K(arr,k){
    let maxsum=0;
    let currsum=0;
    for(let i=0;i<k;i++){
        currsum+=arr[i]
    }
    maxsum=currsum;
    for(let i=k;i<arr.length;i++){
        currsum+=arr[i];
        currsum-=arr[i-k]
        maxsum=Math.max(currsum,maxsum)
    }
    return maxsum
}
console.log(SumofSubset3K(arr,k));