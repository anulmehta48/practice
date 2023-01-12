//merge sort 

let arr=[2,5,4,1,4,5,9]
let start=0
let end=arr.length-1

function mergesort(arr,start,end){
    let mid=Math.floor(start+(end-start)/2)
    if(start>=end) return;

    mergesort(arr,start,mid)
    mergesort(arr,mid+1,end)
    merge(arr,start,mid,end)
    return arr
}


function merge(arr,start,mid,end){
    let newArray=new Array()
    let index1=start;
    let index2=mid+1;
    let newArrayIndex=0;

    while(index1 <=mid && index2 <=end){
        if(arr[index1]<=arr[index2]){
            newArray[newArrayIndex]=arr[index1]
            newArrayIndex++;
            index1++
        }else{
            newArray[newArrayIndex]=arr[index2]
            newArrayIndex++;
            index2++
        }
    }

    while(index1<=mid){
        newArray[newArrayIndex]=arr[index1]
            newArrayIndex++;
            index1++
    }

    while(index2<=end){
        newArray[newArrayIndex]=arr[index2]
            newArrayIndex++;
            index2++
    }

        
    let j=start;
    for(let i=0;i<newArray.length;i++){
        arr[j]=newArray[i]
        j++
    }

}

console.log(mergesort(arr,start,end))



