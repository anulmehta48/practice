// Tail recursion
let n=3
function Recursion(n){
    if(n>0){
        console.log(n);
        Recursion(n-1)
    }
}
console.log(Recursion(n));