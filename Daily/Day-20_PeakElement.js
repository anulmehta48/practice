// write a program to find peak element of array

let arr=[1,2,3,1,]
function PeakElement(arr){
    let start=0;
    let end =arr.length-1;
    let mid;
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(start==end){
            return start
        }else if(arr[mid]<arr[mid+1]){
            start=mid+1
        }else{
            end=mid
        }
    }
    return mid
}
console.log(PeakElement(arr));