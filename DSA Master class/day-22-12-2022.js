https://leetcode.com/problems/3sum/
 
// /**
// * @param {number[]} nums
// * @return {number[][]}
// */
var threeSum = function(nums) {
 
   let n = nums.length;
   let answer = [];
   nums.sort((a,b) => a-b);//nlogn
 
 
   for(let i=0;i<n-2;i++){
 
       let low = i+1;
       let high = n-1;
 
       while(low<high)
       {
           let sum = nums[i] + nums[low] + nums[high];
 
           if(sum == 0)
               {
                   answer.push([nums[i], nums[low], nums[high]]);
                   while(nums[low] === nums[low+1])
                       low++;
 
                    while(nums[high] === nums[high-1])
                      high--;
 
                   low++;
                   high--;  
               }
           else if(sum > 0)
               high--;
           else
               low++;
       }
      
       if(nums[i] == nums[i+1])
           i++;
   }
   return answer;
 
   //TC: O(nlogn + n^2)
   //SC: O(n)
};



https://leetcode.com/problems/sort-colors/description/
/**
* @param {number[]} nums
* @return {void} Do not return anything, modify nums in-place instead.
*/
var sortColors = function(nums) {
  
   let n = nums.length;
 
   let low = 0;
   let mid = 0;
   let high = n-1;
 
   while(mid<=high){
 
         if(nums[mid] == 0)
           {
               let temp = nums[low];
               nums[low] = nums[mid];
               nums[mid] = temp;
 
               low++;
               mid++;
           } 
 
           else if(nums[mid] == 2)
           {
               let temp = nums[high];
               nums[high] = nums[mid];
               nums[mid] = temp;
               high--;
           }
 
           else
               mid++;
   }
 
   return nums;
 
   //TC: O(n)
   //SC: O(1)
};


https://leetcode.com/problems/subarray-sum-equals-k/

 
var subarraySum = function(nums, k) {
   let prefixSum = 0;
   let answerCount = 0;
   let map = new Map();
   map.set(0,1);
 
 
   for(let i=0;i<nums.length;i++){
       prefixSum += nums[i];
 
       if(map.has(prefixSum-k))
           answerCount+=map.get(prefixSum-k);
 
       map.set(prefixSum, (map.get(prefixSum) || 0)+1 );
   }
 
   return answerCount;
};




https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 
var twoSum = function(numbers, target) {
  
   let n = numbers.length;
 
//     let low =0;
//     let high = n-1;
 
//     while(low < high){
//         let sum = numbers[low] + numbers[high];
//             if(sum == target )
//                 return [low+1, high+1];
 
//             else if (sum > target)
//                 high--;
 
//             else
//                 low++;
//     }
// return [-1,-1];
 
//TC: O(n)
//SC: O(1)
 
   for(let i=0;i<n-1;i++){
 
       let low = i+1;
       let high = n-1;
       let complement = target - numbers[i];
       while(low<=high){
           let mid = low+ Math.floor((high-low)/2);
          
           if(complement == numbers[mid])
               return [i+1, mid+1];
 
           else if(complement > numbers[mid])
               low = mid+1;
 
           else
               high = mid-1;
       }   
   }
 
return [-1, -1]
 
 
};


// let map = {};
// for(let i=0;i<n;i++) {
//     let diff = x-arr[i];
//     if(map[diff] != undefined) {
//         return true;
//     }
//     map[arr[i]] = i;
// }
// return false;