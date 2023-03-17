//find the positive number is in power of 2 using recursion 

// function CheckPower(number){
//     if(number==1) return true;
//     return recursive(number,2);
// }

// function recursive(number,tempOfPower2){
//     if(tempOfPower2==number){
//         return true;
//     }else if(tempOfPower2>number){
//         return false;
//     }else{
//         return recursive(number,tempOfPower2*2)
//     }
// }

// console.log(CheckPower(8))

// take out all 2^30 powers and campare with given number if it is equal then true else false
// function CheckPower(n){
//     for(let i=0;i<=30;i++){
//         let ans=Math.pow(2,i)
//         if(ans==n){
//             return true
//         }
//     }
//     return false
// }
// console.log(CheckPower(8))


//Check usin setbit 
function CheckPower(n){
    let ans=n.toString(2)
    if(ans==1){
        return true
    }
    return false
}
console.log(CheckPower(16))