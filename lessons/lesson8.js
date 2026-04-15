// Declarative functions
function helloOne() {
    console.log("Hello one!");
}
helloOne();
console.log("------------------");
//Anonymous functions
var helloTwo = function() {
    console.log("Hello two!");
}
helloTwo();
console.log("------------------");
var helloThree = function(){
    console.log("Hello three!");
}
helloThree();
console.log("------------------");

//ES6 functions syntax and arrow functions
var helloFour = () => {
    console.log("Hello four!");
}
helloFour();
console.log("------------------");
console.log("------------------");
var helloFive = () => {
    console.log("Hello five!");
}
helloFive();
console.log("------------------");

// Functions with parameters
function helloSix(name) {
    console.log("Hello " + name + "!");
}
helloSix("Alice");
console.log("------------------");

//Functions with return values
function add(a, b) {
    return a + b;
}
var sum = add(5, 3);
console.log("The sum is: " + sum);
console.log("------------------");

function multiply(number){
    var result = number * 2;
    return result;
}
var multipliedValue = multiply(4);
console.log("The multiplied value is: " + multipliedValue);
console.log("------------------");

// Importi function from another file
import { printAge } from '../helpers/printHelpers.js';
printAge(5)