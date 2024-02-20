//write a program to find duplicate element of array

let arr=[1,2,5,1,7,9,5,7,1,5,9]

function duplicateElment(){
    let frq={}
    for(let i=0;i<arr.length;i++){
        if(frq[arr[i]]){
            frq[arr[i]]++
        }else{
            frq[arr[i]]=1
        }
    }
    console.log(frq);
    let ans=[]
    for(let key in frq){
        if(frq[key]>1){
            ans.push(key)
        }
    }
    return ans
}
console.log(duplicateElment(arr));