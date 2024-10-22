// What is an object in JavaScript?
// Answer: An object in JavaScript is a collection of key-value pairs, where the keys (properties) are strings or symbols, and the values can be any data type, such as strings,
//  numbers, arrays, or even other objects. Objects are used to store structured data.

// example
// let person = {
//     name: 'John',
//     age: 30,
//     profession: 'Developer'
//   };
//   console.log(person); // { name: 'John', age: 30, profession: 'Developer' }
  


// How do you create an object in JavaScript?



// Answer: You can create an object using object literals ({}), the new Object() constructor, or the Object.create() method.



// How do you access properties of an object?
// Answer: You can access object properties using dot notation or bracket notation.

// Example
// let person = { name: 'Alice', age: 25 };
// console.log(person.name); // 'Alice'

// console.log(person['age']); // 25



// How do you add a new property to an object?
// Answer: You can add a new property to an object using either dot notation or bracket notation.
// example
// let person = { name: 'Alice' };
// person.age = 25;  // Adding property using dot notation
// person['profession'] = 'Developer';  // Using bracket notation
// console.log(person);  // { name: 'Alice', age: 25, profession: 'Developer' }


// How do you remove a property from an object?
// Answer: You can remove a property from an object using the delete operator.

// Example
// let car = { brand: 'Toyota', model: 'Corolla', year: 2021 };
// delete car.year;
// console.log(car);  // { brand: 'Toyota', model: 'Corolla' }



// How do you check if an object has a property?
// Answer: You can check if an object has a specific property using the in operator or the .hasOwnProperty() method.

// example1
// let person = { name: 'Alice', age: 25 };
// console.log('age' in person);  // true
// console.log('profession' in person);  // false

//example2
// console.log(person.hasOwnProperty('age'));  // true



//  How do you loop through the properties of an object?
// Answer: You can loop through an object's properties using the for...in loop or the Object.keys(), Object.values(), or Object.entries() methods.

// // example
// let person = { name: 'Alice', age: 25, profession: 'Developer' };
// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }
// // Output:
// // name: Alice
// // age: 25
// // profession: Developer


// example2
// Object.keys(person).forEach(key => {
//     console.log(`${key}: ${person[key]}`);
//   });



// How do you merge two or more objects?
// Answer: You can merge objects using the Object.assign() method or the spread operator (...).

// example
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let merged = Object.assign({}, obj1, obj2);
// console.log(merged);  // { a: 1, b: 3, c: 4 }



// exampl2?
// let merged = { ...obj1, ...obj2 };
// console.log(merged);  // { a: 1, b: 3, c: 4 }



// How do you clone or copy an object?
// Answer: You can create a shallow copy of an object using Object.assign() or the spread operator.
// example

// let original = { a: 1, b: 2 };
// let copy = Object.assign({}, original);
// console.log(copy);  // { a: 1, b: 2 }


// // example2
// let copy = { ...original };
// console.log(copy);  // { a: 1, b: 2 }


// How do you freeze an object in JavaScript?
// Answer: You can use Object.freeze() to freeze an object, making it immutable (i.e., you cannot add, delete, or modify properties).

// example
// let person = { name: 'Alice', age: 25 };
// Object.freeze(person);

// person.age = 30;  // This will not change the value of age
// console.log(person.age);  // 25


// How do you define a method in an object?
// Answer: You can define a method (a function inside an object) either as a property that points to a function or using shorthand syntax in object literals.

// let person = {
//     name: 'Alice',
//     greet: function() {
//       console.log('Hello, ' + this.name);
//     }
//   };
//   person.greet();  // Hello, Alice

// example
// let person = {
//     name: 'Alice',
//     greet() {
//       console.log('Hello, ' + this.name);
//     }
//   };
//   person.greet();  // Hello, Alice


// How do you convert an object into a JSON string?
// Answer: You can use JSON.stringify() to convert an object to a JSON string.

// example
// let person = { name: 'Alice', age: 25 };
// let jsonString = JSON.stringify(person);
// console.log(jsonString);  // '{"name":"Alice","age":25}'


// How do you convert a JSON string into an object?
// Answer: You can use JSON.parse() to convert a JSON string back into an object.

//   example
// let jsonString = '{"name":"Alice","age":25}';
// let person = JSON.parse(jsonString);
// console.log(person);  // { name: 'Alice', age: 25 }


// How do you get the values of an object?
// Answer: You can use Object.values() to get an array of the values of an object.

//   example
// let person = { name: 'Alice', age: 25, profession: 'Developer' };
// let values = Object.values(person);
// console.log(values);  // ['Alice', 25, 'Developer']




  


