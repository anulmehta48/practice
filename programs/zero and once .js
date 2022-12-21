//given array you have to segarigate them in one array 
//that means we have to arrange in arra in that all zero will be left side and all ones will be one side
// let arr=[1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0]

//first brute force appoarch by using sort() mmethod
//in this TC is O(nlogn)
// arr.sort()
// console.log(arr)


//second apporach will be using count variable and push in ornginal array or create a new array and push into that araary
//IN this appoarch we iterate all array and take the 0 and 1 count first and create a new array and push the 0 and 1 in that array
//but here is TC is O(n)
// let arr=[1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0]
// let count0=0;
// let count1=0;
// let result=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         count0++
//     }else if(arr[i]==1){
//         count1++
//     }
// }
// // console.log(count0)
// // console.log(count1)
// for(let i=0;i<7;i++){
//     result.push(0)
// }
// for(let i=7;i<11;i++){
//     result.push(1)
// }
// // result.push(count0)
// // result.push(count1)
// console.log(result)

//but we have another optimal apporach for this question****** by using two pointer
//given array you have to segarigate them in one array 
//that means we have to arrange in arra in that all zero will be left side and all ones will be one side
//here is TC is O(n)
//here is SC is O(1)
//color sort on leetcode
// let arr=[1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0]
// function segarigate(arr){
//     let start=0;
//     let end=arr.length-1;
//     while(start<=end){
//         while(arr[start]==0 && start<end){
//             start++
//         }
//         while(arr[end]==1 && end>start){
//             end--
//         }
//         if(start<end){
//             arr[start]=0
//             arr[end]=1
//             start++
//             end--
//         }
//     }
//     return arr
// }
// console.log(segarigate(arr))




//Durch National flag problem
//like -[0,0,1,1,2,2]
//using two or three pointer 
// let arr=[1,0,0,2,2,1,0,1,2,2,1,0,1,2,1,0]
// function DutchFlag(arr){
//     let start=0;
//     let end=arr.length-1;
//     let mid=0;
//     let temp;  

//     while(mid<=end){
//         if(arr[mid]==0){
//             temp=arr[mid]
//             arr[mid]=arr[start]
//             arr[start]=temp
//             start++
//             mid++
//         }else if(arr[mid]==2){
//             temp=arr[mid]
//             arr[mid]=arr[end]
//             arr[end]=temp
//             end--
//         }else{//if(arr[mid]==1)
//             mid++
//         }
//     }
//     return arr
// }
// console.log(DutchFlag(arr))


//move zeros;
let arr=[2,0,5,8,0,0,5,1,2,0]

function movezero(arr){
    let i=0;
    for(let j=0;j<arr.length;j++){
        if(arr[j] != 0){
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;
            i++;
        }
    }
    return arr
}
console.log(movezero(arr))