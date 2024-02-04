// Exercise 1: Create a variable for each of the primitive data types in JavaScript (string, number, boolean, null, and undefined).

// Exercise 2: Declare a variable and use the typeof operator to determine its data type.

// Exercise 3: Explore the concept of type coercion by performing operations involving different data types (e.g., adding a string and a number).

// Exercise 4: Create a variable and set it to null. Use the typeof operator to check its data type.

// Exercise 5: Create an array and determine the data type of the array using typeof.



//Exercise:1 & 2  & 4 


let exampleVar = "Ajay"
console.log(typeof exampleVar); //return - String

exampleVar = 43;
console.log(typeof exampleVar);//return - number

exampleVar = true;
console.log(typeof exampleVar);//return - boolean

exampleVar = null;
console.log(typeof exampleVar);//return - object

exampleVar = undefined;
console.log(typeof exampleVar);// //return - undefined

//Why return Object below is the answer

// In JavaScript null is "nothing". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object.This is because in the earliest versions of JavaScript, the internal representation of all objects, including null, was as type "object."

//Exercise - 3

let varPlayerName = "Ajay"
let  varScore = 98;
console.log(typeof varPlayerName+varScore);

//Exersie - 4

const varArray = [1,2,4,5,6];
console.log('Array typeOf is:', typeof(varArray));   //return: objects
console.log(Array.isArray(varArray));              // return: true


