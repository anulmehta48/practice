//using map when array is not sorted order
//find the unique all the possibal pair of element (inside an array) whose sum is equal to the target
let arr=[7,2,4,6,9,11,34,3,2,1];
let target=5;

function TargetSum(arr,target){
    let mp=new Map()
    let pairs=[]
    for(let i=0;i<arr.length;i++){
        let value=target-arr[i]
        if(mp.has(value)){
             pairs.push([mp.get(value),arr[i]])
        }else{
            mp.set(arr[i],arr[i]);
        }
    }
    // if(pairs.length==0){
    //     return null
    // }
    return pairs
}
console.log(TargetSum(arr,target));



// function TargetSum(arr, target) {
//     const seen = new Set();
//     const pairs = [];

//     for (let val of arr) {
//         const difference = target - val;
//         if (seen.has(difference)) {
//             pairs.push([val, difference]);
//             seen.delete(difference); // Ensure uniqueness by removing the number from the set
//         } else {
//             seen.add(val);
//         }
//     }

//     return pairs;
// }
// console.log(TargetSum(arr,target));



// function TargetSum(arr,target){
//     let frq={}
//     let pairs=[]
//     for(let val of arr){
//         let value=target-val;
//         if(frq[value]>0){
//             pairs.push([val,value]);
//             frq[value]--
//         }else{
//             frq[val]=(frq[val]||0)+1
//         }
//     }
//     return pairs
// }
// console.log(TargetSum(arr,target));