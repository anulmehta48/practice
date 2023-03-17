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
//myProfile['pincode']=324005 // this is object [''] notetion
//myProfile.pincode=324005 // this is object [''] notetion
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
