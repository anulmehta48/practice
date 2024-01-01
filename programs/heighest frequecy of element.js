let arr=[23,56,6,78,12,34,98,12,3,2,12,2,2]

function heightfrequency(arr){
  let frq={}
  for(let val of arr){
    if(frq[val]){
      frq[val]++
    }else{
      frq[val]=1
    }
  }
//   console.log(frq)
  let maxFrq=0;
  let ans=[]
  
  for(let key in frq){
    if(frq[key]>=maxFrq){
      maxFrq=frq[key]
      ans.push(parseInt(key))
    }

  }
  return ans
}
console.log(heightfrequency(arr))