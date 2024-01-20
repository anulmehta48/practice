//Only return unique all element or print atleast one time occurr element
// let arr=[1,2,2,3,3,3,3,4,4,4,4,5,6,8,9]

// function uniqueAll(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let isUnique=true;
//         for(let j=0;j<result.length;j++){
//             if(arr[i]===result[j]){
//                 isUnique=false;
//                 break
//             }
//         }
//         if(isUnique){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(uniqueAll(arr));

//using frquency counter
// let arr=[1,2,2,3,3,3,3,4,4,4,4,5,6,8,9]
// function unique(arr){
//     let frq={}
//     for(let val of arr){
//         if(frq[val]){
//             frq[val]++
//         }else{
//             frq[val]=1
//         }
//     }
//     console.log(frq);
//     let result=[]
//     for(let key in frq){
//         if(frq[key]){
//             result.push(key)
//         }
//     }
//     return result
// }
// console.log(unique(arr));

//using hash map
// let arr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6, 8, 9];
// function unique(arr) {
//     let mp=new Map()
//     for(let i=0;i<arr.length;i++){
//         let x=arr[i]
//         if(mp.has(x)){
//             mp.set(x,mp.get(x)+1)
//         }else{
//             mp.set(x,1)
//         }
//     }
//     let result=[]
//     for(let key of mp){
//         result.push(key[0])
//     }
//     return result
// }
// console.log(unique(arr));


// let arr = [1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 6, 8, 9];
// function unique(arr) {
//   let mp = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let x = arr[i];
//     if (mp.has(x)) {
//       mp.set(x, mp.get(x) + 1);
//     } else {
//       mp.set(x, 1);
//     }
//   }
//   let result = [];
//   mp.forEach((frq, ele) => {
//     if (ele) {
//       result.push(ele);
//     }
//   });
//   return result;
// }
// console.log(unique(arr));
