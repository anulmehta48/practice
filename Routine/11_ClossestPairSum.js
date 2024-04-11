//using two pointer appoaches when array in sorted order
let arr=[10,22,28,29,30,40]
let x=54

function ClosesetPairSum(arr,x){
    let i=0;
    let j=arr.length-1;
    let diff=Number.MAX_VALUE;
    let a;
    let b;
    while(i<j){
        let PairSum=arr[i]+arr[j]
        let currDiff=Math.abs(PairSum-x)
        if(currDiff<diff){
            diff=currDiff
            a=arr[i];
            b=arr[j];
        }
        if(arr[i]+arr[j]<x){
            i++
        }else{
            j--
        }
    }
    return [a,b]
}
console.log(ClosesetPairSum(arr,x));
//TC-O(n)
//SC=O(1)