//this is normal check input is prime or not 
// function prime(n){
//     if(n==0||n==1) return false;
//     if(n==2) return true;
//     for(let i = 2; i< n; i++){
//         if(n%i == 0) return false;
//     }
//     return true;
// }
// console.log(prime(15));


// function printPrimeNumer(n){
//     if(n==0||n==1) return false;
//     if(n==2) return true;
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return "this is not prime"
//         }
//     }
//     return "this is prime"
// }
// console.log(printPrimeNumer(11))


// function primeNumber(n){
//     if(n==0 || n==1){
//         return false
//     }
//     if(n==2) return true
//     for(let i=2;i<n;i++){
//         if(n%i==0){
//             return false
//         }
//         return true
//     }
//     let N=50
//     for(let i=1;i<=N;i++){
//         if(primeNumber(i)){
//             console.log(i)
//         }
//     }

// }
// primeNumber()

// program to  print upto prime number of given number;
// function printPrimeNumer(n){
//     if(n==0||n==1) return false;
//     let ans=[]
//     for(let i=2;i<=n;i++){
//       let isPrime=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//               isPrime=false
//                 break;
//             }
//         }
//         if(isPrime){
//             ans.push(i)
//         }
        
//     }
//     return ans
// }
// console.log(printPrimeNumer(100))

//**********very important question for interview  */
//** this is question i am not able to solve in interview  */
// **this is for print the prime number and also print the next prime number of given input if it is prime only print otherwise not print.
// function printPrimeNumer(n){
//     if(n==0||n==1) return false;
//     let ans=[]
//     for(let i=2;i<=n;i++){
//         let isPrime=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 isPrime=false;
//                 break;
//             }
//         }
//         if(isPrime){
//             ans.push(i)
//         }
//     }
//     function checkPrime(n){
//       for(let i = 2; i< n; i++){
//         if(n%i==0){
//           return false;
//         }
//       }
//       return true;
//    }
//    let current=n+1
//    if(checkPrime(current)){
//     ans.push(current)
//    }
//    return ans
// }
// console.log(printPrimeNumer(15))



// //!(******IMPORTANT*******)
function printprime(n){
    if(n==0||n==1) return false;
    let ans=[]
    for(let i=2;i<=n;i++){
      let isPrime=true
      for(let j=2;j<i;j++){
        if(i%j==0){
         isPrime=false;
         break;
        }
      }
      if(isPrime){
        ans.push(i)
      }
    }
    function checkprime(n){
      for(let i=2;i<n;i++){
        if(n%i==0){
          return false
        }
      }
      return true
    }
    let current=n+1
     if(checkprime(current)){
       ans.push(current)
     }
     return ans
   
   }
   console.log(printprime(16))



  