// let obj = {}

// let arr1 =["name","city","state"]
// let arr = ["vikram","bhilwara","Rajastahn"]

// how to set key-values in any objects:-
// for(let i=0;i<arr1.length;i++){
//  for(let j=0;j<arr.length;j++){
//      obj[arr1[i]]=arr[i]
//  }
// }
// console.log(obj)

// how to set key-values in any objects:-
// let value=0
// for(let i of arr1){
//     obj[i]=arr[value]
//     value++
    
// }
// console.log(obj)


// how to add value of key in any object :-
// let obj={}
// let arr1 =["name","city","state"]
// for(let i of arr1){
//     obj[i]=1
//     console.log(obj)


// }
// console.log(obj)

//for loop in (let in arr1 ) how works:-
// let obj={}
// let arr1 =["name","city","state"]
// for(let i in arr1){
//     obj[i]=1
//     console.log(obj)


// }
// console.log(obj)

// let obj={}
// let arr=[100,20002,5,1,73,1,4,752,124,422,87,3,3,4,54,4,4]

// //how to add value of key in any object :-
// // this is only contain unique items in the objet
// for(let i of arr){
//     obj[i]=1
//     // console.log(obj)
// }
// console.log(obj)

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
// myProfile['our-country']="india"//this is work properly
// console.log(myProfile)

//how i can access the properties of boject:
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

// const pro={}
// pro.city="kota"
// const key="state"
// pro[key]="rajasthan"
// Object.assign(pro,{hello:"anul",say:"goodmoring"})//assign is used for addd multiple values at one time
// console.log(pro)


//in this use spreat operator when use this we use one values are used with anothers values but we have to used let type varible 
// let array={name:"anul"}
// array={...array,city:"kota"}
// console.log(array)

// //how to rename the key names :
// const obj = {oldKey: 'value'};
// obj['newKey'] = obj['oldKey'];
// delete obj['oldKey'];
// console.log(obj); // 👉️ {newKey: 'value'}


// let obj = {}

// let arr1 =["name","city","state"]
// let arr = ["vikram","bhilwara","Rajastahn"]

// how to set key-values in any objects:-
// for(let i=0;i<arr1.length;i++){
//  for(let j=0;j<arr.length;j++){
//      obj[arr1[i]]=arr[i]
//  }
// }
// console.log(obj)

// how to set key-values in any objects:-
// let value=0
// for(let i of arr1){
//     obj[i]=arr[value]
//     value++
//     // console.log(obj)
// }
// console.log(obj)


// let obj={}
// let arr=[2,4,8,3,51,2,1,24,6,9,8,8,22,3,3,4,7,5,1,5,2,3,6,5]
// let arr=["c","h","b","g","t","r","k","a","e","r","k","l","p"]

//this is by using specail in or of for loop :-
// for(let i of arr){
//     if(obj[i]){
//         obj[i]++
//     }
//     else{
//         obj[i]=1
//     }
// }
// console.log(obj)


//this is by using Normal loop
// for(let i=0;i<arr.length;i++){
//     let a=arr[i]
//     if(obj[a]==undefined){
//         obj[a]=1
//     }else{
//         obj[a]=obj[a]+1
//     }
// }
// console.log(obj)


// let obj={}
// let arr=[2,3,4,5,6]
// let brr=[7,8,9,10,11]
// let lkr=brr.map(x=>x*2)
// // console.log(lkr)
// for(let i of arr){
//    let value=0
//    obj[i]=lkr[value]
//    value++
// }
// console.log(obj)


