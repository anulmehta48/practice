//we can find the key value by using linear search by using for loop and here TC is O(n)
// In linear search in iteration will be very much for full length of array so it time taken and it is like brute force 
//in Linear search spouse 1000 length of array for 1000 iteration we have to performed

//in Linear search spouse 1000 length of array for 1000/2= 500 iteration we have to performed lke n/2 half of time
//but we have to perform binary search alogrithms because in this we can find element less than linear search so that
//binary search Time compexity is O(logN) and In best case if searched elememt found directly then it would be O(1)
//In this BS in Array must be sorted**
let arr = [4, 8, 12, 16, 18, 22, 25, 35]
let key = 35
function BinarySearch(arr, key) {
    let start = 0
    let end = arr.length - 1
    let mid;//we can use (start+end)/2 ; but we want avoiding Integer overflow so start+(end-start)/2)
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == key) {
            return mid;
        }
        // console.log(arr[mid])
        if (key > arr[mid]) {//if key is big then go right side 
            start = mid + 1;
        } else {//key < arr[mid] // if key is small then go left side 
            end = mid - 1;
        }

    }
    return -1
}
console.log(BinarySearch(arr, key))



//this is first occurence and last occurence solution 
// in this we have to find first first occurence and then second last occrenece and then print the indexof that occurence 
//here is time compexity is O(logn)
// let arr = [4, 8, 12, 16, 16,16 ,16,16,18, 22, 25, 25, 35]
// let key = 16

// function firstOccur(arr, key) {
//     let start=0;
//     let end=arr.length-1
//     let mid=Math.floor(start+(end-start)/2);
//     let ans=-1
//     while( start<=end){
//         if(arr[mid]==key){ 
//             ans=mid;
//             end=mid-1;
//         }else if(key >arr[mid]){
//             start=mid+1;
//         }else if(key <arr[mid]){
//             end=mid-1;
//         }
//         mid=Math.floor(start+(end-start)/2);
//     }
//     return ans;
// }
// function LastOccur(arr, key) {
//     let start=0;
//     let end=arr.length-1
//     let mid=Math.floor(start+(end-start)/2);
//     let ans=-1
//     while( start<=end){
//         if(arr[mid]==key){ 
//             ans=mid;
//             start=mid+1;
//         }else if(key >arr[mid]){
//             start=mid+1;
//         }else if(key <arr[mid]){
//             end=mid-1;
//         }
//         mid=Math.floor(start+(end-start)/2);
//     }
//     return ans;
// }
// console.log(firstOccur(arr, key))
// console.log(LastOccur(arr, key))



// // *** leetcode **********
// let nums=[2,5,4,7,6,9,9,9,7]
// let target=9
// var searchRange = function(nums, target) {
//     return   [firstOccur(nums,target),lastOccur(nums,target)]
// };

// function firstOccur(nums,target){
//     let start=0;
//     let end=nums.length-1;
//     let mid=Math.floor(start+(end-start)/2);
//     let ans=-1
//     while(start<=end){
//         if(nums[mid]==target){
//             ans=mid
//             end=mid-1 //this is for first occur
//         }else if(target>nums[mid]){//go right /start increment
//             start=mid+1;
//         }else if(target<nums[mid]){//go left / end decrement
//             end=mid-1
//         }
//         mid=Math.floor(start+(end-start)/2)
//     }
//     return ans;
// }
// function lastOccur(nums,target){
//     let start=0;
//     let end=nums.length-1;
//     let mid=Math.floor(start+(end-start)/2);
//     let ans=-1
//     while(start<=end){
//         if(nums[mid]==target){
//             ans=mid
//             start=mid+1 //this is last occur
//         }else if(target>nums[mid]){//go right /start increment
//             start=mid+1;
//         }else if(target<nums[mid]){//go left / end decrement
//             end=mid-1
//         }
//         mid=Math.floor(start+(end-start)/2)
//     }
//     return ans;
// }

// searchRange(nums,target)



//in one while loop 
// *** leetcode **********
// let nums = [1,4,5,6,7,7,7,7,7,7,8,9,9]
// let target = 7
// var searchRange = function (nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     let mid;
//     let firstOcc = -1;
//     let lastOcc = -1;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2)
//         if (nums[mid] == target) {
//             firstOcc = mid;
//             end = mid - 1
//         } else if (nums[mid] < target) {
//             start = mid + 1
//         } else {//nums[mid]>target
//             end = mid - 1
//         }
//     }
//     start = 0;
//     end = nums.length - 1;
//     while (start <= end) {
//         mid = Math.floor(start + (end - start) / 2)
//         if (nums[mid] == target) {
//             lastOcc = mid;
//             start=mid+1
//         } else if (nums[mid] < target) {
//             start = mid + 1
//         } else {//nums[mid]>target
//             end = mid - 1
//         }
//     }
//     // console.log(firstOcc,lastOcc)
//     return [firstOcc,lastOcc]
// }

// console.log(searchRange(nums, target))



// this is distinct rotated array binary search:=-
//here is TC is O(LogN)
// let arr = [8,9,10,1,2,3,4,5,6,7]
// let target = 3

// function roatedsearch(arr,target){
//     let start=0;
//     let end=arr.length-1;
//     let mid;
//     while(start<=end){
//         mid=Math.floor(start+(end-start)/2);
//         if(arr[mid]==target){
//             return mid;
//         }else if(arr[start]<=arr[mid]){
//             if(target<arr[mid] && target>=arr[start]){
//                 end=mid-1
//             }else{//target>arr[mid] &&target>arr[start]
//                 start=mid+1
//             }
//         }else if(arr[mid]<=arr[end]){
//             if(target>arr[mid] && target<=arr[end]){
//                 start=mid+1
//             }else{//target<arr[mid]&& target<arr[end]
//                 end=mid-1
//             }
//         }
//     }
//     return -1 //target is not present
// }
// console.log(roatedsearch(arr,target))






// this is distinct rotated array binary search:=-
//here is TC is O(LogN)
//space is Sc is O(1)
// let arr = [8,9,10,1,2,3,4,5,6,7]
// let target = 3

// function roatedsearch(arr,target){
//     let start=0;
//     let end=arr.length-1;
//     let mid;
//     while(start<=end){
//         mid=Math.floor(start+(end-start)/2);
//         if(arr[mid]==target){
//             return mid;
//         }else if(arr[start]<=arr[mid]){
//             if(target<arr[mid] && target>=arr[start]){
//                 end=mid-1
//             }else{//target>arr[mid] &&target>arr[start]
//                 start=mid+1
//             }
//         }else if(arr[mid]<=arr[end]){
//             if(target>arr[mid] && target<=arr[end]){
//                 start=mid+1
//             }else{//target<arr[mid]&& target<arr[end]
//                 end=mid-1
//             }
//         }
//     }
//     return -1 //target is not present
// }
// console.log(roatedsearch(arr,target))


