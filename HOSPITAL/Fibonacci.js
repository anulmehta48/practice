// function fibonacci(n){
//     if(n==0){
//         return 0;
//     }
//     if(n==1){
//         return 1;
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(7));

//print the nth fibonacci series
function fibonaccinumber(n){
    if(n<2){
        return n;
    }
    let first=0;
    let second=1;
    let temp;
    for(let i=2;i<=n;i++){
        temp=first+second;
        first=second;
        second=temp;
    }
    return temp
}
console.log(fibonaccinumber(10))


function fibonaccinumber(n){
    if(n<2){
        return n;
    }
    let a=0;
    let b=1;
    let temp;
    for(let i=2;i<=n;i++){
        temp=a+b;
        a=b;
        b=temp
    }
    return temp
}
console.log(fibonaccinumber(10))