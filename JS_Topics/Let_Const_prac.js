// Exercise 1: Declare a variable using let and another using const. Try to change the value of the let variable and see what happens.

// Exercise 2: Create a block-scoped variable using let inside a function. Access the variable outside the function and observe the result.

// Exercise 3: Use const to declare an object and try to change one of its properties. What happens?

// Exercise 4: Declare a variable inside a for loop using let and another using var. Compare and contrast their behavior.



let score = 20;
const totalScore= 30;
score = 30;
console.log(`Solution OF Exercise-1 : `,totalScore);



function Helloworld(){
    let speak = "HelloWorld";
} 
console.log(`Solution OFExercise-2 : `,speak);  ///here 


const person = {
name:'ajay',
age:18
};
person.age = 21;
console.log(`Solution OFExercise-3 : `, person);  //// Yes we can change the properties of an object declared with const







