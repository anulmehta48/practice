//find the factorial;
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
}
console.log(factorial(5))

// function factorial(n){
//     let ans=1
//     if(n==0 || n==1){
//         return ans;
//     }
//     for(let i=n;i>=1;i--){
//         ans=ans*i
//     }
//     return ans
// }
// console.log(factorial(5))