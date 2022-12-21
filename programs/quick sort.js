// let arr=[2,5,7,1,9,3,15,25,23,11,25]

// function partition(arr,low,high){
//     let pivot_element=arr[high];
//     let i=low-1
//     for(let j=low;j<high;j++){
//         if(pivot_element>arr[j]){
//             i++
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,high)
//     return i+1
// }

// function swap(arr,left,right){
//     let temp=arr[left]
//     arr[left]=arr[right];
//     arr[right]=temp;
// }

// function quickSort(arr,low,high){
//     if(low<high){
//         let pivot_index=partition(arr,low,high)
//         quickSort(arr,low,pivot_index-1)
//         quickSort(arr,pivot_index+1,high)
//     }
// }
// quickSort(arr,0,10)
// console.log(arr)
//here is TC is O(n^2)
// here is best case TC is O(nlogn)


let arr=[2,5,7,1,9,3,15,25,23,11,25]
function swap(arr,left,right){
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
}

function partition(arr,low,high){
    let pivot_element=arr[high];
    let i=low-1;

    for(let j=low;j<high;j++){
        if(pivot_element>arr[j]){
            i++;
            swap(arr,i,j)
        }
    }
    swap(arr,i+1,high);
    return i+1;
}

function quickSort(arr,low,high){
    if(low<high){
        let pivot_index=partition(arr,low,high)
        quickSort(arr,low,pivot_index-1);
        quickSort(arr,pivot_index+1,high)
    }
    return arr
}
console.log(quickSort(arr,0,10))


