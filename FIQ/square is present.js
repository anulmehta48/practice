//we have to find the frequecy from one array to another array in array of element 1 is square of array of 2 elements are same or not
//here we apply fisrt brute Apporach in this aporach we first check the the both array have same length is avaliable or not
//if same then check the square of array 1 elements is does present in array of 2 elements
//but in this aporach in TC is O(n^2)
// let arr1=[2,3,4,5]
// let arr2=[4,4,16,25]

// function Match(arr1,arr2){
//   if(arr1.length!=arr2.length){
//     return false;
//   }
//   for(let i=0;i<arr1.length;i++){
//     console.log(i)
//     let presentElement=arr2.indexOf(arr1[i]**2)
//     console.log(presentElement)
//     if(presentElement==-1){
//       return false;
//     }
//     a=arr2.splice(presentElement,1)
//     console.log(a)
//   }
//   return true;
// }
// console.log(Match(arr1,arr2))


//by using for loop /two for loop
//here is also Tc is O(n^2)
// let arr1=[2,3,4,5]
// let arr2=[25,4,9,16]
// function Match(arr1,arr2){
//   if(arr1.length!=arr2.length){
//     return false
//   }
//   for(let i=0;i<arr1.length;i++){
//     let isSquare=false;
//     for(let j=0;j<arr2.length;j++){
//       if(arr1[i]**2 == arr2[j]){
//         isSquare=true
//       }
//       if(j==arr2.length-1){
//         if(!isSquare){
//           return false
//         }
//       }
//     }
//   }
//   return true
// }
// console.log(Match(arr1,arr2))


//so now we have to Optimize this solution in O(N) so that Frequency counter comes into the picture here:-
//
// let arr1=[2,3,4,5]
// let arr2=[25,4,9,16]
// function freqCounter(arr1,arr2){
// let frequcounter1={}
// let frequcounter2={}

// if(arr1.length != arr2.length){
//     return false
// }

// for(let i of arr1){
//     if(frequcounter1[i]){
//         frequcounter1[i]++
//     }else{
//         frequcounter1[i]=1
//     }
// }
// for(let i of arr2){
//     if(frequcounter2[i]){
//         frequcounter2[i]++
//     }else{
//         frequcounter2[i]=1
//     }
// }
// for(let j in frequcounter1){
//     if(!(j**2 in frequcounter2)){
//         return false
//     }
//     if(frequcounter2[j**2] != frequcounter1[j]){
//         return false
//     }
// }
// return true
// }
// console.log(freqCounter(arr1,arr2))

// let arr1=[2,3,4,5]
// let arr2=[25,4,9,16]

// function squareCheck(arr1,arr2){
    
//     let freq1={}
//     let freq2={}
    
//     if(arr1.length != arr2.length){
//         return false;
//     }
//     for(let val of arr1){
//         if(freq1[val]){
//             freq1[val]++
//         }else{
//             freq1[val]=1
//         }
//     }
//     for(let val of arr2){
//         if(freq2[val]){
//             freq2[val]++
//         }else{
//             freq2[val]=1
//         }
//     }

//     for(let key in freq1){
//         if(!(key**2 in freq2)){
//             return false;
//         }
//         // if(freq1[key] !=freq2[key**2]){
//         //     return false
//         // }

//         if(freq2[key**2] !=freq1[key]){
//             return false
//         }
//     }
//     return true;
// }
// console.log(squareCheck(arr1,arr2))