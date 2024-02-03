// const user = [
//   { firstName: "Akashy", lastName: "Saini", age: 26 },
//   { firstName: "Anul", lastName: "Mehta", age: 25 },
//   { firstName: "Mohit", lastName: "Gupta", age: 25 },
//   { firstName: "Rajkumar", lastName: "Singh", age: 34 },
//   { firstName: "Mohan", lastName: "Singh", age: 35 },
// ];

// Q1. Find the List of fullName of array of objects? example=> ["Akashy Saini", "Anul Mehta"];
// const output = user.map((x) => x.firstName +" " + x.lastName);
// console.log(output);

// Q1. Find the how many user are have same age?
// const output = user.reduce((acc, curr) => {
//   if(acc[curr.age]){
//     acc[curr.age]++
//   }else{
//     acc[curr.age]=1
//   }
//   return acc
// }, {});
// console.log(output);

// Q3.Find all the Users FirstName that have age is less than 30?
// const output = user.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

// Q.4 Find all the Users FirstName that have age is less than 30? using reduce
// const output = user.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(output);

// const output = user.reduce((acc, curr) => {
//     if (curr.age < 30) {
//       acc[curr.age]=curr.firstName
//     }
//     return acc;
//   }, {});
//   console.log(output);

// ******************************************************************

// const product = [
//   { id: 1, name: "laptop", price: 999, inStock: true },
//   { id: 2, name: "Smartphone", price: 399, inStock: false },
//   { id: 3, name: "Tablet", price: 199, inStock: true },
//   { id: 4, name: "Headphones", price: 99, inStock: false },
//   { id: 5, name: "Camera", price: 599, inStock: true },
// ];

// Q5.Filter the items based on a specific condition (e.g. items with a certain property value)and
// transform data into a new formate

// const output=product.filter((x)=>x.inStock==true).map((x)=>({name:x.name,price:x.price}))
// console.log(output);

// *******************************************************************************

// const price = [
//   { id: 1, value: 30 },
//   { id: 2, value: 10 },
//   { id: 3, value: 50 },
//   { id: 4, value: 20 },
//   { id: 5, value: 40 },
// ];

// Q6. Impliment a function to short the object based on that property. Additionally, add a ranking to each object
//  based on its position in the array.
// const output=[...price].sort((a,b)=>a.value-b.value).map((x,index)=>({...x,rank:index+1}))
// console.log(output);


// *************************************************************************************

const user=[
    {id:1,name:"Jonh",age:24},
    {id:2,name:"kavin",age:29},
    {id:3,name:"jacab",age:21},
]
const cities=[
    {id:1,city:"Bhopal"},
    {id:2,city:"Kota"},
    {id:3,city:"Jaipur"},
]
// Q7. There are two array one is of users and others if of cities they live in make a new array which contains the
//   unified data. help- match id with id then combind both in one array of object.

const output=user.map((x1)=>({...x1,...cities.find((x2)=>x1.id ===x2.id)}))
console.log(output);