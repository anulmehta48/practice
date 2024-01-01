//Insertion sort
//here is time complexity is O(n^2)
//here is  best Time complexity is O(n)
//here is Space Complexity is O(1)


// let arr=[2,5,8,9,3,1,5,9,11]
// function Insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let temp=arr[i]
//         let j=i-1
//         for(;j>=0;j--){
//             if(arr[j]>temp){
//                 arr[j+1]=arr[j]
//             }else{
//                 break;
//             }
//         }
//         arr[j+1]=temp;
//     }
//     return arr
// }
// console.log(Insertion(arr))


let arr=[2,5,7,4,9,2,1]

function Insertionsort(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j]; // this is used for require place for element untill our j==-1
            j--
        }
        arr[j+1]=temp //this is for replace the temp values on the element
    }
    return arr
}
console.log(Insertionsort(arr))

