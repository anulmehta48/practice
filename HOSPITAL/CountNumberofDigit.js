//Count the number of digit of a number

function CountDigit(n){
    n=Math.abs(n)
    let count=0;
    do{
        count++
        n=Math.floor(n/10)
    }while(n>0)
    return count
}
console.log(CountDigit(44546))

// another way using for loop
function CountDigit(n){
    n=Math.abs(n)
    let num=n.toString()
    let count=0;
   for(let i=0;i<num.length;i++){
    count++
   }
    return count
}
console.log(CountDigit(44546))