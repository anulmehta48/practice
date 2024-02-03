// What is Array = Array is the special Variable object that can store many types of Values.
// What is return = It is Return Array of list and type is Object
// what is syntax = []
//example:
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// console.log(myArray)


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




//4. pop() :- pop is used for remove one element from last index in the array and return the poped element
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let a=myArray.pop()
// console.log(a)


//5. push() :- push is used for add the new element in the array in last index of the array and return the new length of the array
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let a=myArray.push("hello")
// console.log(a)


//6. shift() :- shift is used for remove the one element from first index of the array and return shifted element
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let a=myArray.shift()
// console.log(a)


//7. unshift() :- unshift is used for add the one element in the first index of the array and return the new length of the array
// example:-
// let myArray=["kamal","hement",25,10,{"name":"anul"},[2,"a",[1,2,3]]]
// let a=myArray.unshift("new")
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


