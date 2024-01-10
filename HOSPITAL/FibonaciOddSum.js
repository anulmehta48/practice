//print the fibonacci fashion sereis and print the sum of all odd number of series.
function fibonacciOddSum(n){
    let a=0;
    let b=1;
    let result=[];
    let sum=a+b;
    result.push(sum)
    for(let i=1;i<n;i++){
        let temp=a+b;
        a=b;
        b=temp;
        result.push(temp)
    }
    let ans=0;
    for(let i=0;i<result.length;i++){
        if(result[i]%2==1){
            ans+=result[i]
        }
    }
    console.log(result);
    return ans
}
console.log(fibonacciOddSum(5))


//Print fibonachhi fasion series only less then equal to given input
// function fibonacci(n){
//     let a=0;
//     let b=1
//     let result=[]
//     let sum=a+b
//     result.push(sum)
//     for(let i=0;i<=n;i++){
//         let temp=a+b;
//         a=b;
//         b=temp;
//         if(temp<=n){
//             result.push(temp)
//         }else{
//             break;
//         }
//     }
//     return result
// }
// console.log(fibonacci(10))
