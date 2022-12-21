let arr=[1, 3, 5, 5, 5, 5, 67, 123, 125]
let x=5
function find(arr,x){
    let start=0;
    let end=arr.length-1
    let mid;
    let firstOccr=-1;
    let lastOccr=-1;
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==x){
            firstOccr=mid
            end=mid-1
        }else if(arr[mid]<x){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    
    start=0;
    end=arr.length-1
    while(start<=end){
        mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==x){
            lastOccr=mid;
            start=mid+1
        }else if(arr[mid]<x){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return [firstOccr,lastOccr]
}
console.log(find(arr,x))


