let arr=[10,22,28,29,30,40]
let k=54

function PairsumClosess(arr,k){
    let i=0;
    let j=arr.length-1;
    let diff=Number.MAX_VALUE
    let a;
    let b;
    while(i<j){
        let PairSum=arr[i]+arr[j]
        let currDiff=Math.abs(PairSum-k)
        if(currDiff<diff){
            diff=currDiff
            a=arr[i]
            b=arr[j]
        }
        if(arr[i]+arr[j]<k){
            i++
        }else{
            j--
        }
    }
    return [a,b]
}
console.log(PairsumClosess(arr,k));
//TC-O(n)
//SC-O(1)