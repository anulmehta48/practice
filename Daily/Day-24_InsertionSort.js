let arr=[2,5,8,9,1,5,9,11]

function InserionSort(arr){
    for(let i=0;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1;
        while(j>=0&& arr[j]>temp){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(InserionSort(arr));