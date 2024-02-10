//find the two sum of element that is closed to the target values
let arr=[4,7,10,18,22,30]
let target=50;

function closetSum(arr,target){
    let i=0;
    let j=arr.length-1;
    let diff=Number.MAX_VALUE;
    let a;
    let b;
    while(i<j){
        let pairsum=arr[i]+arr[j]
        let currdiff=Math.abs(target-pairsum)
        if(currdiff<diff){
            diff=currdiff;
            a=arr[i];
            b=arr[j]
        }
        if(arr[i]+arr[j]<target){ji. 
            i++
        }else{
            j--
        }
    }
    return [a,b]
}
console.log(closetSum(arr,target));