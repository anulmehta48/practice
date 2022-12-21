//find the maxsum of kth subset of the array :-
//the brute force in can many times itrate the element kth time for subset sum but this is very lengthy proocess 
//so this is solve by the Sliding window method appoarach:-

let arr=[3,2,5,9,4,2,7,5,12]
let k=3;
function Slidingsum(arr,k){
    let currSum=0;
    let maxsum=0;

    for(let i=0;i<k;i++){
        currSum+=arr[i]
    }
    maxsum=currSum;
    for(let i=k;i<arr.length;i++){
        currSum+=arr[i];
        currSum-=arr[i-k]
        maxsum=Math.max(currSum,maxsum)
    }
    return maxsum
}
console.log(Slidingsum(arr,k))