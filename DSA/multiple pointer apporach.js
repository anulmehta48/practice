//************** */we have to solved in TC is O(n)so that we using two Pointer Approach ******************* 
//this is perfect code for two pointer solution but in this array must be sorted 
//first we have to sort the array
//second we have to take two pinter first i=0,j=arr.length-1
//third use the while condition while(i<j) until loop will be executed 
//check the three condition inside while loop :-
//  1-(arr[i]+arr[j]==target(X)) return true or 1;
//  2-(arr[i]+arr[j]<target(X)) i++;
//  3-(arr[i]+arr[j]==target(X)) j--;
//forth last if not found on not exits the sum then out of loop return the false or 0;
// let arr=[2,4,25,36,45,8,10,12,16,25,30]
// let target=26
// function MatchTarget(arr,target){
//     arr.sort((a,b)=>a-b)
//     // console.log(arr)
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         if(arr[i]+arr[j] == target){
//             return true
//         }
//         else if(arr[i]+arr[j]<target){
//             i++
//         }else{//arr[i]+arr[j]>target
//             j--
//         }
//     }
//     return false // target is not present
// }
// console.log(MatchTarget(arr,target))
// //here is TC is O(nlogn) because here in sorting takes O(nlogn) and while is take only O(n)
// //here is SC is O(1)


//Find the pair of sum is cloesed to target or X from given Array 
// let arr=[2,4,25,36,45,8,10,12,16,25,30]
// let x=56

// function ClosedSum(arr,x){
//     let i=0;
//     let j=arr.length-1
//     let diff=Number.MAX_VALUE
//     let a;
//     let b;

//     while(i<j){
//         let pairSum=arr[i]+arr[j];
//         let currDiff=Math.abs(pairSum-x)

//         if(currDiff<diff){
//             diff=currDiff
//             a=arr[i];
//             b=arr[j];
//         }

//         if(arr[i]+arr[j]>x){
//             j--
//         }else{
//             i++
//         }
//     }
//     console.log(a,b)
// }
// console.log(ClosedSum(arr,x))
//here is TC is O(N)
// here is SC is O(1)


//this is solve by normal usnig for loop
//hre is TC is O(N^2)
// let arr=[1,2,3,4,5,6]
// let t=7
// function twopointer(arr,t){
//     for(let i=0;i<arr.length;i++){
//             if(arr[i]+arr[j] == t){
//                return (arr[i],arr[j]) }
//     }
//     return false
// }
// console.log(twopointer(arr,t))


