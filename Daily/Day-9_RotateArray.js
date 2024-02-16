//write a program to cyclically roated the array that is rotated by k-elements

let arr=[1,2,3,4,5,6,7,8,9,10]
let k=2;
function RoatedArray(arr,k){
    function RotatedByK(arr,i,j){
        while(i<j){
            arr[i]=arr[i]+arr[j]
            arr[j]=arr[i]-arr[j]
            arr[i]=arr[i]-arr[j]
            i++
            j--
        }
       return arr
    }
    RotatedByK(arr,0,arr.length-1)
    RotatedByK(arr,0,k)
    RotatedByK(arr,k,arr.length-1)
    return arr
}
console.log(RoatedArray(arr,k));