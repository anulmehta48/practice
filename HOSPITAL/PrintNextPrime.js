function PrintNextPrime(n){
    if(n==0||n==1){
        return false;
    }
    let ans=[]
    for(let i=2;i<n;i++){
        let isPrime=true;
        for(let j=2;j<i;j++){
            if(i%j==0){
                isPrime=false
            }
        }
        if(isPrime==true){
            ans.push(i)
        }
    }
    function checkPrime(n){
        for(let i=2;i<n;i++){
            if(n%i==0){
                return false
            }
        }
        return true
    }
    let current=n+1
    if(checkPrime(current)){
        ans.push(current)
    }
    return ans
}
console.log(PrintNextPrime(10))