//Array Manipulating;

//How do you create an empty array in javascript.
// let arr=[1,2,3,4,"kota",{name:"anul"},[8,7,3],5] // filled array
// let arr1=new Array(); //empty array and we  can create using new Array(1,2,8) also
// console.log(arr);
// console.log(arr1);

//How do you access the first and last element from array.
// let arr=[2,5,8,6,7,1,3]
// let firstElement=arr[0] //first index element
// console.log(firstElement);
// let arrLength=arr.length // length of array
// console.log(arrLength);
// let lastElement=arr[arr.length-1] //last index element
// console.log(lastElement);

//How do you remove the last element from array.
// let arr=[2,5,8,6,7,1,3]
// let lastElement=arr.pop() //pop remove last element and return removed element of array
// console.log(arr,lastElement);

//How do you add an element of end of the array
// let arr=[2,5,8,6,7,1,3]
// arr.push(10) //push add the element into last index and return new length of array
// console.log(arr);

//How do you remove first element of array
// let arr=[2,5,8,6,7,1,3]
// arr.shift() //shift remove the first element of array and return removed element
// console.log(arr);

//How do you add first element of array
// let arr=[2,5,8,6,7,1,3]
// arr.unshift(10) //unshift add the first element of array and new length of arry
// console.log(arr);

//how do you loop through an array
// let arr=[2,5,8,6,7,1,3]

//it will give index of array element
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// it will give both value and index of array element
// arr.forEach((value,index)=>{
//     console.log(index,value);
// })

// it will gives value of array element
// for(let val of arr){
//     console.log(val);
// }

// how do you check element are exists in array or not.
// let arr=[2,5,8,6,7,1,3,"Anul","KOTA"]
// let target="KOTA"
// function checkElement(arr,target){
//     for(let val of arr){
//         if(val===target){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkElement(arr,target))

// Another way to to this +
// let arr=[2,5,8,6,7,1,3,"Anul","KOTA"]
// let target="KOTA"
// function checkElement(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr.includes(target)){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkElement(arr,target))

// function checkElement(arr,target){
//     let element=arr.includes(target)
//     return element
// }
// console.log(checkElement(arr,target))

//How do you find the index of an element of array
// let arr=[2,5,8,6,7,1,3,"Anul","KOTA"]
// let target=6
// function findIndex(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex(arr,target));

//another way to do using indexOf
// function findIndex(arr,target){
//     let index=arr.indexOf(target)
//     return index
// }
// console.log(findIndex(arr,target));

//splice vs slice
//splice => it is used for add delete and update in same array
//slice => It is used for delete in duplicate array

//shallow copy  => In Shallow copy when we copy the value in another array then it will copy with refrenece so when we changes in one it will refected in both
// let arrA=[1,2,6,3]
// let arrB=arrA
// arrB.pop()
// console.log(arrA);
// console.log(arrB);

//Deep copy =>In Deep copy when we copy the value in another array then it will copy exact new Array so when we changes in one it will refected in only one.
// let arrA=[1,2,6,3]
// let arrB=[...arrA]
// arrB.pop()
// console.log(arrA);
// console.log(arrB);

//concat array
// let arrA=[1,2,6,3]
// let arrB=[5,5,6,8]
// let newArray=arrA.concat(arrB)
// console.log(newArray);

// let arr=[2,5,5,[2,5,[1,2]],8,9]
// let newArray=arr.flat(2) // here 2 use for flat 2 inside array
// console.log(newArray);

// let arr=[2,3,4,[2,5,7],[2,3,4,5,6]]
// let newArray=arr.flat(Infinity) //here Infinity use for flat all inside array
// console.log(newArray);

// Two sum or sum of two element and return the index of those element or Pair sum
// let arr = [3,2,4];
// let target = 6;

// function TwoSum(arr, target) {
//     arr.sort((a,b)=>a-b)
//   let i = 0;
//   let j = arr.length - 1;
//   while (i < j) {
//     if (arr[i] + arr[j] === target) {
//       return [i,j]
//     } else if (arr[i] + arr[j] < j) {
//       i++;
//     } else {
//       j--;
//     }
//   }
//   return 0;
// }
// console.log(TwoSum(arr, target));


let arr = [3, 2, 4];
let target = 6;

function TwoSum(arr, target) {
  const numIndices = new Map();

  for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      
      if (numIndices.has(complement)) {
          return [numIndices.get(complement), i];
        }
        
        numIndices.set(arr[i], i);
        console.log(numIndices);
    }
    
  return 0;
}

console.log(TwoSum(arr, target));


