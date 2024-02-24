//write a program to print fizzbuzz
function fizzbuzz(input){
    let ans=[]
    for(let i=0;i<=input;i++){
        if(i%3==0&& i%5==0){
            ans.push("FizzBuzz")
        }else if(i%3==0){
            ans.push("Fizz")
        }else if(i%5==0){
            ans.push("Buzz")
        }else{
            ans.push(i+"")
        }
    }
    return ans
}
console.log(fizzbuzz(15));