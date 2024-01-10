//find maximum repeated element or highest frequency element of array
let arr = [23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];
function heightfrequency(arr) {
  let frq = {};
  for (let i = 0; i < arr.length; i++) {
    if (frq[arr[i]]) {
      frq[arr[i]]++;
    } else {
      frq[arr[i]] = 1;
    }
  }
  let maxFrq = 0;
  let ans = [];
  for (let key in frq) {
    if (frq[key] >= maxFrq) {
      maxFrq = frq[key];
      ans.push(parseInt(key));
    }
  }
  return ans;
}
console.log(heightfrequency(arr));


//When we have same frequency of two or more then we have to return small number 
// let arr=[2,2,1,0,1,0]
// function heightfrequency(arr){
//   let mp=new Map()
//   for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if(mp.has(x)){
//       mp.set(x,mp.get(x)+1)
//     }else{
//       mp.set(x,1)
//     }
//   }
//   let maxFrq=0;
//   let ans=0
//   mp.forEach((value,key)=>{
//     if(value>maxFrq){
//       maxFrq=value;
//       ans=key
//     }else if(value==maxFrq){
//       if(key<ans){
//         ans=key
//       }
//     }
//   })
//   return ans
// }
// console.log(heightfrequency(arr));

