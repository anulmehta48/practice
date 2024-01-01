
//find the uniuqe elements of the array
// let arr=[2,4,2,5,1,6,4,6,3,2,1]
// function findUnique(art){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let isUnique=true
//         for(let j=0;j<arr.length;j++){
//             if(i!==j && arr[i]==arr[j]){
//                 isUnique=false;
//                 break;
//             }
//         }
//         if(isUnique){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(findUnique(arr))

//here is TC is O(n^2)
//here is SC is O(1)

//find the unique element of array
// let arr=[2,5,4,2,6,4,1,8]
// function uniqueElement(arr){
//     let result=0;
//     for(let i=0;i<arr.length;i++){
//         result=result^arr[i]
//         console.log(result)
//     }
//     return result
// }
// console.log(uniqueElement(arr))



//More optimize to solve this using frequency counter method
let arr=[2,4,2,5,1,6,4,6,3,2,1]
function findUnique(arr){
    let result=[]
    let frq={}
    for(let i=0;i<arr.length;i++){
        if(frq[arr[i]]){
            frq[arr[i]]++
        }else{
            frq[arr[i]]=1
        }
    }
    for(let val in frq){
        if(frq[val]==1){
            result.push(parseInt(val))
        }
    }
    return result
}
console.log(findUnique(arr))