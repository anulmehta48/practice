//find maximum element  of the array
let arr=[5,7,8,1,3,5,7,2,1]
// let arr=[-1,-2,-3] <= this is work when you max=arr[0] 
function total(arr){
   let min=arr[0]
   for(let i=0;i<arr.length;i++){
    if(min>arr[i]){
        min=arr[i]
    }
   }
   return min
}
console.log(total(arr))
