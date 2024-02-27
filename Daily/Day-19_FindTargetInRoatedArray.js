//write a program to find target element in array.you gave given roated sorted array

let arr=[5,6,7,1,2,3,4]
let target=3
function RoatedSortedArray(arr,target){
    let start=0;
    let end=arr.length-1;
    let mid;
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==target){
            return mid
        }else if(arr[mid]>=arr[start]){
            if(target<arr[mid]&& target>=arr[start]){
                end=mid-1
            }else{
                start=mid+1
            }
        }else if(arr[mid]<=arr[end]){
            if(target>arr[mid]&& target<=arr[end]){
                start=mid+1
            }else{
                end=mid-1
            }
        }
    }
    return -1
}
console.log(RoatedSortedArray(arr,target));