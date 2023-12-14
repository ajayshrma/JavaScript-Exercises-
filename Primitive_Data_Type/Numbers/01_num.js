// What is the Number data type used for in JavaScript?
// How do you declare an integer variable in JavaScript?
// Can a Number variable store both integer and floating-point values?
// What is the difference between NaN and Infinity in JavaScript?
// How can you convert a string containing a number into an actual numeric value in JavaScript?


//=====================================================Solution:1==================================

//to store integer values 
//---- Purpose of Number:

// Answer: The Number data type in JavaScript is used for representing numeric values, which can be either integers or floating-point numbers.

//=====================================================Solu:2======================================

const number_var = 209;

//=================================================Solution:3==================================



//Yes we can ---Answer: Yes, a Number variable can store both integer and floating-point values.


//==========================Solution:4================NaN======================================

//NAN is Not a Number it just return true or false.

//Infinity not idea:

console.log(NaN); //output NaN

const check_var = "jjhj" / 5;

console.log(check_var); // output NaN

//NaN ko technically number data type ki category mein rakha gaya hai taki wo numeric operations ke result ko indicate kare jiska koi valid numeric value nahi nikal sakti. Lekin dhyan rahe ki NaN ek special case hai jise ham normally numeric values se alag treat karte hain, kyunki ye failed ya undefined numeric operations ko represent karta hai.

// Is tarah se, NaN ko data type kaha ja sakta hai kyunki ye ek specific type of numeric value hai, lekin iska use hota hai numeric operations ke failed ya undefined cases ko represent karne ke liye.
//---------------------------------------------------------------

//======================================INFINITY==================

// Infinity ek aisa numeric value hai jo bade numbers ko represent karta hai, jo practically infinity tak pahunchte hain.


/* positiveInfinity variable mein Infinity assign kiya gaya hai, jo positive infinity ko represent  karta hai.

negativeInfinity variable mein -Infinity assign kiya gaya hai, jo negative infinity ko represent karta hai.

Jab aap kisi number ko infinity se divide karte hain, to result Infinity hota hai.
console.log(5 / 0); yahan 5 ko infinity se divide kiya gaya hai, isliye output Infinity hai.

Same logic negative numbers ke sath bhi apply hota hai.

console.log(-5 / 0); yahan -5 ko infinity se divide kiya gaya hai, isliye output -Infinity hai.
Infinity ka use generally mathematical operations mein kiya jata hai jab ek result ka limit infinite direction mein ja raha hota hai.

*/

var positiveInfinity = Infinity;
var negativeInfinity = -Infinity;

console.log(positiveInfinity); // Output: Infinity
console.log(negativeInfinity); // Output: -Infinity

// Mathematical operations involving Infinity
console.log(5 / 0); // Output: Infinity
console.log(-5 / 0); // Output: -Infinity


//=====================================================solution:5==================================

const string_var = "2232";

const string_to_number = Number(string_var);

console.log(string_to_number);

console.log(typeof(string_to_number));





