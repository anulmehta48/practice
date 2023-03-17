// sum of all element of array:-
// let arr=[5,7,8,1,3,5,7,2,1]
// function total(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// console.log(total(arr))

//find maximum element  of the array
// let arr=[5,7,8,1,3,5,7,2,1]
// function total(arr){
//    let max=0
//    for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//    }
//    return max
// }
// console.log(total(arr))

//find maximum element  of the array but in this 
// when inislize from arr[0] index becacuse [-1,-2,-3] then test case will be fails
// let arr=[-1,-2,-3]
// function total(arr){
//    let max=arr[0]
//    for(let i=1;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//    }
//    return max
// }
// console.log(total(arr))


// let arr = [5, 7, 8, 1, 4, 5, 1, 2, 1]
// let k = 10
// function total(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i] + arr[j] == k) {
//                 return [i,j]
//             }
//         }
//     }
// }
// console.log(total(arr))

///**** find the maximum sum  first find maximum and second search minimum then sum=maximum+minimum ********/
// let arr=[-2, 1, -4, 5, 3]
// function findSum(arr){
//     let min=arr[0];
//     let max=arr[0]
//     let sum=0;
//     for(let i=1;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//         }
//     }
//     for(let j=1;j<arr.length;j++){
//         if(min>arr[j]){
//             min=arr[j]
//         }
//     }
//     sum=min+max;
//     return sum
// }
// console.log(findSum(arr))



//maximum and minimum
let arr=[1,5,2,3,8,3,10]
function maxminnumber(arr){
    let max = arr[0];
    let min = arr[0];
         for(let i=0;i<arr.length;i++){
            if(arr[i]>max) max = arr[i];
            else if(arr[i] < min)  min = arr[i]
         }
         return (`${max} ,${min}`);
  }
  console.log(maxminnumber(arr))