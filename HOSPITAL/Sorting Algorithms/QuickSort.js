let arr=[10,9,8,7,6,5]
let start=0;
let end=arr.length-1;

function QuickSort(arr,start,end){
    if(start>=end){
        return;
    }
    let p=partion(arr,start,end)
    QuickSort(arr,start,p-1);
    QuickSort(arr,p+1,end)
    return arr
}

function partion(arr,start,end){
    let pivot=arr[start]
    let count=0;
    //check right place of pivot 
    for(let i=start+1;i<=end;i++){
        if(arr[i]<=pivot){
            count++
        }
    }
    let pivotIndex=start+count;
    let temp=arr[pivotIndex]
    arr[pivotIndex]=arr[start]
    arr[start]=temp

    //check left side small element and right side big elemets of pivot
    let i=start;
    let j=end
    while(i<pivotIndex && j>pivotIndex){
        while(arr[i]<pivot){
            i++
        }
        while(arr[j]>pivot){
            j--
        }
    }
    if(i<pivotIndex && j>pivotIndex){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
    return pivotIndex
}
console.log(QuickSort(arr,start,end))
//TC-O(n^2)
//SC-O(n)