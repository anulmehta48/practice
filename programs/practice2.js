// how to get frquency of each element that is present in the array you acn find any way methods

// let arr=[2,7,4,5,6,7,2,5,4,9,1];
// function kkk(arr){
//   let visited=[];
//   for(let i=0;i<arr.length;i++){
//     let count=0;
//     if(visited.includes(arr[i])) continue
//     for(let j=i;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         count++
//       }
//     }
//     visited.push(arr[i]);
//     console.log(arr[i]+" "+count)
    
//   }
// }
// kkk(arr)
//here is time complexity is TC O(n^2)

//now we can use frequecy counter method 
// let arr=[2,7,4,5,6,7,2,5,4,9,1];
// function fff(arr){
//   let frq={};
//   for(let i of arr)
//   if(frq[i]){
//     frq[i]++
//   }else{
//     frq[i]=1
//   }
//   return frq
// }
// console.log(fff(arr))
//here is time complexity is TC O(n) only



//comapair the both array and check square of every element is present in the array or not?

// let arr1=[2,4,6,8];
// let arr2=[64,16,36,4]

// function checkSquare(arr1,arr2){
//   if(arr1.length != arr2.length){
//     return false
//   }
//   for(let i=0;i<arr1.length;i++){
//     let index=arr2.indexOf(arr1[i]**2)
//     if(index==-1){
//       return false
//     }
//     arr2.splice(index,1) //here not need to use splice so  TC will N^2
//     return true
//   }
// }
// console.log(checkSquare(arr1,arr2))
//this is brute force approach
//here TC is O(n^3) --> n for loop and inside  n for indexOf and +n  for splice so n*n*n = n^3;
//here is TS is O(1);


//but we have another option to solve in optimal way using frequency counter
// let arr1=[2,4,6,8];
// let arr2=[64,16,36,4]

// function frequency(arr1,arr2){
//   let frq1={};
//   for(let i of arr1){
//     if(frq1[i]){
//       frq1[i]++
//     }else{
//       frq1[i]=1
//     }
//   }
//   console.log(frq1)
  
//   let frq2={};
//   for(let i of arr2){
//     if(frq2[i]){
//       frq2[i]++
//     }else{
//       frq2[i]=1
//     }
//   }
//   console.log(frq2)
  
//   for(let i in frq1){
//     if(frq1[i] != frq2[i**2]){
//       return false
//     }
//     if(frq2[i**2] != frq1[i]){
//       return false
//     }
//     return true;
//   }
  
// }
// console.log(frequency(arr1,arr2))
//here is TC is O(n); --> because we itrate 3 time each array but one by one not inside in one 
//here is TC is O(n); --> because we take a frequecy counter space



//frequency , hasging , mapping method how to write
let arr=[2,5,8,4,1,5,2,1,2]
let frq={}

for(let i of arr){
  if(frq[i]){
    frq[i]++
  }else{
    frq[i]=1
  }
}
console.log(frq)


let  freq={}
for(let i of arr){
  freq[i]=(freq[i]||0)+1
}
console.log(freq)


let hash=new Array(20).fill(0)
for(let i=0;i<arr.length;i++){
  hash[arr[i]]++
}
console.log(hash)


let mp=new Map();
for(let i=0;i<arr.length;i++){
  mp.set(arr[i],(mp.get(arr[i])||0)+1)
}
console.log(mp)



let mpp=new Map();
for(let i=0;i<arr.length;i++){
  if(mpp.has(arr[i])){
    mpp.set(arr[i],mpp.get(arr[i])+1)
  }else{
    mpp.set(arr[i],1)
  }
}
console.log(mpp)



