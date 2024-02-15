// write a program to  reverse an array without any third or temp varibales

let arr=[1,2,3,4,5]

function Reveserray(arr){
    let i=0;
    let j=arr.length-1
    while(i<j){
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++;
        j--
    }
    return arr
}
console.log(Reveserray(arr));