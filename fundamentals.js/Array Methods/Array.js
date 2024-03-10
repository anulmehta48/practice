// What is Array = Array is the special Variable object that can store many types of Values.
// What is return = It is Return Array of list and type is Object
// what is syntax = []
//example:
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// console.log(myArray)


//Array Methods:-**
// 1.push()=> It Add one or more elements to the end of the array and return new length of the array
//            It takes the value direct in push method but if you pass using [] then it add it like one element of all values.

//example:-
// let arr=[2,4,6,8,10,12]
// let result=arr.push(16)
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.push(16,18)
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.push([16,18])
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.push()
// console.log(result);
// console.log(arr);


// 2.pop()=> It Removes the last element from an array and returns removed element.
//           It not take any arguments if you pass then nothing will happen it directly only removed one element form last index
//example:-
// let arr=[2,4,6,8,10,12]
// let result=arr.pop()
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.pop()
// console.log(result);
// console.log(arr);


//3.unshift()=> Adds one or more elements to the beginning of an array and returns the new length of the array.
//             It takes the value direct in unshift method but if you pass using [] then it add it like one element of all values.
 //example:-
// let arr=[2,4,6,8,10,12]
// let result=arr.unshift(100)
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.unshift(100,200)
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.unshift([100,200])
// console.log(result);
// console.log(arr);

// let arr=[2,4,6,8,10,12]
// let result=arr.unshift()
// console.log(result);
// console.log(arr);



// 4.shift()=>It Removes the first element from an array and returns that element. This operation also shifts other elements to lower indices.
//           It not take any arguments if you pass then nothing will happen it directly only removed one element form last index
// example:-
// let arr=[2,4,6,8,10,12]
// let result=arr.shift()
// console.log(result);
// console.log(arr);


// let arr=[2,4,6,8,10,12]
// let result=arr.shift(4)
// console.log(result);
// console.log(arr);


//5 join()=>It will convetred into string and store without []
// let arr=[2,4,6,8,10,12]
// let result=arr.join()
// console.log(typeof result);
// console.log(arr);


//6. slice()=>
// let arr=[2,4,6,8,10,12]
// console.log(arr);
// let result1=arr.slice(1,5)
// console.log(result1);
// console.log(arr);
// let result2=arr.splice(1,3)
// console.log(result2);
// console.log(arr);


//if we using push to merge two array then it will merge with nested array like
// let arr1=[1,2,3,4]
// let arr2=[6,7,8,9]
// let result=arr1.push(arr2)
// console.log(result);
// console.log(arr1);

// let arr1=[1,2,3,4]
// let arr2=[6,7,8,9]
// let result=arr1.concat(arr2)
// console.log(result);

// using spread operator
// let arr1=[1,2,3,4]
// let arr2=[6,7,8,9]
// let arr3=[0]
// let result=[...arr1,...arr2,...arr3]
// console.log(result);

// let arr=[6,7,8,9,[2,5,8,,[55,5,2,1,2],55,[5,4]]]
// let result=arr.flat(Infinity)
// console.log(result);

// console.log(Array.isArray("Anul"));
// console.log(Array.from("Anul"));
// console.log(Array.from({name:"Anul"}));

// const obj = {name: "Anul", age: 30};

// console.log(Array.from(Object.keys(obj))); // Output: ["name", "age"]
// console.log(Array.from(Object.values(obj))); // Output: ["Anul", 30]
// console.log(Array.from(Object.entries(obj))); // Output: [["name", "Anul"], ["age", 30]]



// JavaScript provides a variety of methods that you can use with arrays to perform different operations efficiently. Here's a list of some commonly used array methods in JavaScript:

// push(): Adds one or more elements to the end of an array and returns the new length of the array.

// pop(): Removes the last element from an array and returns that element.

// shift(): Removes the first element from an array and returns that element. This operation also shifts other elements to lower indices.

// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

// concat(): Returns a new array comprised of this array joined with other arrays and/or values.

// slice(): Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array.

// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.

// lastIndexOf(): Returns the last index at which a given element can be found in the array, or -1 if it is not present.

// forEach(): Executes a provided function once for each array element.

// map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.

// filter(): Creates a new array with all elements that pass the test implemented by the provided function.

// reduce(): Apply a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

// reduceRight(): Apply a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

