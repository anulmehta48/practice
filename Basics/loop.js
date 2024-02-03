let arr=[1,2,3,4]
let obj={
    name:"anul",
    age:25
}
// 1. for loop =>
// this lopp gives us index of array and using these index we can findout any element value of array.
// it is used for iteration of array and go in every element of array
// it is common loop in programming in every where it used like in -array ,string
// for(let i=0;i<obj.length;i++){
//     console.log(i);
// }

// 2. for of loop =>
// this loop gives us direct values of array.
// this is used in array and string. and for loop things are remain same
// But it used in Map object for [key, value] pair values
// for(let i of arr){
//     console.log(i);
// }


//3.for in loop=>
//  this loop gives us index of array element incase of array and incase of object it gives us keys of object that 
//  means it indicates index in array as well as objects
// it used in array ,string and also object
// for(let i in arr ){
//     console.log(i);
// }
// for(let i in obj ){
//     console.log(i);
// }

//4.forEach loop=>
// this loop gives us index as well as value of array at same time 
// this is not apply on Object but it work with Map()
arr.forEach((value,index)=>{
    console.log(index,value);
})