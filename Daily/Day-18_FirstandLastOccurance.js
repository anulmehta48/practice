//write a program to find first and last occurence of element from an array
let arr=[1,2,3,4,4,4,4,5,6,7,8,9,10]
let target=4
function FindOccurance(arr,target){
    let start=0;
    let end=arr.length-1;
    let mid;
    let firstOcc=-1
    let lastOcc=-1

    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==target){
            firstOcc=mid;
            end=mid-1
        }else if(arr[mid]<target){
            start=mid+1
        }else{
            end=mid-1
        }
    }

    start=0;
    end=arr.length-1;
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==target){
            lastOcc=mid
            start=mid+1
        }else if(arr[mid]<target){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return [firstOcc,lastOcc]
}
console.log(FindOccurance(arr,target));