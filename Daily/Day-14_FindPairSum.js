// write a program to find pair sum that is equal to target

let arr=[1,2,5,7,8,4,16,4,5,26,4]
let target=20
function FindPairSum(arr,target){
    let ans=0;
    let mp=new Map()
    for(let i=0;i<arr.length;i++){
        let x=arr[i]
        let y=target-x
        if(mp.has(y)){
            ans+=mp.get(y)
        }
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }else{
            mp.set(x,1)
        }
    }
    console.log(mp);
    return ans
}
console.log(FindPairSum(arr,target));