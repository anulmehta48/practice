//! what is Shallow copy =>  
//this is normal object and we are copy one object value in another object
//here we are doing normal copy so that is copy the refrence address of object that is called call by reference
//so that when you change in one object it reflected in another object also beacuse here object same referece address(memory) are copied happens
//this is called shallow copy beacause of both have same addresss in memory.
// exapmle =>
// let obj={
//     name:"anul"
// }

// let user=obj
// user.name="mohan"

// console.log(obj)   //mohan
// console.log(user) // mohan

// ! What is Deep copy =>
// when we are doing deepcopy of one object into another object then it will copy the all values of original object into copied object
//but here both object have diffrent diffrent memory address so when we do some changes in any one objects values then it will not reflected 
// into another objects that is called deep copy because of both have diffrent memory address.


// so how we can do extact copy so that in object has Deep copy method
// lets used deepcopy how to do -

//? 1. using Object.assign({},objectename) but this is do only first level copy happen and here object values are copied happens
// let obj={
//     name:"anul"
// }

// let user=Object.assign({},obj)
// user.name="mohan"

// console.log(obj)   //anul
// console.log(user) //mohan



//? 2. using spread opertor but this is do only first level copy happen and here  object values are copied happens
// let obj={
//     name:"anul"
// }

// let user={...obj}
// user.name="mohan"

// console.log(obj)   //anul
// console.log(user) //mohan


//*now we have multile level objects then how we can do things but same problem in both Object.assign({},obj) and spread(...) here that is 

// let obj={
//     name:"anul",
//     address:{
//         city:"Noida",
//         state:"UP"
//     }
// }

// let user={...obj}
// user.address.city="Kota"

// console.log(obj)   //city:"kota"
// console.log(user) //city:"Kota"

// now how to copy neseted or multiple level copy that is called deep copy 
//so here we using two type of method 1.JSON.parse(JSON.stringify()) and 2.Lodash packages 

//? 1. using JSON.parse()

// let obj={
//     name:"anul",
//     address:{
//         city:"Noida",
//         state:"UP"
//     }
// }

// let user=JSON.parse(JSON.stringify(obj))
// user.address.city="Kota"

// console.log(obj)   //city:"Noida"
// console.log(user) //city:"Kota"

//now this is purly deep copy and this is mostly is used for making deep copy object because not other ways to do deep copy 
// let obj={
//     name:"anul",
//     address:{
//         city:"Noida",
//         state:"UP"
//     },
//     getDate:function(){
//         return "all data is here"
//     }
// }

// let user=JSON.parse(JSON.stringify(obj))
// user.address.city="Kota"

// console.log(obj)   //all object values 
// console.log(user) //not all object values

// but here also one problem occur when if you have object inside function key values  or Date values then it will not copy that valuse it ignore that valuse
//? so how we can resove that so here Lodash packages used for it

// let obj={
//     name:"anul",
//     address:{
//         city:"Noida",
//         state:"UP"
//     },
//     getDate:function(){
//         return "all data is here"
//     }
// }

// let user=_.cloneDeep(obj)
// user.address.city="Kota"

// console.log(obj)   //all object values 
// console.log(user) //all object values


// destructing => destructing is used to create a variable from any array elements and object properyrs like this -
// using is Array
// let arr=[25,10,26,22,30]
// let [a,b,c,d,e]= arr
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// 2 using in object
// let obj={
//     id:1,
//     title:"my fist note",
//     date:"23/2/2020"
// }

// let {id,title,data}=obj
// console.log(id)
// console.log(title)
// console.log(data)


//Spread operoter (...) =>  spread is used for unpack or expand the values of array ,object and functions like
// 1 normal  way to merge two array 
// let arr=["apple","banana","rebbit"]
// let brr=["loki","tamatar","patato"]
// let newArray=arr.concat(brr)
// console.log(newArray)

// 2. way using spread ...
// let arr=["apple","banana","rebbit"]
// let brr=["loki","tamatar","patato"]
// let newArray=[...arr,...brr]
// console.log(newArray)

//3 way using spread
// const string = 'hello'

// const stringArray = [...string]

// console.log(stringArray)


//REST Parameter=> this is oppiste of spared and it is passed in paramer 
// 1. way of rest
// const [firstTool, ...rest] = ['hammer', 'screwdriver', 'wrench']

// console.log(firstTool)
// console.log(rest)
// 2. way of rest

// function restTest(...args) {
//     console.log(args)
//   }
  
// restTest(1, 2, 3, 4, 5, 6)




//key to value and value to keys in object

// let myObject={
//   name:"anul",
//   age:"24",
//   department:"software"
// }

//1st way
// let newObject={}
// newObject['anul']='name'
// newObject['24']='age'
// console.log(newObject);

//2nd way
// let newObject={}
// Object.entries(myObject).forEach(entry=>{
//     // console.log(entry);
//   let key=entry[0]
//   let value=entry[1]
//   newObject[value]=key
  
// })
// console.log(newObject)


// let arr=[2,12,22]
// arr.concat()