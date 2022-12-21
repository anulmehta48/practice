// // this is using by two pointer approach;
// // here is time complexity is O(n1+n2)
// // here is space complexity is O(1)
// let arr1=[2,3,5,7,8,0,0,0,0]
// let arr2=[1,4,8,9]
// let n1=5
// let n2=4
// function mergeArray(arr1,arr2,n1,n2){
//     let p=n1-1
//     let q=n2-1
//     let r=n1+n2-1
//    while(q>=0){
//     if(p>=0 && arr1[p]>arr2[q]){
//         arr1[r]=arr1[p]
//         r--;
//         p--
//     }else{//p>=0 && arr1[p]<arr2[q]
//         arr1[r]=arr2[q]
//         r--;
//         q--
//     }
//    }
// //    console.log(arr1)
//    return arr1
// }
// console.log(mergeArray(arr1,arr2,n1,n2))

