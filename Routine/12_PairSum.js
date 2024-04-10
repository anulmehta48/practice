// this apporaches when arr in already sorted orders
// if array not sorted then we have to use frequecy couter apporches for this solution.



let arr=[10,22,28,29,30,40]
let x=59

function ClosesetPairSum(arr,x){
    let i=0;
    let j=arr.length-1;

    while(i<j){
        if(arr[i]+arr[j]==x){
         return [arr[i],arr[j]]
        }
        else if(arr[i]+arr[j]<x){
            i++
        }else{
            j--
        }
    }
    return 0
}
console.log(ClosesetPairSum(arr,x));