// Exercise 1: Create an array of your favorite fruits. Access and log the third fruit in the array.

// Exercise 2: Add a new fruit to the end of the array using the push method.

// Exercise 3: Remove the first fruit from the array using the shift method.

// Exercise 4: Use the splice method to remove a specific fruit from the array by its index.

// Exercise 5: Use the map method to create a new array with the lengths of the fruits' names from the original array.


// Exercise-1 
const fruits = ['Banana', 'Papaya', 'Grapes', 'Apple'];
console.log(fruits[2]);

// Exercise-2 
fruits.push('orange');
console.log(fruits);   //[ 'Banana', 'Papaya', 'Grapes', 'Apple', 'orange' ]

// Exercise-3
fruits.shift(0);
console.log(fruits); // [ 'Papaya', 'Grapes', 'Apple', 'orange' ]

// Exercise-4 
// fruits.splice(1,2);
// console.log(fruits);  //[ 'Papaya', 'orange' ]

fruits.slice(0,2);
console.log(fruits);



// Exercise-5

const mapArrayFruits = fruits.map(frut=>frut.length);
console.log(mapArrayFruits);    //[ 6, 6 ] why 6 because papaya total word of 6




