//!Time Complexity => One perticular input for how much time will be taken by alogorithm that is called time complexity.
//!Space Complexity => One perticular input for how much space will be taken by alogorithm that is called space complexity.

//! This is a tool or machanism or it is brillent thing that tell you which approcahes is a better and effecient for your solution.

//! This is representing using O(1) for one unit of time and O(n) for n unit of time that is called Big(Oh) Notation in Data-Structure.

//! Big(Oh) =>  Big O is the process that define how the program perform as the input grows.
//!             and Big O is WorstCase Senario rather than BestCase or AvgCase.
//! Big(O)                           Big(0)                                 Big-(omega)

//! Rules => 1.Constant don't matters it will ignored always
//!          2.Smaller term don't matters and larger term domanating.

// Example=> 1
// Add  Numbers 1 to 100
// function addUptoHundered(n){
//     let sum=0;
//     for(let i=0;i<=n;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(addUptoHundered(10));
//TC-O(n)
//SC-O(1)

// Add  Numbers 1 to 100  in another way
// function addUptoHundered(n) {
//   return (n * (n + 1)) / 2;
// }
// console.log(addUptoHundered(10));
//TC-O(1)
//SC-O(1)

//todo here we see we got two appoaches and both are different but how we know which one is better or efficent because it also depends 
//todo if i am running on different diffrent machine so that Time & Space Complexity come itno picture for choose which approach is better or efficient.
//todo and now it is independent of machine and input.


//! O(1) < O(logn) < O(n) <O(nlogn) < O(n^2) < O(n^3) ..........



//Example-2
// print 1 to 10 up and then down

// function printUpandDown(n){
//     console.log("Going Up");
//     for(let i=0;i<=n;i++){
//         console.log(i);
//     }
//     console.log("At the top!\nGoing Down");
//     for(let j=n-1;j>=0;j--){
//         console.log(j);
//     }
//     console.log("Back Down Bye");
// }
// console.log(printUpandDown(10));
//TC-O(n)  => O(n) + O(n) = O(2n) =>O(n) //single loop are addition
//SC-O(1)


//Example -3
// print AllPair

// function PrintAllPair(n){
//     for(let i=0;i<=n;i++){
//         for(let j=0;j<=n;j++){
//             console.log(i,j);
//         }
//     }
// }
// console.log(PrintAllPair(5));
//TC-O(n^2)  =>O(n) * O(n) = O(n^2) =>O(n^2) //nested loop are multiply
//SC=O(1)


//Example-4
// Number of Half

// function NumberOfHalf(n){
//     let count=0;
//     while(n>1){
//         n=n/2
//         count++
//     }
//     return count
// }
// console.log(NumberOfHalf(10));
//TC-O(logn) => When thing happen half then it will always logerithm so logn
//SC-O(1)

// Example -5
// Toatal number of half

// function TotalNumberOfHalf(n){
//     let total=0;
//     for(let i=0;i<n;i++){
//         total=total+NumberOfHalf(n)
//     }
//     return total
// }
// console.log(TotalNumberOfHalf(10));
//TC-O(nlogn) => O(n) * (logn) = O(nlogn) //nested and Half
//SC-O(1) 



// let A="hello"
// let B="java"
// function StringUpperCase(A,B){
//     let TotalLength=A.length+B.length
//     let LexComparison=A.localeCompare(B)> 0 ? "Yes" :"No"
//     let FirstStr=A.substr(0,1).toUpperCase()+A.substr(1)
//     let SecondStr=B.substr(0,1).toUpperCase()+B.substr(1)
//     console.log(TotalLength);
//     console.log(LexComparison);
//     console.log(FirstStr+" "+SecondStr)
// }
// console.log(StringUpperCase(A,B));



let A="hello"
let B="java"
function StringUpperCase(A,B){
    let TotalLength=A.length+B.length
    let LexComparison;
    if(A.localeCompare(B)> 0 ){
        LexComparison="Yes"
    }else{
        LexComparison="No"
    }
       
    let FirstStr=A.substr(0,1).toUpperCase()+A.substr(1)
    let SecondStr=B.substr(0,1).toUpperCase()+B.substr(1)
    console.log(TotalLength);
    console.log(LexComparison);
    console.log(FirstStr+" "+SecondStr)
}
console.log(StringUpperCase(A,B));