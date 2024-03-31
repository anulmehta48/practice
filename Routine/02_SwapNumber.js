let a=5;
let b=10;

//swap the values of a and b
//one way to do this using 3rd temp valriable
// let temp=a;
// a=b;
// b=temp
// console.log(a);
// console.log(b);

//second way to do this without take temp variable or without inbuild method

a=a+b  //a=15 b=10
b=a-b // b=5 a=15
a=a-b //a=10 b=5
// console.log(a)
// console.log(b)

//third way to do this
let x = 20;
let y = 30;

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log("x:", x); // Output will be "good"
console.log("y:", y); // Output will be "something"





//swap the string without taking 3rd varibale 
// let x="something"
// let y="good"

// one way to do this 
// x=x.concat(y) //x=x+y
// // console.log(x);
// y=x.slice(0,9)//y=x-y
// // console.log(y);
// x=x.slice(9)//x=x-y
// // console.log(x);
// console.log(x);
// console.log(y);

//second way to do this 
// let x="something";
// let y="good";
// [x,y]=[y,x]

// console.log(x);
// console.log(y);





