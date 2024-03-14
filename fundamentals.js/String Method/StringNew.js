//String is primitive datatype of javascript and string can be created in two ways
//uisng as primitive from string literals or using as object from String constructor

//primitive String literals;-
// let name="Anul"
// console.log(typeof name);

//Object(non-primitive) String Constructor;-
// let names=new String("Anul")
// console.log(typeof names);

//Both are same just syntax is diffrents only but all properties and method are same

//Now String Propetries and Method
//todo How to find total length of string=> length
// let name="AnulMehta"
// let length=name.length
// console.log(length);

//todo 1. How to concat or combined together two or more string => concat()
// let name1="Anul"
// let name2="Mehta"
// let fullname=name1.concat(name2)
// console.log(fullname);

// let name1="Anul"
// let name2="Mehta"
// let fullname=name1+name2 //this is looking bad or not readable so we can used string interpolation
// console.log(fullname);

//using string interpolation and also we can using any methods apply here inside it
// let name1="Anul"
// let name2="Mehta"
// let fullname=`My firstName is ${name1} and my LastName is ${name2}`
// console.log(fullname);

// let name1 = "Anul";
// let name2 = "Mehta";
// let fullname = `My firstName is ${name1.toUpperCase()} and my LastName is ${name2.toUpperCase()}`;
// console.log(fullname);


//todo How to find element uisng index => charAt()
// let name="AnulMehta"
// let myResult=name.charAt(3)
// console.log(myResult);

//todo How to find Element index uisng character => indexOf()
// let name="AnulMehta"
// let myResult=name.indexOf("h")
// console.log(myResult);

//todo How to take Some Elements from all string => substring()
// let name="Anul-Mehta"
// let myResult=name.substring(0,4)
// console.log( myResult);

// todo How to take Some Elements from all string => slice()
// let name="Anul-Mehta"
// console.log(name.length);
// let myResult=name.slice(0,4)
// let myResult=name.slice(-10) //if use - then it will take length and gives values from revers manner from last
// console.log( myResult);


//todo how to remove space from strings element =>trim()
// let name=" AnulMehta   "
// console.log(name);
// let myResult=name.trim() //it removed sapce from left or right sides
// console.log(myResult);

//todod how to replace element in string => replace()
// let name="http://www.google.com/hello%20world"
// let myResult=name.replace("%20","-")
// console.log(myResult);

//todo how to check element is present or not=>includes()
// let name="AnulMehta"
// let myResult=name.includes("l")
// console.log(myResult);

//todo how to transform into array all string=>slpit()
//! split is very usefull for string to array convertion and using seprated elemets based on usecase like " ", "-" "*" etc
// let name="Anul-Mehta"
// let myResult=name.split('-')
// console.log(myResult);

// let name="The quick brown fox jumps over the lazy dog."
// let myResult=name.split(' ')
// console.log(myResult);


//todo How to Join two or more elemets uisng some syntax or symbols but only apply on array=> join()
// let name="Anul-Mehta"
// let myResult=name.split('-')
// let newResult=myResult.reverse()
// let my=newResult.join(".")
// console.log(myResult);
// console.log(newResult);
// console.log(my);

//Todo How to get last index element or any index uisng nagative or postive value of string =>at()
// let name="Anul Mehta"
// let myResult=name.at(5)
// let myResult=name.at(-1)
// console.log(myResult);


//how to get 