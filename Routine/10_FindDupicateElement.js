let arr=[2,5,1,2,5,2,1,5,1,2,5,0,8]

function FindDuplicate(arr){
    let frq={}
    for(let val of arr){
        if(frq[val]){
            frq[val]++
        }else{
            frq[val]=1
        }
    }
    let ans=[]
    for(let key in frq){
        if(frq[key]>1){
            ans.push(key)
        }
    }
    return ans
}
console.log(FindDuplicate(arr));