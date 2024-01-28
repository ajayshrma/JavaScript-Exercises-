// /* JavaScript Array using Literal Notation

// literal notation i.e. ->> [](square brackets).

// Syntax to create an Array:

//  */
// var arr0 = []; // empty array

// var fruits = ["mango", "apple", "orange", "guava"]; // Array having elements

// /* JavaScript Array using new

// An empty array can be created using the new keyword

// push() method to add elements at the end of the array,
// unshift() method to add to the front of the array.

// Syntax to create an Array: */

// let arr1 = new Array(); // empty array

// let arr2 = new Array(10); // array of 10 elements size

// let arrt = new Array(10);

// arrt.push("122");

// arrt.unshift("245");

// //output:  [ '245', <10 empty items>, '122' ]
// // so above 245 is unshift which add element at first & push add at the last on array.

// // ==========================Example======================================================

// //1:

// let arr3 = new Array("Java_0", "C_1", "C++_2", "js_3");

// console.log(arr3[arr3.length - 1]);
// console.log(arr3);

// //iterating array using for loop

// let i = 0;
// for (i = 0; i < arr3.length; i++) {
//   let arrget = arr3[i];
//   console.log(arrget);
// }

// // iterating array using for of loop

// const exercises = [
//   "Db Curl",
//   "bicep Curl",
//   "tricep Pushdown",
//   "shoulder press",
// ];

// for (f of exercises) {
//   console.log(f);
// }

// // iterating array using for each loop

// const bikes = ["Honda", "KTM", "Yamaha"];

// bikes.forEach(function (item, index, array) {
//   console.log(item, index, array);
// });

// bikes.forEach((Element) => {
//   console.log(Element);
// });

let bikes = ["Honda", "KTM", "Yamaha"];

console.log(bikes.reverse());
