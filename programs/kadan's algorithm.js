//Kadan's algorithms this is very imprtaion algorithms
//find the contigious subarray of largest sum of subarray of given array
let arr=[-2,1,-3,4,-1,2,1,-5,4]
function kadanAlgo(arr){
    let sum=0;
    let maxsum=arr[0]
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        maxsum=Math.max(maxsum,sum)
        if(sum<0){
            sum=0
        }
    }
    return maxsum
}
console.log(kadanAlgo(arr))