// //Using For Loop

// // for star commenting press => shift+alt+A 

// /*For Loop Explanation

// index = 0;
// o<4

// element = [0]

// idex++

// mean o++

// mean 0+1 =1 

// now repeat til 0 become 4<4 & loop ends

// */

// const myArray = [3, 7, 1, 9, 5];

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }



// //using for of loop

// // for (const element of array) {
// //     // Access element
// //   }

// for (const iterator of myArray) {

//     console.log(myArray);
    
// }


//using map

// const newArray = array.map(function(element) {
//     // Return a transformed value
//     return element * 2;
//   });

const inputArray = [0, 1, 5, 3, 8, 6];

const newArray = inputArray.map(function(element) {
  return element ;
});

console.log(newArray);
