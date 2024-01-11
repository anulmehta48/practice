// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let yourArray=["new","elements"]
// let yourArray2=["new","elements","klpj"]
// let newArray=myArray.concat(yourArray ,yourArray2)
// console.log(newArray)
// let newFlateArray=newArray.flat(Infinity) //It will combiend all array into one single array
// console.log(newFlateArray);


let arr=[2,3,4,[2,5,7],[2,3,4,5,6]]
let newArray=arr.flat(Infinity)
console.log(newArray);