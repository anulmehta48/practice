// write a program to find maximum sum of two element of array

let arr=[12,4,67,2,34]
function MaxofTwoSum(arr){
    let sum=0;
    let max=0;
    let smax=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            smax=max
            max=arr[i]
        }else if(arr[i]>smax  && arr[i] !== max){
            smax=arr[i]
        }
    }
    sum=max+smax
    return [sum,[max,smax]]
}
console.log(MaxofTwoSum(arr));