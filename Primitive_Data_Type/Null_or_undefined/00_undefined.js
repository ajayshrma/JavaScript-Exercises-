// <!-- Undefined:

// What does it mean if a variable is declared but not assigned a value in JavaScript?
// How is the undefined value different from null in JavaScript?
// Can you explicitly assign a variable the value of undefined?
// What does it mean when a function returns undefined in JavaScript?
// How can you check if a variable is undefined in a conditional statement? -->

/**
 * 1.udefined reresents a variable that has been declared but not yet assigned any value 
 
 * 2.null, which is an intentional absence of any object value, undefined typically indicates that  a variable has been declared but not assigned.


 * 
 */

//=====Solution:3 ========

// Explicitly assigning undefined to a variable
var myVariable = undefined;

console.log(myVariable); // Output: undefined

// Another way to explicitly assign undefined
var anotherVariable;
console.log(anotherVariable); // Output: undefined

//=====Solution:4 ========

// If a function doesn't explicitly return a value, it implicitly returns undefined.

function func_name() {}

console.log(func_name()); //output undefined

//=====Solution:5 ========

if (myVariable === undefined) {
  console.log("undefined");
}

/**------------Null v/s undefined--------------
 * 
 null:

Represents the intentional absence of any object value.
Can be assigned to a variable to signify that it has no meaningful value.
You might use null when you want to explicitly indicate that something is intentionally empty or undefined.
undefined:

Represents a variable that has been declared but not yet assigned a value.
Variables are automatically assigned undefined when declared without an initial value.
Indicates the absence of a meaningful value due to the lack of assignment.
In essence, null is often used when you want to explicitly say that a variable is empty or intentionally lacks a meaningful value. On the other hand, undefined typically indicates that a variable is declared but not assigned a value.
 */

var myVariable = null; // Here, we intentionally set myVariable to null to represent an absence of any meaningful value or object.
