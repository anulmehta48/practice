// Find All Four Sum Numbers or 4sum or kth sum of element

let arr=[10,2,3,4,5,7,8];
let k=23

function foursum(arr,k){
    let mp=new Map()
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            mp.set(arr[i]+arr[j],[i,j])
        }
    }
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            let sum=arr[i]+arr[j]
            
        }
        
    }
}
console.log(foursum(arr,k))