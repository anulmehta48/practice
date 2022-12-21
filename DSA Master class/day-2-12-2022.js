// //Bubble Sort


// let arr = [5,2,7,2,9,6,2,11,4];


// const bubbleSort = (arr) => {
    
//     let n = arr.length;
    
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-1-i;j++)
//         {
//             if(arr[j]> arr[j+1])
//             {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
        
  
//     }
// }

// bubbleSort(arr);
// console.log(arr)

// const InprovedbubbleSort = (arr) => {
    
//     let n = arr.length;
    
//     for(let i=0;i<n-1;i++){
//                let isSwapped = false;

//         for(let j=0;j<n-1-i;j++)
//         {
//             if(arr[j]> arr[j+1])
//             {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//                 isSwapped = true;

//             }
//         }
//        if(isSwapped == false )
//             break;
//     }
// }

// //TC: O(n^2) 
// //Best Case TC: Omega (n) or O(n)
// //SC: O(1)










// //Insertion Sort
// let arr = [5,2,7,2,9,6,2,11,4];

// const  insertionSort = (arr) => {
    
//     let n = arr.length;
    
//     for(let i=1;i<n;i++){
//         let key = arr[i];
//         let j = i-1;
        
        
//         while(j>=0 && arr[j]>key){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = key;
        
//     }
// }

// insertionSort(arr);
// console.log(arr);

// //TC: O(n^2)
// //TC: Best TC : Omega (n) -> already sorted array
// //SC: O(1)












// //Quick Sort

 let arr = [2,5,7,1,9,3,15,25,23,11,45];
 
 const swap =(arr, left, right)=>{
     let temp = arr[left];
     arr[left] = arr[right];
     arr[right] = temp;
 }
 
 const partition =(arr, low, high) =>{
    
   let  pivot_element = arr[high];
    let i = low-1;
    
    for(let j = low;j<high;j++){
        
        if(pivot_element> arr[j]){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1, high);
    return i+1;
}
 
 const quickSort = (arr,low,high) => {
     
      if(low<high){
           let pivot_index =  partition(arr,low,high);
           quickSort(arr, low, pivot_index-1);
           quickSort(arr, pivot_index+1, high);
      }
}

quickSort(arr,0,8);

console.log(arr);
