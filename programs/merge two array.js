//merge the two array in one array in normal order
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

//unsig spread opertore (...) merge two array in soted order
// let arr1=[5,3,6,1,4,2];
// let arr2=[12,18,11,9,7]
// function mergetwoarray(arr1,arr2){
//  let newArray=[...arr1,...arr2].sort((a,b)=>a-b)
//  return newArray
// }
// console.log(mergetwoarray(arr1,arr2))

// using concate  merge two array in soted order
// let arr1=[5,3,6,1,4,2];
// let arr2=[12,18,11,9,7]
// let newArray=arr1.concat(arr2).sort((a,b)=>a-b)
// console.log(newArray)

//merge two sorted array in one new array
//this is important questions *****
let arr1 = [2,5,6,3,5];
let arr2 = [1,8,6,14,9];

function mergetwoarray(arr1,arr2,){
    let n=arr1.length;
    let m=arr2.length;
    let newArray=new Array()
    let i=0;
    let j=0;
    let k=0;

    while(i<n && j<m){
        if(arr1[i]<arr2[j]){
            newArray[k]=arr1[i];
            k++;
            i++
        }else{
            newArray[k]=arr2[j];
            k++;
            j++;
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
console.log(mergetwoarray(arr1,arr2))

// let arr1 = [2,5,6,3,5];
// let arr2 = [1,8,6,14,9];

// function mergeArray(arr1, arr2) {
//   let n = arr1.length;
//   let m = arr2.length;
//   let newArray = new Array();
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < n && j < m) {
//     if (arr1[i] < arr2[j]) {
//       newArray[k] = arr1[i];
//       k++;
//       i++;
//     } else {
//       newArray[k] = arr2[j];
//       k++;
//       j++;
//     }
//   }
//   while (i < n) {
//     newArray[k] = arr1[i];
//     k++;
//     i++;
//   }
//   while (j < m) {
//     newArray[k] = arr2[j];
//     k++;
//     j++;
//   }
//   return newArray;
// }
// console.log(mergeArray(arr1, arr2));
