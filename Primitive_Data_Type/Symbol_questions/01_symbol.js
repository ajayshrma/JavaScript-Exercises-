

// <!-- Symbol:

// What is the Symbol data type used for in JavaScript?
// How do you create a unique symbol in JavaScript?
// Can symbols be compared for equality, like other primitive data types?
// What is the significance of symbols as object keys?
// How can you retrieve the description of a symbol in JavaScript? --> -->

/**
 * 
Purpose of Symbol:

Answer:1 The Symbol data type in JavaScript is used to create unique and immutable values. Symbols are often used as keys for object properties.
Creating a Unique Symbol:

Answer:2 You can create a unique symbol using the Symbol function. For example: var mySymbol = Symbol();

Answer:3 Symbols are unique, and no two symbols are equal. They are compared using the === (strict equality) operator.

====Using Symbols as Object Keys:=====

Answer:4 Symbols are commonly used as keys for object properties to avoid naming conflicts.
For example: var obj = { [mySymbol]: "value" };


 */

// Creating a Symbol for an object property
var firstNameSymbol = Symbol("first name"); //first ame jo h y description h symbol ka 

// Creating an object with a symbol as a property
var person = {
    [firstNameSymbol]: "John",
    age: 30,
    gender: "Male"
};

// Accessing the property using the symbol
console.log(person[firstNameSymbol]); // Output: John
console.log(person.age);  //output 30


//=============Symbol Description===========================

// Creating a Symbol with a description
var databaseConnectionSymbol = Symbol("Database Connection");
var myDescription = databaseConnectionSymbol.description;
// Later in the code or documentation
console.log(myDescription); // Output: "Database Connection"


