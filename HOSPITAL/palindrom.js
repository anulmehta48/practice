//check the number is palindrom or not

// function palindrom(n){
//     let copyN=n
//     let reverseNumber=0;
//     while(copyN>0){
//         let lastDigit=copyN%10;
//         reverseNumber=reverseNumber*10+lastDigit
//         copyN=Math.floor(copyN/10)
//     }
//     if(n===reverseNumber){
//         return true
//     }
//     return false
// }
// console.log(palindrom(121))


function palindrom(n){
  let copyN=n;
  let reverseNumber=0
  while(copyN>0){
    let lastDigit=copyN%10;
    reverseNumber=reverseNumber*10+lastDigit
    copyN=Math.floor(copyN/10)
  }
  if(n===reverseNumber){
    return true
  }
  return false

}
console.log(palindrom(1221));