/*  Object Literal Questions
 
 Question 1:  Create an object using the object literal notation to represent a car. Include properties such as company, model, and year. Assign values of your choice to these properties.

*/

const car = {
    company:'Hyundai',
    model:'verna',
    year:'2021'
}


/* Question 2: Object Literal Manipulation */

// Add a new property to the car object called color. Update the year property to reflect the current year.


car.color = 'blue',
car.year = new Date().getFullYear();

console.log(car);

/* NOTE: The new keyword in JavaScript is used to create an instance of a user-defined object or one of the built-in objects that has a constructor function.

*/


/*  1. Object Literal ke dwara:
Sabse simple tareeka object banane ka yeh hai. Aap ek object ko seedha define kar sakte hain, jaise ki:
javascript
Copy code
var person = {
    name: 'John',
    age: 25,
    isStudent: true
};
*/


/* 2. Object ko seedha Object ke instance banakar (new keyword ka istemal karke):
Aap seedhe Object ke instance bana sakte hain, jaise ki: */

var car = new Object();
car.make = 'Toyota';
car.model = 'Camry';
car.year = 2022;




/* 3. Object Constructor ka istemal karke (new keyword ka istemal karke):
Aap apni khud ki constructor function bana sakte hain aur usse new keyword ke saath use karke objects create kar sakte hain, jaise ki: */


function Person(name, age) {
    this.name = name;
    this.age = age;
}

var person1 = new Person('Alice', 30);




// In teeno tareeko se aap objects create kar sakte hain JavaScript mein. Har tareeka apne apne use case ke liye suitable hai. Literal notation simple aur seedha hota hai, jabki constructor function aur new keyword ka istemal complex objects ke banane mein madad karta hai.