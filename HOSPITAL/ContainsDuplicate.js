// leetcode - 217

//  Given an integer array nums, return true if any value appears at least twice in the array, 
//  and return false if every element is distinct.
let arr=[1,1,1,3,3,4,3,2,4,2]
//brute force 
// function ContainsDiuplicate(){
//     for(let i=0;i<arr.length;i++){
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             return true
//         }
//       }
//     }
//     return false
// }
// console.log(ContainsDiuplicate(arr));
//TC- O(n^2) so TLE Time Line Exceeded

//using set because set only contain unique values
// function ContainsDiuplicate(){
//     let store=new Set()
//     for(let i=0;i<arr.length;i++){
//         if(store.has(arr[i])){
//             return true
//         }else{
//             store.add(arr[i])
//         }
//     }
//     return false
// }
// console.log(ContainsDiuplicate(arr));
//Tc-O(n)

//using frequncy countermethod because store frequiency values of element
// function ContainsDiuplicate(){
//     let frq={}
//     for(let i=0;i<arr.length;i++){
//         if(frq[arr[i]]){
//             frq[arr[i]]++
//         }else{
//             frq[arr[i]]=1
//         }
//     }
//     console.log(frq);
//     for(let key in frq){
//         if(frq[key]>=2){
//             return true
//         }
//     }
//     return false
// }
// console.log(ContainsDiuplicate(arr));
//Tc-O(n)


//using map  because map count the values of element
function ContainsDiuplicate(){
    let mp=new Map()
    for(let i=0;i<arr.length;i++){
        let x=arr[i]
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }else{
            mp.set(x,1)
        }
    }
    //both work fine
    // for(let [key,value] of mp){
    //     if(value>=2){
    //         return true
    //     }
    // }
    // return false

    for(let value of mp.values()){
        if(value>=2){
            return true
        }
    }
    return false
  
}
console.log(ContainsDiuplicate(arr));
//Tc-O(n)