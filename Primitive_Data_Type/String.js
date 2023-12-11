// Exercise 1: Declare a string variable and log its length to the console.

// Exercise 2: Create a string and convert it to uppercase and lowercase using string methods.

// Exercise 3: Concatenate two strings using both the + operator and the concat method.

// Exercise 4: Create a string and use the split method to split it into an array based on a specific delimiter.

// Exercise 5: Use the slice and substring methods to extract substrings from a string.


//Exercise-1

let varString = "Ajay"

console.log(varString.length);   // return 4

//Exercise-2

let playerName = "Mahendra Singh Dhoni";

console.log('UpperCase =', playerName.toUpperCase(playerName), 'LowerCase =' ,playerName.toLowerCase(playerName));


//Exercise-3

let varfirstName = "Ajay"
let varlastName = "Sharma"

console.log(varfirstName+varlastName);  //using + operator

console.log(varfirstName.concat(varlastName));  //using concat method


//Exercise-4 

let varFruits = "orange banana apple grapes papaya"

console.log(varFruits.split(' ')); 

// so like on the basic of blanks it will split the string of fruits into array
// [ 'orange', 'banana', 'apple', 'grapes', 'papaya' ]

//Exercise-5

let var_string = "Ajay is very passionate for gyming"

console.log(var_string.substring(0,3));  //Substring extracts 0 to 2 characters 

console.log(var_string.slice(0,3)); // extracts first 3 characters





