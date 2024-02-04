// comparison operators.

const priceOne = 10;
const priceTwo = 15;
const priceThree = 10;
 
console.log(priceOne >= priceTwo);
console.log(priceOne >= priceThree);
 
console.log(priceOne <= priceTwo);
console.log(priceOne <= priceThree);

/* //output

false
true
true
true */


const priceOne1 = 1;
const priceTwo2 = 1;
const priceThree3 = 2
 
console.log(priceOne <= priceTwo);  //true
 
console.log(priceOne <= priceThree);  //true


const numOne = 3;
const numTwo = 3; 
const numThree = 2;
console.log(`Solution is :  ${numOne >= numTwo} ${numTwo >= numThree}` );


const textOne = 'Hello';
const textTwo = 'World';
const combined = `${textOne} ${ textTwo}`;
console.log(combined);
