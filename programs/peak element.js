//find feak element;
let arr=[1,2,3,4,1];
function peakelement(arr){
    let start=0;
    let end=arr.length-1;
    let mid;

    while(start<end){ //not use <= only use <
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]<arr[mid+1]){
            start=mid+1
        }else{
            end=mid
        }
    }
    return start
}
console.log(peakelement(arr))
//TC : O(logn)
//SC: O(1)