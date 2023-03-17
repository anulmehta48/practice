//
function stepUp(n){
    if(n<0) return 0;
    if(n==1) return 1;
    return stepUp(n-1)+stepUp(n-2)

}
console.log(5)