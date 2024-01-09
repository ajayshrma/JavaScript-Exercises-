

const price = 10;
console.log(Boolean(price));

// Output: true 


let price1;
console.log(Boolean(price1));

//output: undefined


/* Q:3

Here, we declare the variable num and assign it the value 5. We also declare the variable bool which we assign the boolean representation of num.
Extend the code such that the console.log() statement logs false. */


let num = 5;
num = 0;
const bool = Boolean(num);
console.log(bool);


//need output: false when we change num value = 0;




// Q:4

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(-1));

/* output  
true
false
true

*/


// Q:5

const name = 'james';
console.log(Boolean(name));

//true

// Q.6

let isTrue = true;
console.log(isTrue);