
console.log("Welcome to JavaScript!");

//Example 2: Using JavaScript to change HTML content
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>JS Introduction</title>
// </head>
// <body>
//     <h1 id="heading">Hello, world!</h1>
//     <button onclick="changeText()">Click me to change the text</button>

//     <script>
//         function changeText() {
//             document.getElementById("heading").innerHTML = "Hello, JavaScript!";
//         }
//     </script>
// </body>
// </html>

// What is JavaScript?
// Example: Creating an interactive alert box
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Alert Example</title>
// </head>
// <body>
//     <button onclick="greet()">Click me!</button>

//     <script>
//         function greet() {
//             alert("Welcome to learning JavaScript!");
//         }
//     </script>
// </body>
// </html>




// JavaScript in the Browser
// Example: Changing button color on click

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <title>Button Color</title>
//     <style>
//         #colorButton {
//             background-color: lightblue;
//             padding: 10px;
//             border: none;
//             cursor: pointer;
//         }
//     </style>
// </head>
// <body>
//     <button id="colorButton" onclick="changeButtonColor()">Change Color</button>

//     <script>
//         function changeButtonColor() {
//             document.getElementById("colorButton").style.backgroundColor = "green";
//         }
//     </script>
// </body>
// </html>


// Variables
// Example 1: Declaring and using variables

// let name = "John";  // Variable holding a string
// let age = 25;       // Variable holding a number
// console.log("Name:", name);   // Output: Name: John
// console.log("Age:", age);     // Output: Age: 25

// Example 2: Variable reassignment
// let favoriteColor = "blue";
// console.log("Before:", favoriteColor);  // Output: Before: blue

// favoriteColor = "green";
// console.log("After:", favoriteColor);   // Output: After: green

// Constants
// Example: Defining constants and trying to change them
// const gravity = 9.8;  // Constant value
// console.log("Gravity:", gravity);  // Output: Gravity: 9.8

// // Trying to change the constant will cause an error
// // gravity = 10;  // Uncommenting this will cause an error


// Concept of Data Types
// Example 1: Different data types

// let stringExample = "This is a string";   // String
// let numberExample = 42;                   // Number
// let booleanExample = true;                // Boolean
// let nullExample = null;                   // Null
// let undefinedExample;                     // Undefined

// console.log(stringExample);     // Output: This is a string
// console.log(numberExample);     // Output: 42
// console.log(booleanExample);    // Output: true
// console.log(nullExample);       // Output: null
// console.log(undefinedExample);  // Output: undefined



// Checking data types with typeof

// let value = 100;
// console.log(typeof value);  // Output: number

// value = "JavaScript is fun!";
// console.log(typeof value);  // Output: string

// value = true;
// console.log(typeof value);  // Output: boolean



// Primitive Types
// Example 1: Working with strings
// let firstName = "Alice";
// let lastName = "Smith";

// let fullName = firstName + " " + lastName;  // Concatenation
// console.log("Full Name:", fullName);        // Output: Full Name: Alice Smith




// Simple arithmetic with numbers
// let num1 = 10;
// let num2 = 5;

// let sum = num1 + num2;       // Addition
// let difference = num1 - num2;  // Subtraction
// let product = num1 * num2;   // Multiplication
// let quotient = num1 / num2;  // Division

// console.log("Sum:", sum);            // Output: Sum: 15
// console.log("Difference:", difference);  // Output: Difference: 5
// console.log("Product:", product);    // Output: Product: 50
// console.log("Quotient:", quotient);  // Output: Quotient: 2



// Boolean logic
// let isAdult = true;
// let hasLicense = false;

// let canDrive = isAdult && hasLicense;  // Logical AND
// console.log("Can drive:", canDrive);   // Output: Can drive: false

// let canApplyForLicense = isAdult || hasLicense;  // Logical OR
// console.log("Can apply for license:", canApplyForLicense);  // Output: Can apply for license: true



// null and undefined
// let middleName = null;  // Intentional absence of value
// let lastName;

// console.log(middleName);  // Output: null
// console.log(lastName);    // Output: undefined


// class work
// let name = "John";
// let age = 20;
// let hobby = "playing football";
// const birthYear = 2004;

// let message = "Hi, my name is " + name + ". I am " + age + " years old, and I love " + hobby + ". I was born in " + birthYear + ".";
// alert(message);
