// Hello World
console.log("Hello World!")

// Variables
var firstName = "Suljo"
let lastName = "Sahbazovic"

console.log("Full Name:", firstName + " " + lastName)

// Data Types
var age = 25               // Number
var isStudent = true       // Boolean
var hobbies = ["coding", "music", "gaming"] // Array    
var address = {            // Object
    street: "Džemala Bijedića 279E",
    city: "Sarajevo",
    country: "Bosnia"
}  
var sex = "Male"         // String

console.log("Age:", age)
console.log("Is Student:", isStudent)
console.log("Hobbies:", hobbies)
console.log("Address:", address);
console.log("Sex:", sex);

//Constants
const occupation = "Software Developer"
console.log("Occupation:", occupation)  

const BIRTH_YEAR = 1998
console.log("Birth Year:", BIRTH_YEAR)  

// Functions
function greet(name) {
    return "Hello, " + name + " I am a " + occupation + "!";     
}   
console.log(greet(firstName));