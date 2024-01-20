//Find Duplicate element of array
// let arr=[2,5,4,2,5,1,5,2,5,6,3,5,5,8,9]

//brute force approach
// function Duplicate(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//        for(let j=i+1;j<arr.length;j++){
//         if(arr[i]===arr[j] && !result.includes(arr[i])){
//             result.push(arr[i])
//             break;
//         }
//        }
//     }
//     return result
// }
// console.log(Duplicate(arr))
// TC-O(n^3)

// using frequency counter
// function Duplicate(arr){
//     let result=[]
//     let frq={}
//     for(let val of arr){
//         if(frq[val]){
//             frq[val]++
//         }else{
//             frq[val]=1
//         }
//     }
//     for(let key in frq){
//         if(frq[key]>1){
//             result.push(key)
//         }
//     }
//     return result 
// }
// console.log(Duplicate(arr))
//TC-O(n)

// let arr=[2,5,4,2,5,1,5,2,5,6,3,5,5,8,9]
// function Duplicate(arr){
//     let result=[]
//    let mp=new Map()
//    for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if(mp.has(x)){
//         mp.set(x,mp.get(x)+1)
//     }else{
//         mp.set(x,1)
//     }
//    }
//    for(let key of mp){
//     if(key[1]>1){
//         result.push(key[0])
//     }
//    }
//    return result
// }
// console.log(Duplicate(arr))
//TC-O(n)

let arr=[2,5,4,2,5,1,5,2,5,6,3,5,5,8,9]
function Duplicate(arr){
    let result=[]
   let mp=new Map()
   for(let i=0;i<arr.length;i++){
    let x=arr[i]
    if(mp.has(x)){
        mp.set(x,mp.get(x)+1)
    }else{
        mp.set(x,1)
    }
   }
   mp.forEach((val,index)=>{
    console.log(index,val);
    if(val>1){
        result.push(index)
    }
   })
   return result
}
console.log(Duplicate(arr))