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


let arr=[3,4,5,1,2] //=>[60,65,36,37,40,45,50,55,60,65]
let k=2
function rotateArray(arr,i,j){
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;
    }
    
    return arr
}
rotateArray(arr,0,arr.length-1)// reverse complete all array
rotateArray(arr,0,k-1) // first K elements reverse
rotateArray(arr,k,arr.length-1) // last K elements reverse
// console.log(arr[0])
console.log(arr)


// let nums=[3,4,5,1,2]
// var findMin = function(nums) {
//     let left = 0
//     let right = nums.length-1
//     while(left<right){
//         let mid = Math.floor((left+right)/2)
//         if(nums[mid]>nums[right])
//             left = mid +1
//         else
//             right = mid
//     }
//      return nums[left]
//  };
//  console.log(findMin(nums))


//this is clouesr
// function myFunc(n){
//     let a=10;
//     function senc(){
//         console.log(a)
//     }
//     senc()
// }
// myFunc()

//funtion => A function is set of statment that perform perticular taks based on input and return some output from it that is called function.
// function sum(a,b){
//     let total=a+b;
//     return total
// }
// console.log(sum(9,5))


// function Square(){
//     console.log("this is square");
// }

// function secondFun(){
//     console.log("this is second fun")
//     Square()
// }
// secondFun()


// let arr=[2,3,4,5,7]
// let result=arr.filter((x)=>x%2==1)
// console.log(result)


// let arr=[2,3,4,5,7]
// function findSum(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr))


// let result=arr.reduce((acc,curr)=>{
//     acc=acc+curr
//     return acc
// },0)
// console.log(result)


//forEach

// let arr=[2,3,4,5,7]

// let result=arr.forEach((x)=>console.log(x))
// console.log(result)

// let mytotal=new Promise((resolve,reject)=>{
//     const myLink="https://github.com/anulmehta48/SquareSoft.git"

//     const user=fetch(myLink) 
//     // console.log(user)
// })
// .then(()=>console.log(mytotal))
// .catch((err)=>console.log(err))


