// function createHelloWorld() {
//     return function() {
//         return "Hello World";
//     };
// }

// // Usage:
// console.log(createHelloWorld()); 

let v = 4;


function counter(v)
{
return function(){
    return counter++    ;
}
};

console.log(counter());

