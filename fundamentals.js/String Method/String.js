// What is String = String is the Variable that can store String types of Values.
// What is return = It is Return string
// what is syntax = ""
//example:
// let myString="hello my Duniya"
// console.log(myString)
// console.log(typeof myString)


// Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
// But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.

//String Methods**:-
//1. length :- length is used for count the length of strings values
//example:-
// let myString="hello my Duniya" // space is also counted
// let a=myString.length
// console.log(a)


//2.There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

// let str = "Apple, Banana, Kiwi"; //here all values in one string so here lenth is 19
// // let part = str.slice(7, 13);
// let part = str.slice(7);//If you not give the second parameter, the method will slice out the rest of the string from 6th index to all length
// console.log(part)

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// let str = "Apple, Banana, Kiwi";
// let part = str.substring(0, 5);
// console.log(part)

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7, 6); //here is 6 is length of Banana
// console.log(part)


//3. replace() :- replace is used for specified value with another values in string and it return new string and it replace only first match
//                If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
//example:-
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText)

// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.
// let text = "Please visit Microsoft and Microsoft!";
// let newText = text.replace(/Microsoft/g, "W3Schools");
// console.log(newText)

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// let text = "Please visit Microsoft! Microsoft";
// let newText = text.replace(/MICROSOFT/ig, "W3Schools");
// console.log(newText)

//4. concat() :- concat used for joined two or more string with existing string 
//example:-
// text = "Hello" + " " + "World!";
// text = "Hello".concat(" ", "World!");
// console.log(text)


//5. trim() :- trim is ued for removed the space from the both side of element but not in middle bitween two elements
//example:-
// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2)

// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
// let text1 = "     Hello World!     ";
// let text2 = text1.trimStart()
// console.log(text2)

// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
// let text1 = "     Hello World!     ";
// let text2 = text1.trimEnd()
// console.log(text2)


//6. padStart() :-padStart is used for add the string with another string with existing string it take 2 paramenter first how many pad do you want to add
//                and second is which string you are gives and if you give 4 it add 3 padd then add string
//example:-
// let text = "5";
// let padded = text.padStart(4,"x");
// console.log(padded)

// let text = "5";
// let padded = text.padEnd(4,"x");
// console.log(padded)


//7. charAt():-  charAt is return the character of specified index 
//example:-
// let text = "HELLO WORLD";
// let char = text.charAt(0);
// console.log(char)


// The charCodeAt() method returns the unicode (ascii value) of the character at a specified index in a string
// example:-
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
// console.log(char)

//8.split() :-  A string can be converted to an array with the split() 
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe
// If the separator is omitted(empty), the returned array will contain the whole string in index [0].
// If the separator is "", the returned array will be an array of single characters:

//example:-
// let text = "HELLO WORLD,hjjh";
// let k=text.split()
// console.log(k)
// let k=text.split("")
// console.log(k)
// let k=text.split(" ")
// console.log(k)
// let k=text.split(",")
// console.log(k)

