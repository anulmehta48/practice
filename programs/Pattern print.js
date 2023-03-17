//print Left Triangle Pattern

// *
// **
// ***
// ****
// *****

// function printLesftStar(n){
//     let result=""
//     for(let i=0;i<=n;i++){
//         for(let j=0;j<i;j++){
//            result+="*"
//         }
//         result+="\n"
//     }
//     return result;
// }
// console.log(printLesftStar(5))

// Print Downword Triangle Pattern
// *****
// ****
// ***
// **
// *
// function printLesftStar(n){
//     let result=""
//     for(let i=0;i<=n;i++){
//         for(let j=0;j<n-i;j++){
//            result+="*"
//         }
//         result+="\n"
//     }
//     return result;
// }
// console.log(printLesftStar(5))

// print Right Pascal Star Pattern

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// function printPascalStars(n){
//   let result=""
//   for(let i=0;i<=n;i++){
//     for(let j=0;j<i;j++){
//         result+="*"
//     }
//     result+="\n"
//   }
//   for(let i=0;i<n;i++){
//     for(let j=0;j<n-i;j++){
//         result+="*"
//     }
//     result+="\n"
//   }
//   return result
// }
// console.log(printPascalStars(5))

//print Right Triangle
//     *
//    **
//   ***
//  ****
// *****

// function RightTriangle(n){
//     let result=""
//     for(let i=1;i<=n;i++){
//         for(let j=0;j<n-i;j++){
//             result+=" "
//         }
//         for(let k=0;k<i;k++){
//             result+="*"
//         }
//         result+="\n"
//     }
//     return result
// }
// console.log(RightTriangle(5))

//Print Left pascal Star pattern

//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// function LeftPascalTriangle(n){
//     let result=""
//     for(let i=1;i<=n;i++){
//         for(let j=0;j<n-i;j++){
//             result+=" "
//         }
//         for(let k=0;k<i;k++){
//             result+="*"
//         }
//         result+="\n"
//     }
//     for(let i=1;i<n;i++){
//         for(let j=0;j<i;j++){
//             result+=" "
//         }
//         for(let k=0;k<n-i;k++){
//             result+="*"
//         }
//         result+="\n"
//     }
//     return result
// }
// console.log(LeftPascalTriangle(5))

//Print Pyramid pattern
//     *
//    ***
//   *****
//  *******
// *********

// function PyramidPrint(n){
//     let result=""
//     for(let i=1;i<=n;i++){
//         for(let j=1;j<=n-i;j++){
//             result+=" "
//         }
//         for(k=0;k<2*i-1;k++){
//             result+="*"
//         }
//         result+="\n"
//     }
//     return result
// }
// console.log(PyramidPrint(5))

//Reverse pyramid pattern

// *********
//  *******
//   *****
//    ***
//     *

// function PyramidPrint(n){
//     let result=""
//     for(let i=0;i<n;i++){
//         for(let j=0;j<i;j++){
//             result+=" "
//         }
//         for(k=0;k<2*(n-i)-1;k++){
//             result+="*"
//         }
//         result+="\n"
//     }
//     return result
// }
// console.log(PyramidPrint(5))

// Print
