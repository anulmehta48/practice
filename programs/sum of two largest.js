// //find the sum of largest number in sorted array
// //here is Tc is O(n)
// let arr=[1,2,3,4,5,6,7,8]
// let sum=0;
// sum=arr[arr.length-1]+arr[arr.length-2]
// console.log(sum)


//find the sum of largest number in unsorted array
//here is Tc is O(nlogn)
// let arr=[5,7,2,1,9,1,7,5,2]
// arr.sort((a,b)=>a-b)
// let sum=0;
// sum=arr[arr.length-1]+arr[arr.length-2]
// console.log(sum)




//find the sum of two largest number in unsorted array
//here is Tc is O(n)
// let arr=[5,7,2,1,9,1,7,5,2]
// let sum=0;
// let max=0;
// let smax=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         smax=max;
//         max=arr[i]
//     }else if(arr[i]>smax){
//         smax=arr[i]
//     }
//     sum=max+smax
// }
// console.log(sum)


// find the sum of three largest number in unsorted array
// here is Tc is O(n)
// let arr=[5,7,2,1,9,1,7,5,2]
// let sum=0;
// let max=0;
// let smax=0;
// let tmax=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//         tmax=smax
//         smax=max;
//         max=arr[i]
//     }else if(arr[i]>smax){
//         tmax=smax
//         smax=arr[i]
//     }else if(arr[i]>tmax){
//         tmax=arr[i]
//     }
//     sum=max+smax+tmax
// }
// console.log(sum)
