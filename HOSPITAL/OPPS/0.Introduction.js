/*Class: A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects 
  of that class will have. Think of a class as a blueprint for creating objects of a particular type.
  Classes in JavaScript were introduced in ECMAScript 6 (ES6) and provide syntactical sugar over the existing prototype-based inheritance.
  */

// class => class is just blue print or it like a maven that have some specific attributes;

// object => Object is instances of class that means whichever blue print atttributes are available in every object.

// before ES6 or Class how to use oops concepts.
// Using prototype-based approach or constructor function approach
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

Person.prototype.sayHello = function () {
  console.log(
    "Hello, my name is " + this.name + " and I'm " + this.age + " years old."
  );
};

var person1 = new Person("Alice", 30);
person1.sayHello();

// *****************************************************************************************************
//Now using Class or ES6 for use oops concepts
// Using ES6 class syntax
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(
//       "Hello, my name is " + this.name + " and I'm " + this.age + " years old."
//     );
//   }
// }

// const person2 = new Person("Bob", 25);
// person2.sayHello();
