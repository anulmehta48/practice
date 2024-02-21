//what is Object => Object are Contain Many values in Key:Value pairs
//what is Return => {}
// what is syntax => const variable={ "name":"anul"}
//const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};



//Objects Methods** :-
// const myProfile={
//     "name":"anul",
//     "graduation":"btech",
//     "year":"2020",
//     "college":"RTU"
// }
// this is return all details in object form data in key-valie pairs
// console.log(myProfile)

//these are all return object key ,values, entries in array of[key,value] pair or array forms
// let key=Object.keys(myProfile)
// console.log(key)
// let val=Object.values(myProfile)
// console.log(val)
// let entry=Object.entries(myProfile)
// console.log(entry)

//how can i inseart a key or a value
//myProfile.address="kota"//this is dot . notaion
//myProfile['pincode']=324005 // this is object [''] notation
//myProfile.pincode=324005 // this is object  dot. notation
// console.log(myProfile)
// myProfile.our-country="india"//this is not work or given error or SyntaxError
//myProfile['our-country']="india"//this is work properly
// console.log(myProfile)

//how i can access the properties of oject:
// let coll=myProfile.college
// console.log(coll)
// let n=myProfile['name']
// console.log(n)
// let age=myProfile.age
// console.log(age)//if not found return undefinded

//how to add a new value in object if only key is present :
// const pro={}
// const key="state"
// pro[key]="rajasthan"
// console.log(pro)

//How to make keys to value and values to key in objects-
// let object={
//     name:"Anul",
//     age:"25",
//     department:"state"
// }
// one by one only change like this-
// let NewObject={}
// NewObject["Anul"]="name"
// console.log(NewObject)

//when we have to cahnge all key into value and all values into key
// Object.entries(object).forEach((entry)=>{
//     let key=entry[0];
//     let value=entry[1];
//     NewObject[value]=key
// })
// console.log(NewObject)



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


//REST Parameter=> this is oppiste of spared and it is passed in parameter
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

// let newObject={}
// newObject['anul']='name'
// newObject['24']='age'

// let newObject={}
// Object.entries(myObject).forEach(entry=>{
//   let key=entry[0]
//   let value=entry[1]
//   newObject[value]=key
  
// })

// console.log(newObject)


// let arr=[2,12,22]
// arr.concat()


// const course={
//     coursename:"javascript",
//     price:1000,
//     instructor:"anul mehta"
// }

// const {instructor:cName,coursename,price}=course
// // console.log(instructor);
// console.log(cName);


// const myfun=()=>{
//     console.log(this);
// }
// myfun()

function myfun(){
    console.log(this);
}
myfun()