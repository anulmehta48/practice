// Tail recursion
let n=3
function TailRecursion(n){
    if(n>0){
        TailRecursion(n-1)
        console.log(n);
    }
}
console.log(TailRecursion(n));