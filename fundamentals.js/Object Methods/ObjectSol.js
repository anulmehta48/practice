//Singleton 
// Object.create() // when we use this way or constructor way to create an objcet then singleton made otherwise not made singleton
// let myobj={name:"Kapil"}
// let result=Object.create(myobj);
// console.log(result.name);



//noramlly we created object using Object literals
// let myObj={}
// let mysym=Symbol("key1")
// console.log(mysym);

// let myObj={
//     name:"Anul",
//     location:"Kota",
//     login:["Mon","Tue"],
//     "my result":500,
//     [mysym]:"mykey1"
// }

// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj.login);
// console.log(myObj["my result"]);
// console.log(myObj[mysym]);

// myObj.location="Jaipur"
// console.log(myObj);
// Object.freeze(myObj)
// myObj.name="Lokesh"
// console.log(myObj);

// delete myObj.location
// console.log(myObj);

let myobj= new Object()
console.log(myobj);

myobj.name="Lokesh"
myobj.city="Kota"
console.log(myobj);