//this is the best way to solve the longgest comman prefix;
/,*********this important asked interview quetions**********/
// let arr=["ANUL","ANMOL","ANAMIKA","ANOKHA"]
// function loggestprefix(arr){
//     if(arr.length==0){
//         return ""
//     }
//     if(arr.length==1){
//         return arr[0]
//     }
//     let ans=[]
////    lets takeElement=arr[0] and iterrate the the loop on it check its element are peresent in other on rot
//    for(let i=0;i<arr[0].length;i++){
//         let ch=arr[0][i]
//         let flag=true
//         for(let j=1;j<arr.length;j++){
//             if(arr[j].length <i|| ch!=arr[j][i]){
//                 flag=false;
//                 break;
//             }
//         }
//         if(flag==false){
//             break;
//         }else{
//             ans.push(ch)
//         }
//    }
//    return ans;

// }
// console.log(loggestprefix(arr))




// this is leetcode solution
// var longestCommonPrefix = function(str) {

//     if(str.length == 0){
//         return ""
//     }
//     if(str.length == 1){
//         return str[0]
//     }
//     let i =0
//     str.sort()
//     let end = str[0].length
//     while(i<end && str[0][i]==str[str.length-1][i])
//         i++
//         let store = str[0].substring(0,i)
//     return store

// }

// console.log(longestCommonPrefix(["ANUL", "ANSHUL", "ANAMIKA"]))