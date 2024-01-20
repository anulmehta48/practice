//heighest repeated element / Heighest frequiency / Majority elements find
//find maximum repeated element or highest frequency element of array

//brute force
// let arr=[23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];
// function HeighestFrequency(arr){
//   let maxfrq=0
//   let ans;
//   for(let i=0;i<arr.length;i++){
//     let currfrq=0;
//     for(let j=0;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         currfrq++
//       }
//     }
//     if(currfrq>maxfrq){
//       maxfrq=currfrq
//       ans=arr[i]
//     }
//   }
//   return ans
// }
// console.log(HeighestFrequency(arr));
//O(n^2)

//if both value are same the return biggest element
// arr = [2,2,1,1,1,1,2,2]
// function heighestFrq(arr){
//   let maxFrq=0;
//   let ans;
//   for(let i=0;i<arr.length;i++){
//     let currfrq=0;
//     for(let j=0;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         currfrq++
//       }
//     }
//     if(currfrq>maxFrq ||(currfrq === maxFrq && arr[i] > ans)){
//       maxFrq=currfrq
//       ans=arr[i]
//     }
//   }
//   return ans
// }
// console.log(heighestFrq(arr))

//if all the same element that have same frequincy occurence
// let arr=[23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];
// function HeighestFrequency(arr){
//   let maxfrq=0
//   let ans=[]
//   for(let i=0;i<arr.length;i++){
//     let currfrq=0;
//     for(let j=0;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         currfrq++
//       }
//     }
//     if(currfrq>maxfrq){
//       maxfrq=currfrq
//       ans=[arr[i]]
//     }else if(currfrq==maxfrq && !ans.includes(arr[i])){
//       ans.push(arr[i])
//     }
//   }
//   return ans
// }
// console.log(HeighestFrequency(arr));


//using frequecy counter
// let arr = [23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];
// function heightfrequency(arr) {
//   let frq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (frq[arr[i]]) {
//       frq[arr[i]]++;
//     } else {
//       frq[arr[i]] = 1;
//     }
//   }
//   let maxFrq = 0;
//   let ans = [];
//   for (let key in frq) {
//     if (frq[key] >= maxFrq ) {
//       maxFrq = frq[key];
//       ans.push(parseInt(key));
//     }
//   }
//   return ans;
// }
// console.log(heightfrequency(arr));
//O(n)


// let arr = [23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];
// function heightfrequency(arr) {
//   let frq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (frq[arr[i]]) {
//       frq[arr[i]]++;
//     } else {
//       frq[arr[i]] = 1;
//     }
//   }

//   let maxFrq = 0;
//   let ans = [];

//   for (let key in frq) {
//     if (frq[key] > maxFrq || (frq[key] === maxFrq && parseInt(key) > ans[0])) {
//       maxFrq = frq[key];
//       ans = [parseInt(key)];
//     }
//   }

//   return ans;
// }
// console.log(heightfrequency(arr));


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

