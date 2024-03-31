//reveser the array

// let arr=[5,6,7,8,9,10]

// let i=0;
// let j=arr.length-1;

// while(i<j){
//     arr[i]=arr[i]+arr[j]
//     arr[j]=arr[i]-arr[j]
//     arr[i]=arr[i]-arr[j]
//     i++;
//     j--
// }
// console.log(arr);


let arr=[5,6,7,8,9,10]

function reverseArray(arr){
    let i=0;
    let j=arr.length-1;
    while(i<j){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++;
        j--
    }
    return arr
}
console.log(reverseArray(arr))