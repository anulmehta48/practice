//merge the two array in one array
// this is normal way of merge two array
// let arr1=[5,3,6,1,4,2];
// let arr2=[12,18,11,9,7]

// function mergetwoarray(arr1,arr2){
//     for(let i=0;i<arr2.length;i++){
//         arr1.push(arr2[i])
//     }
//    return arr1
// }
// console.log(mergetwoarray(arr1,arr2))



//merge two sorted array in one new array 
//this is important questions *****
// let arr1=[1,3,5,7,9];
// let arr2=[2,4,6,8]

// function mergetwoarray(arr1,arr2,){
//     let n=arr1.length;
//     let m=arr2.length;
//     let newArray=new Array()
//     let i=0;
//     let j=0;
//     let k=0;

//     while(i<n && j<m){
//         if(arr1[i]<arr2[j]){
//             newArray[k]=arr1[i];
//             k++;
//             i++
//         }else{
//             newArray[k]=arr2[j];
//             k++;
//             j++;
//         }
//     }
    
//     while(i<n){
//         newArray[k]=arr1[i];
//         k++;
//         i++
//     }
//     while(j<m){
//         newArray[k]=arr2[j];
//         k++;
//         j++
//     }

//     return newArray
// }
// console.log(mergetwoarray(arr1,arr2))







let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8]

function merge(arr1,arr2){
  let  n=arr1.length
  let  m=arr2.length

  let newArray=new Array()
  let i=0;
  let j=0;
  let k=0;

  while(i<n && j<m){
    if(arr1[i]<arr2[j]){
        newArray[k]=arr1[i];
        k++;
        i++;
    }else{
        newArray[k]=arr2[j];
        k++;
        j++
    }
  }
  while(i<n){
    newArray[k]=arr1[i];
    k++;
    i++
  }
  while(j<m){
    newArray[k]=arr2[j];
    k++;
    j++
  }
  return newArray
}
console.log(merge(arr1,arr2))