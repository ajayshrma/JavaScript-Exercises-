// <!-- Null:

// What is the purpose of the null value in JavaScript?
// How is null different from undefined in JavaScript?
// Can you use the typeof operator to determine if a variable is null?
// In what situations might you intentionally set a variable to null?
// How do you check if a variable has a null value in a conditional statement?


const myVaraiable = 1212;


if(myVaraiable===null) {console.log(true) 
}
{
    console.log(false);
}

console.log(typeof (myVaraiable)); // Outputs: "object"


console.log(typeof null);  // Outputs: "object"

//====================Why Null typeof is Object ===========================

// Jab JavaScript banaya gaya tha, initial design mein null ko object ke roop mein tag kiya gaya tha, jiska asar aaj tak dikhta hai. Isliye, jab aap typeof null likhte hain, toh woh "object" return hota hai.

// In short, null ko object ke roop mein dekhna ek language design ka historical glitch hai, lekin aaj bhi woh primitive value hai aur aapko direct equality check (=== null) ka istemal karna chahiye usse sahi tarah se check karne ke liye.