//example :-
//we have to find the frequecy from one array to another array in array of element 1 is square of array of 2 elements are same or not
//here we apply fisrt brute Apporach in this aporach we first check the the both array have same length is avaliable or not
//if same then check the square of array 1 elements is does present in array of 2 elements
//but in this aporach in TC is O(n^2)
//
let arr1=[2,3,4,6]
let arr2=[4,9,16,37]
function same(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i<arr1.length;i++){
        console.log(i)//this is for for loop iteration one by one 
        let correctIndex=arr2.indexOf(arr1[i]**2) //this line check where is square element index is present and return index if not then -1 
        console.log(correctIndex)//this is for index of square element
        if(correctIndex ==-1){
            return false
        }
       a=arr2.splice(correctIndex,1)
       console.log(a)//if element is present then delete that 
    }
    return true
}
console.log(same(arr1,arr2))
// // this is sloved but TC is O(n^2)


//****BEST WAY TO SOLVE THE PROBLEM**************//
// let arr1=[2,3,4,6]
// let arr2=[4,9,16,36]
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length){
//         return false
//     }
//     let freqCounter1={}
//     let freqCounter2={}

//     for(let val of arr1){
//         freqCounter1[val]=(freqCounter1[val]||0)+1
//     }
//     for(let val of arr2){
//         freqCounter2[val]=(freqCounter2[val]||0)+1
//     }
//     for(let key in freqCounter1){
//         // console.log(key)
//         if(!(key**2 in freqCounter2)){
//             return false
//         }
//         if(freqCounter2[key**2] !== freqCounter1[key]){
//             return false
//         }
//     }
//     return true
// }
// console.log(same(arr1,arr2))
//here is Time Complexity is O(n) //taking for loop for itrate elements
//here is Space Complexity is O(2n) =O(n) //takeing frequcounter





//solve by self 
// let arr1=[2,1,3]
// let arr2=[1,4,9]

// function match(arr1,arr2){
//   if(arr1.length != arr2.length) return false;
//   let frq1={}
//   let frq2={}
//   for(let val of arr1){
//     if(frq1[val]){
//         frq1[val]++
//     }else{
//         frq1[val]=1
//     }
//   }
//   for(let val of arr2){
//     if(frq2[val]){
//         frq2[val]++
//     }else{
//         frq2[val]=1
//     }
//   }
  
//   for(let key in frq1){
//     if(frq1[key]!=frq2[key**2]){
//         return false
//     }
//     if(frq2[key**2]!=frq1[key]){
//         return false
//     }
//   }
//   return true
// }
// console.log(match(arr1,arr2))