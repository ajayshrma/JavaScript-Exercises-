// function createHelloWorld() {
//     return function() {
//         return "Hello World";
//     };
// }

// // Usage:
// console.log(createHelloWorld()); 

// let v = 4;


// function counter(v)
// {
// return function(){
//     return counter++    ;
// }
// };

// console.log(counter());

//we can redeclare the num value
let num  =6;
num = 4;
console.log(num);  //output 4

//we can't redeclare num2 using const

const num2 = 20;
num2 = 30;
console.log(num2);  ///output : TypeError: Assignment to constant variable.