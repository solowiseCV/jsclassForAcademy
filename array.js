// what is an Array?

// example
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits); // ['apple', 'banana', 'orange']


// How do you create an array in JavaScript?

// example
// // Using array literal
// let numbers = [1, 2, 3];

// // Using Array constructor
// let colors = new Array('red', 'green', 'blue');



// How do you access elements in an array?

// example
// let cities = ['New York', 'Paris', 'Tokyo'];
// console.log(cities[0]); // 'New York'
// console.log(cities[2]); // 'Tokyo'



// How do you find the length of an array?
// example
// let animals = ['dog', 'cat', 'elephant'];
// console.log(animals.length); // 3




// How do you add an element to the end of an array?
// Answer: You can use the .push() method to add one or more elements to the end of an array.

// example
// let fruits = ['apple', 'banana'];
// fruits.push('orange');
// console.log(fruits); // ['apple', 'banana', 'orange']



// How do you remove the last element from an array?
// Answer: You can use the .pop() method to remove the last element from an array.
// example

// let fruits = ['apple', 'banana', 'orange'];
// fruits.pop();
// console.log(fruits); // ['apple', 'banana']



// How do you add an element to the beginning of an array?
// Answer: You can use the .unshift() method to add one or more elements to the beginning of an

// example
// let numbers = [2, 3, 4];
// numbers.unshift(1);
// console.log(numbers); // [1, 2, 3, 4]


// How do you remove the first element from an array?
// Answer: You can use the .shift() method to remove the first element from an array.

// example
// let numbers = [1, 2, 3, 4];
// numbers.shift();
// console.log(numbers); // [2, 3, 4]



// How do you check if a value exists in an array?
// Answer: You can use the .includes() method to check if a specific value exists in an array. It returns true if the value exists, and false otherwise.
// example
// let colors = ['red', 'blue', 'green'];
// console.log(colors.includes('blue')); // true
// console.log(colors.includes('yellow')); // false


// How do you find the index of an element in an array?
// example
// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.indexOf('banana')); // 1
// console.log(fruits.indexOf('grape')); // -1



// How do you remove elements from an array?
// Answer: You can use the .splice() method to remove elements from an array. It takes two arguments: the starting index and the number of elements to remove

// example
// let colors = ['red', 'blue', 'green', 'yellow'];
// colors.splice(1, 2); // Start at index 1 and remove 2 elements
// console.log(colors); // ['red', 'yellow']



// How do you create a new array by transforming each element
// Answer: You can use the .map() method to create a new array by applying a function to each element in the original array.

// example
// let numbers = [1, 2, 3, 4];
// let doubled = numbers.map(num => num * 2);
// console.log(doubled); // [2, 4, 6, 8]




// How do you filter elements from an array?
// Answer: You can use the .filter() method to create a new array containing elements that satisfy a specific condition.

// example
// let numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]


// How do you flatten a nested array?
// Answer: You can use the .flat() method to flatten an array of arrays by one level.
// example
// let nestedArray = [1, [2, 3], [4, 5]];
// let flatArray = nestedArray.flat();
// console.log(flatArray); // [1, 2, 3, 4, 5]




// How do you seal an object in JavaScript?
// Answer: You can seal an object using Object.seal(). A sealed object prevents adding or deleting properties, but you can still modify existing properties.
// Example
// let user = {
//     name: 'Alice',
//     age: 25
//   };
  
//   Object.seal(user);
//   user.age = 30; // You can modify existing properties
//   delete user.name; // This won't work
//   console.log(user); // { name: 'Alice', age: 30 }
  

// How do you convert an object to an array?
// Answer: You can use Object.keys(), Object.values(), or Object.entries() to convert an object to an array of keys, values, or key-value pairs.

// example
// let obj = { a: 1, b: 2, c: 3 };

// // Array of keys
// let keys = Object.keys(obj);
// console.log(keys); // ['a', 'b', 'c']

// // Array of values
// let values = Object.values(obj);
// console.log(values); // [1, 2, 3]

// // Array of key-value pairs
// let entries = Object.entries(obj);
// console.log(entries); // [['a', 1], ['b', 2], ['c', 3]]


// let numbers = [1,2,3,4,5,]
// console.log(numbers.map( function(number){
//   return number*number
// }));


