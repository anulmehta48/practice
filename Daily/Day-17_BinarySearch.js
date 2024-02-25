//Write a binary Search alogorithm program
let arr=[2,5,7,8,10,12,14,16,18,20]
let target=10
function BinarySearch(arr,target){
    let start=0
    let end=arr.length-1
    let mid=Math.floor(start+(end-start)/2)
    while(start<=end){
        if(arr[mid]==target){
            return mid;
        }else if(arr[mid]<target){
            start=mid+41;
        }else{
            end=mid-1
        }
        mid=Math.floor(start+(end-start)/2)
    }
    return -1

}
console.log(BinarySearch(arr,target));