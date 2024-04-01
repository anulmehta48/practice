// find the highest reapeated element of array
let arr=[23, 56, 6, 78, 12, 34, 98, 12, 3, 2, 12, 2, 2];

// function HeighestReapeated(arr){
//     let freq={}
//     for(let val of arr){
//         if(freq[val]){
//             freq[val]++
//         }else{
//             freq[val]=1
//         }
//     } 
//     console.log(freq);
//     let maxFrq=0;
//     let ans=0;
//     for(let key in freq){
//         if(freq[key]>maxFrq){
//             maxFrq=freq[key]
//             ans=key
//         }
//     }
//     return ans

// }
// console.log(HeighestReapeated(arr));


function HeighestReapeated(arr){
   let mp= new Map()
   for(let i=0;i<arr.length;i++){
        let x=arr[i]
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }else{
            mp.set(x,1)
        }
   }
   let maxFrq=0;
   let ans=0
  mp.forEach((value,key)=>{
    if(value>maxFrq){
        maxFrq=value
        ans=key
    }else if(value==maxFrq){
        if(key<ans){
            ans=key
        }
    }
  })
  return ans

}
console.log(HeighestReapeated(arr));