// find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.

// findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.

// some(): Checks if at least one element in the array satisfies the provided testing function.

// every(): Checks if all elements in the array satisfy the provided testing function.

// includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// sort(): Sorts the elements of an array in place and returns the sorted array.

// reverse(): Reverses the order of the elements of an array in place.


//Array Methods:-**
//1. toString() :- tostring is used for converting in string typed values.  
//example:-
// let myArray=["kamal","hement",25,10,[2,"a",[1,2,3]]]
// let a=myArray.toString()
// console.log(a)
// console.log(typeof a)

//2. join() :- join is used for separated the array element with some specific symbols like(,*,-,+,$,&)
//example:-
// let myArray=["kamal","hement",25,10]
// let a=myArray.join("*")
// console.log(a) 
// console.log( myArray) 


//3 concat() :- conact is used for merge the two or more array and create a new array with existing aaray elements
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let yourArray=["new","elements"]
// let yourArray2=["new","elements","klpj"]
// let newArray=myArray.concat(yourArray ,yourArray2)
// console.log(newArray)
// let newFlateArray=newArray.flat(Infinity) //It will combiend all array into one single array
// console.log(newFlateArray);








//6. shift() :- shift is used for remove the one element from first index of the array and return shifted element
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let a=myArray.shift()
// console.log(a)



//8.splice() :- splice is used for insert,delete,and update the elements in the array and it is return the deleted element of array always but you want 
//              see added,deleled,updated array so you have to console the original array once again because it performed the operation in original array
//              it is takes 3 parameter :
//              first:- where you want to add ,delete,update (index)
//              second:-how many element do you want to delete(Number of counts for delete)
//              third:- which elements do you want to insert or update(elements it is Optional)
// example:-
// let myArray=["mmm","kamal","hement","rahul","anul","hhh"]
// let a=myArray.splice(2,1,"klj")
// console.log(a)
// console.log(myArray)


// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.splice(2) //now this line first two elements(0,1) be stay here in original array and remaining all element are deleted  from array  and add in another array 
// console.log(a)
// console.log(myArray) // now this is original array with data with given value (0,1)

// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.splice(2,1) //now this line go in index 2 and delete one element form array return deteted element in new array
// console.log(a)
// console.log(myArray) // now this is print reamining rest array elements

// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.splice(2,1,"new","nnn") // this line go 2nd index and delete only one element and add new element of that deleted palce
// console.log(a)
// console.log(myArray) //this line print all updated array elements



//9. slice() :- slice is used for takes the elements form the Original array and create the new array with tooked elemets but not removed from oringinal array
//              and it take 1 or 2 argument :like-(0,5) starting from 1st argument but not including last 2nd argument it take values from(0,1,2,3,4)
//              if we gives only 1 argument then it will deleted given argument element and return rest all remaining elements.
//              but if we give two argument then it will deteted given argument element and return aslo deleted element that we want to delete that means it will
//              Not delete given arunmets but it will delete all others elemets accept given arguments.
//              these two point is very important       
// example:-
// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.slice(1)// this is detetd 0th index element and give all rest elements  in another new array. Here is counting like  [0,1] so it not include 1 and it delete given argument and return rest all elements.
// let b=myArray.slice(1,4) // if i used this line then it start from index 1 to index 3 elements gives you between elements and delete rest others element.
// let c=myArray.slice(3) //this is delete 0 1 2 index element and give all rest elements in another new array.
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(myArray)



//10.sort() :- sort is used for sort the array in alphabatically like[a-z] formate but if you want to sort number so not sorted like [1-10]
//              so that we used sort() for compare function: then we can sort numbers :- sort((a, b)=> a - b);
// example:-
// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.sort()
// console.log(a)

// let points = [40, 100, 1, 5, 25, 10];
// let k=points.sort()
// console.log(k)
// let a=points.sort(function(a, b){return a - b});/
// let a=points.sort((a, b)=> a - b);
// console.log(a)



//11.reverse() :- reverse is used for reverse the array element or we can say that it change in opposite diretection like left to right into right to left
// example:-
// let myArray=["kamal","hement","rahul","anul","hhh"]
// let a=myArray.reverse()
// console.log(a)

// let points = [40, 100, 1, 5, 25, 10];
// let k=points.reverse()
// console.log(k)
 

