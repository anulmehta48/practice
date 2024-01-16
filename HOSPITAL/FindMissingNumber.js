//find the missing number;
//exampl 1=> arr=[3,0,1]
// output=> 2
//exampl 1=> arr=[0,1]
// output=> 2
//exampl 1=> arr=[9,6,4,2,3,5,7,0,1]
// output=> 8

let arr=[1,2,0,4,5]
function FindMissingNumber(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let totalAllsum=arr.length*((arr.length+1)/2)
    let result=totalAllsum-sum
    return result
}
console.log(FindMissingNumber(arr));