// function prime(n){
//     if(n==0||n==1) return false;
//     if(n==2) return true;
//     for(let i = 2; i< n; i++){
//         if(n%i == 0) return false;
//     }
//     return true;
// }
// console.log(prime(6));

// function printPrimeNumer(n){
//     if(n==0||n==1) return false;
//     if(n==2) return true;
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             return "this is not prime"
//         }else{
//             return "this is prime"
//         }
//     }
// }
// console.log(printPrimeNumer(5))


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
//     let N=20
//     for(let i=1;i<=N;i++){
//         if(primeNumber(i)){
//             console.log(i)
//         }
//     }

// }
// primeNumber()

//this is run on only on online complre
// function printPrime(n) {
//   let count = 0;
//   let j = 1;
//   while (j <= n) {
//     if (n % j == 0) {
//       count++;
//     }
//     j++;
//   }
//   if (count == 2) {
//     console.log("this is prime");
//   } else {
//     console.log("this is not prime");
//   }
// }
// printPrime(19);

// program to check if a number then print next upomming prime number;
// function printPrimeNumer(n){
//     if(n==0||n==1) return false;
//     let ans=[]
//     for(var i=2;i<=n;i++){
//         for(var j=2;j<i;j++){
//             if(i%j==0){
//                 break;
//             }
//         }
//         if(i==j){
//             ans.push(i)
//         }
        
//     }
//     return ans
// }
// console.log(printPrimeNumer(10))