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


// let arr=[2,5,7,1,9,3,15,25,23,11,25]
// function swap(arr,left,right){
//     let temp=arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
// }

// function partition(arr,low,high){
//     let pivot_element=arr[high];
//     let i=low-1;

//     for(let j=low;j<high;j++){
//         if(pivot_element>arr[j]){
//             i++;
//             swap(arr,i,j)
//         }
//     }
//     swap(arr,i+1,high);
//     return i+1;
// }

// function quickSort(arr,low,high){
//     if(low<high){
//         let pivot_index=partition(arr,low,high)
//         quickSort(arr,low,pivot_index-1);
//         quickSort(arr,pivot_index+1,high)
//     }
//     return arr
// }
// console.log(quickSort(arr,0,10))


//Second way to solve this 
// let arr=[10,5,12,4,14,9,32]
// let start=0;
// let end=arr.length-1
// function partition(arr,start,end){
//   let pivot=arr[start];
//   let i=start;
//   let j=end;
//   while(i<=j){
//     while(arr[i]<=pivot){
//       i++
//     }
//     while(arr[j]>pivot){
//       j--
//     }
//     if(i<j){
//       let temp=arr[i]
//       arr[i]=arr[j]
//       arr[j]=temp
//     }
//   }
//   let temp=arr[j]
//   arr[j]=arr[start];
//   arr[start]=temp;
//   return j
// }

// function QuickSort(arr,start,end){
//   if(start>=end) return;
//   let p=partition(arr,start,end)
//   QuickSort(arr,start,p-1)
//   QuickSort(arr,p+1,end)
//   return arr
// }
// console.log(QuickSort(arr,start,end))


//third way to solve this 
// let arr=[2,8,1,5,3,19,10,4]
// function partition(arr,start,end){
//   let pivot=arr[start]
//   let count=0;
//   for(let i=start+1;i<=end;i++){
//     if(arr[i]<=pivot){
//       count++
//     }
//   }
//   //palce the pivot on right place position 
//   let pivotIndex=start+count
//   let temp=arr[pivotIndex]
//   arr[pivotIndex]=arr[start]
//   arr[start]=temp
  
//   //left and right wala part sambhal lenge usig two pointer 
//   let i=start
//   let j= end
//   while(i<pivotIndex && j>pivotIndex){
//     while(arr[i] <=pivot){
//       i++
//     }
//     while(arr[j] > pivot){
//       j--
//     }
//     if(i<pivotIndex && j>pivotIndex){
//       let temp=arr[i]
//       arr[i]=arr[j]
//       arr[j]=temp
//       i++;
//       j--
//     }
//   }
//   return pivotIndex
// }
// function quickSort(arr,start,end){
//   if(start>=end) return;
//   let p=partition(arr,start,end)
//   quickSort(arr,start,p-1)
//   quickSort(arr,p+1,end)
//   return arr
// }
// console.log(quickSort(arr,0,7))



// let arr=[20,1,5,18,7,3,10,8,10]
// let start=0;
// let end=arr.length-1;

// function partition(arr,start,end){
//   let pivot=arr[start]
//   let count=0;
//   for(let i=start+1;i<=end;i++){
//     if(arr[i]<=pivot){
//       count++
//     }
//   }
//   //pivot place on right position
//   let pivotIndex=start+count
//   let temp=arr[pivotIndex]
//   arr[pivotIndex]=arr[start]
//   arr[start]=temp
  
//   //now left and right element are less than or greater than pivot element
//   let i=start
//   let j=end
//   while(i<pivotIndex && j>pivotIndex){
//     while(arr[i]<=pivot){
//       i++
//     }
//     while(arr[j]>pivot){
//       j--
//     }
//     if(i<pivotIndex && j>pivotIndex){
//       let temp=arr[i];
//       arr[i]=arr[j];
//       arr[j]=temp
//     }
//   }
//   return pivotIndex
// }

// function QuickSort(arr,start,end){
//   if(start>=end) return ;
//   let p=partition(arr,start,end)
//   QuickSort(arr,start,p-1)
//   QuickSort(arr,p+1,end)
//   return arr
// }
// console.log(QuickSort(arr,start,end))



let arr=[10, 80, 30, 90, 40, 50, 70]
let start=0;
let end=arr.length-1
function swap(arr,start,end){
  let temp=arr[start]
  arr[start]=arr[end]
  arr[end]=temp
}
function partition(arr,start,end){
  let pivot=arr[end]
  let i=start-1;
  for(let j=start;j<end;j++){
    if(pivot>arr[j]){
      i++;
      swap(arr,i,j)
    }
  }
  swap(arr,i+1,end)
  return i+1
}
function quickSort(arr,start,end){
  if(start>=end) return ;
  let p=partition(arr,start,end)
  quickSort(arr,start,p-1)
  quickSort(arr,p+1,end)
  return arr
}

console.log(quickSort(arr,start,end))