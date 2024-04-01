// Find the maximum sum any two element  or finding the largest and second largest element of arra
let arr=[2,5,8,25,4,36]

function MaxPairSum(arr){
    let max=0;
    let secondMax=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max;
            max=arr[i]
        }else if(arr[i]>secondMax && arr[i]!=max){
            secondMax=arr[i]
        }
    }
    let sum=max+secondMax
    return sum
}
console.log(MaxPairSum(arr));