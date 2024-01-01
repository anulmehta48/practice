//check arr1 element are present in arr2 and return the element
// let arr1=[2,5,7,9,12,3]
// let arr2=[2,5,3]
// function checkarray(arr1,arr2){
//     let result=[]
//     for(let i=0;i<arr1.length;i++){
//         let element=arr1[i]
//         for(let j=0;j<arr2.length;j++){
//             if(element==arr2[j]){
//                 result.push(arr2[j])
//             }
//         }
//     }
//     return result
// }
// console.log(checkarray(arr1,arr2))

//check arr1 element are present in arr2 and return the true and false
// let arr1=[2,5,7,9,12]
// let arr2=[1,2,3]
// function checkarray(arr1,arr2){
    // let result=[]
//     for(let i=0;i<arr2.length;i++){
//         if(arr1[i]!=arr2[i]){
//             return false
//         }
//     }
//     return true
// }
// console.log(checkarray(arr1,arr2))




// let arr1=[2,5,7,9,12]
// let arr2=[1,2,3]
// function checkarray(arr1,arr2){
//     let count=0
//     for(let i=0;i<arr2.length;i++){
//         for(let j=0;j<arr1.length;j++){
//             if(arr2[i]==arr1[j]){
//                 arr2[i]=-1
//                 count++
//                 break;
//             }
//         }
//     }
//     return count
// }
// console.log(checkarray(arr1,arr2))








//check arr1 element are present in arr2 and return the element or index 
// let arr1=[2,5,7,9,12]
// let arr2=[1,5]
// function checkarray(arr1,arr2){
//     let result=[]
//     for(let i=0;i<arr1.length;i++){
//         let element=arr1[i]
//         for(let j=0;j<arr2.length;j++){
//             if(element==arr2[j]){
//                 result.push(element[i])
//             }
//         }
//     }
//     return result
// }
// console.log(checkarray(arr1,arr2))
//not work now


// let arr1=[1,2,2,2,3,4]
// let arr2=[2,2,3,3]
// function checkArray(arr1,arr2){
//     let i=0;
//     let j=0;
//     let elemenet=[]
//     while(i<arr1.length && j<arr2.length){
//         if(arr[i]==arr[j]){
//             elemenet.push(arr1[i])
//             i++;
//             j++
//         }else if(arr1[i]<arr2[j]){
//             i++
//         }else{
//             j++
//         }
//     }
// }
// console.log(checkArray(arr1,arr2))