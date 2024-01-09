// What are the two possible values of a Boolean variable?
// How do you declare a Boolean variable in JavaScript?
// What is the significance of Boolean values in conditional statements?
// Explain the concept of truthy and falsy values in JavaScript.
// How do you negate a Boolean value in JavaScript?

/*
1: True & False
*/

//Solution:2 

const bool_var = true;
console.log(typeof(bool_var));  //output boolean

//3: Ans ->>   Significance in Conditionals:  Boolean values are commonly used in conditional statements (if, else, etc.) to control the flow of a program based on whether a condition is true or false.



//===============================Truthy and Falsy Values:============================


/* 4 : Answer: In JavaScript, values are evaluated as either "truthy" or "falsy" in a boolean context.

Values like true, non-empty strings, and non-zero numbers are truthy,

while values like false, null, undefined, 0, and empty strings are falsy. */




//===================== 5: Negating or inverting Boolean Value=========================

var isTrue = true;
var isFalse = !isTrue;  // Using the logical NOT operator to negate isTrue

console.log(isTrue);    // Output: true
console.log(isFalse);   // Output: false
