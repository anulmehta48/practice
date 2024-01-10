function fibonacci(n){
    let a=0;
    let b=1;
    let result=[]
    let sum=a+b
    result.push(sum)
    for(let i=1;i<n;i++){
        let temp=a+b;
        a=b;
        b=temp;
        result.push(temp)
    }
    return result
}
console.log(fibonacci(10));