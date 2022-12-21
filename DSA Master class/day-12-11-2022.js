//1. find the target number from given array is prsent or not and return true if not then false
//target =55
// let arr=[2,3,6,5,4,8,9,10,55,2,51]
// let target=55
// function MatchTarget(arr){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == target){
//             return true
//         }
//     }
//     return false
// }
// console.log(MatchTarget(arr))
//here is TC is O(n)
//here is SC is O(1)


//2. find the two number such that their sum is target
// let arr=[2,3,6,5,4,8,9,10,55,2,51]
// let target=54
// function MatchTarget(arr){
//     for(let i=0;i<arr.length;i++){
//        for(let j=0;j<arr.length;j++){
//         if(arr[i] + arr[j] == target){
//             return true
//         }
//        }
//     }
//     return false
// }
// console.log(MatchTarget(arr))
//here is TC is O(n^2) 
// here Space is O(1)


//3. find two number with a given sum in sorted array 
// let arr=[2,4,8,10,12,16,25,30]
// let target=26
//this code i have to reinvent by self understood 
// function MatchTarget(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=arr.length-1;j>=0;j--){
//            let currsum=arr[i]+arr[j]
//            if(currsum == target){
//             return true
//            }
//            if(currsum > target){
//             arr[j]=arr[j]-1
//             j--
//            }
//            if(currsum <target){
//             arr[i]=arr[i]+1
//             i++
//            }
//         }
//     }
//     return false
// }
// console.log(MatchTarget(arr))

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
//here is TC is O(nlogn) because here in sorting takes O(nlogn) and while is take only O(n)
//here is SC is O(1)



// palindrom about knowegede
//racecar
//1221221
//1234321
//12344321

// let arr=[1,2,3,4,5,4,3,2,1]
// function palindrom(arr){
//     let i=0;
//     let j=arr.length-1;
//     while(i<j){
//         if(arr[i] != arr[j]){
//             return false
//         }
//         if(arr[i] == arr[j]){
//             i++;
//             j--;
//         }
//     }
//     return true
// }
// console.log(palindrom(arr))