// write a program of slection sort

let arr=[5,7,2,6,4,10,25,4,63,4]

function Selectionsort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        let temp=arr[minIndex]
        arr[minIndex]=arr[i]
        arr[i]=temp
    }
    return arr
}
console.log(Selectionsort(arr));