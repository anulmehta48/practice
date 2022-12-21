//Q=>find the two sum that is  the target and find it is present in array or not and print the index
//this is solve by normal usnig for loop
//hre is TC is O(N^2)
// let arr = [1, 2, 3, 4, 5, 6]
// let t = 9
// function twosum(arr, t) {
//     for (let i = 0; i < arr.length; i++) {
//         for(let j=i+1;j<arr.length;j++){
//             if (arr[i] + arr[j] == t) {
//                 return [i,j]
//             } 
//         }
//     }
//     return false
// }
// console.log(twosum(arr, t))


//Q=>find the target sum that is present in array or not and print the index
//this is Optimal solutiion by using two pointer
//but in this method we should have sorted array then it only works
//here TC is O(N)
// let arr=[1,2,3,4,5,6]
// let t=7
// function findSum(arr,t){
//     let i=0;
//     let j=arr.length-1;

//     while(i<j){
//         if(arr[i]+arr[j]==t){
//             return [i,j]
//         }else if(arr[i]+arr[j]<t){
//             i++
//         }else{//arr[i]+arr[j]>t
//             j--
//         }
//     }
//     return false;
// }
// console.log(findSum(arr,t))

//Q=>find the sum that is closed to the target value and print the index
//so we used here two pinter apporach
// let arr=[12,15,18,22,25,28,30,35,38]
// // let arr=[4,7,10,18,22,30]
// let target=40

// function closedSum(arr,target){
//     let i=0
//     let j=arr.length-1;
//     let diff=Number.MAX_VALUE
//     let a;
//     let b;
//     while(i<j){
//         let pairsum=arr[i]+arr[j]
//         let currSum=Math.abs(pairsum-target)
//         if(currSum<diff){
//             diff=currSum
//             a=arr[i]
//             b=arr[j]
//         }
//         if(arr[i]+arr[j]<target){
//             i++
//         }else{//arr[i]+arr[j]>taget
//             j--
//         }
//     }
//     console.log(a,b)
// }
// closedSum(arr,target)




//practice :-
//in this brute force order is does not matter but when you solve using two pointer order must be sorted order 
// let arr=[1,5,3,6,7,1,2]
// let target=13

// function tagetsum(arr,taget){
//     for(let i=0;i<arr.length;i++){
//         for(let j=1;j<arr.length;j++){
//             if(arr[i]+arr[j]==taget){
//                 return [i,j]
//             }
//         }
//     }
//     return false
// }
// console.log(tagetsum(arr,target))


// when you solve using two pointer order must be sorted order 
// let arr=[1,5,8,10,12,15,16]
// let target=13

// function tagetsum(arr,target){
//     let i=0;
//     let j=arr.length-1
    
//     while(i<j){
//         if(arr[i]+arr[j] == target){
//             return [i,j]
//         }else if(arr[i]+arr[j]<target){
//             i++
//         }else{//arr[i]+arr[j]>target
//             j--
//         }
//     }
//     return false
// }
// console.log(tagetsum(arr,target))



// let arr=[12,15,18,22,25,28,30,35,38]
// let target=40

// function close(arr,target){
//     let i=0;
//     let j=arr.length-1;
//     let diff=Number.MAX_VALUE;
//     let a;
//     let b;
//     while(i<j){
//         let pairsum=arr[i]+arr[j];
//         let currSum=Math.abs(pairsum-target)
//         if(currSum<diff){
//             currSum=diff
//             a=arr[i]
//             b=arr[j]
//         }
//         if(arr[i]+arr[j]<target){
//             i++
//         }else{
//             j--
//         }
//         // console.log(a,b)
//     }
//     return [a,b]
// }
// console.log(close(arr,target))
