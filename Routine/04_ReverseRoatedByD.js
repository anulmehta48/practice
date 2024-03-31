// Reverse Cyclick roated array by d elements


let arr=[5,6,7,8,9,10]
let d=2
function RotatedArray(arr,i,j){
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--;
    }
    return arr
}
console.log(RotatedArray(arr,0,arr.length-1)) //all element reverse
console.log(RotatedArray(arr,0,d-1))  //first d element
console.log(RotatedArray(arr,d,arr.length-1))  //remaing  others elements
