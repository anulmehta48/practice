let arr=[9,8,7,6,5,4,3,2,1]

function InsertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(InsertionSort(arr));
//TC- O(n^2)
//SC-O(1)