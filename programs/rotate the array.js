// rotate the array of kth element 
//this is the normal brute force 
// here is time complexity is O(n^2)
// let arr=[1,2,3,4,5,6,7,8,9]
// let k=3
// function rotateArray(arr,k){
//     for(let i=0;i<k;i++){
//         arr.unshift(arr.pop())
//     }
//     return arr
// }
// console.log(rotateArray(arr,k))


// rotate the array of kth element 
//this is the second way to rotate by using reversal method 
// here is time complexity is O(n)
// let arr=[36,37,40,45,50,55,60,65] //=>[60,65,36,37,40,45,50,55,60,65]
// let k=3
// function rotateArray(arr,i,j){
//     // let i=0;
//     // let j=arr.length-1;
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--;
//     }
    
//     return arr
// }
// arr=rotateArray(arr,0,arr.length-1)// reverse complete all array
// arr=rotateArray(arr,0,k-1) // first K elements reverse
// arr=rotateArray(arr,k,arr.length-1) // last K elements reverse
// console.log(arr)


// let arr=[3,4,5,1,2] //=>[60,65,36,37,40,45,50,55,60,65]
// let k=2
// function rotateArray(arr,i,j){
//     // let i=0;
//     // let j=arr.length-1;
//     while(i<j){
//         arr[i]=arr[i]+arr[j]
//         arr[j]=arr[i]-arr[j]
//         arr[i]=arr[i]-arr[j]
//         i++;
//         j--;
//     }
    
//     return arr
// }
// arr=rotateArray(arr,0,arr.length-1)// reverse complete all array
// arr=rotateArray(arr,0,k-1) // first K elements reverse
// arr=rotateArray(arr,k,arr.length-1) // last K elements reverse
// console.log(arr[0])
// console.log(arr)


let nums=[3,4,5,1,2]
var findMin = function(nums) {
    let left = 0
    let right = nums.length-1
    while(left<right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[right])
            left = mid +1
        else
            right = mid
    }
     return nums[left]
 };
 console.log(findMin(nums))