//write a program of bublle sort 

let arr=[2,5,4,12,51,5,41,57,7]

function BubbleSort(){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}
console.log(BubbleSort(arr));