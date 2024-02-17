//write a program to find maximum frequency of array element or most repeated element of Array.

// let arr=[23,56,678,12,2,34,23,98,12,3,12,2,12]
// function maximumrequency(arr){
//     let frq={}
//     for(let i=0;i<arr.length;i++){
//         if(frq[arr[i]]){
//             frq[arr[i]]++
//         }else{
//             frq[arr[i]]=1
//         }
//     }
//     let maxfrq=0;
//     let ans=0;
//    for(let key in frq){
//     if(frq[key]>maxfrq){
//         maxfrq=frq[key]
//         ans=key
//     }
//    }
//    return ans
// }
// console.log(maximumrequency(arr));Z


//using map
let arr = [23, 56, 678, 12, 2, 34, 23, 98, 12, 3, 12, 2, 12];
function maximumrequency(arr) {
  let mp = new Map();
  for (let i = 0; i<arr.length; i++) {
    let x = arr[i];
    if (mp.has(x)) {
      mp.set(x, mp.get(x) + 1);
    } else {
      mp.set(x, 1);
    }
  }
  let maxFrq=0;
  let ans=0
  mp.forEach((value,key)=>{
    if(value>maxFrq){
        maxFrq=value
        ans=key
    }
  })
  return ans
}
console.log(maximumrequency(arr));
