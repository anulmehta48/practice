//find the count of occrance of given taraget 
//using binaray search

// let arr=[1, 1, 2, 2, 2, 2, 3]
// let x=4
// function find(arr,x){
//     let start=0;
//     let end=arr.length-1
//     let mid;
//     let firstOccr=-1;
//     let lastOccr=-1;
//     let totalNoOfOccrance=0
//     while(start<=end){
//         mid=Math.floor(start+(end-start)/2)
//         if(arr[mid]==x){
//             firstOccr=mid
//             end=mid-1
//         }else if(arr[mid]<x){
//             start=mid+1
//         }else{
//             end=mid-1
//         }
//     }
    
//     start=0;
//     end=arr.length-1
//     while(start<=end){
//         mid=Math.floor(start+(end-start)/2)
//         if(arr[mid]==x){
//             lastOccr=mid;
//             start=mid+1
//         }else if(arr[mid]<x){
//             start=mid+1
//         }else{
//             end=mid-1
//         }
//     }
//     if(firstOccr==-1 || lastOccr==-1) return
//    return totalNoOfOccrance=(lastOccr-firstOccr)+1
// }
// console.log(find(arr,x))
//here is Tc O(logn)



let arr=[1, 1, 2, 2, 2, 2, 2, 3]
let x=2
function find(arr,x){
   let totalNoOfOccrance=0;
   for(let i=0;i<arr.length;i++){
    if(arr[i]==x){
        totalNoOfOccrance++
    }
   }
   return totalNoOfOccrance
}
console.log(find(arr,x))
//here is Tc O(n)