//Insertion sort
//here is time complexity is O(n^2)
//here is Time complexity is Omega(n)
//here is Space Complexity is O(1)

// let arr=[2,5,8,9,3,1,5,9,11]
// function Insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let key=arr[i]
//         let j=i-1

//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j]
//             j--;
//         }
//         arr[j+1]=key
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
            arr[j+1]=arr[j]; // this is used for require place for element 
            j--
        }
        arr[j+1]=temp //this is for all previous elements are sorted so add the next in the array
    }
    return arr
}
console.log(Insertionsort(arr))

