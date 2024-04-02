// Given a array you have to filter the duplicate element and return the unique element 

let arr=[1,2,22,11,3,5,11,2];

function FindUniqueElement(arr){
    let frq={}
    for(let val of arr){
        if(frq[val]){
            frq[val]++
        }else{
            frq[val]=1
        }
    }
    let ans =[]
    for(let key in frq){
        if(frq[key]==1){
            ans.push(key)
        }
    }
    return ans
}
console.log(FindUniqueElement(arr));