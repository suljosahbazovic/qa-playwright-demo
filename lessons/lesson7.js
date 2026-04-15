//Loops
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while (condition) {
//     //execute this code while condition is true
// }
console.log("================================");
var i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
console.log("================================");
let j = 0;
for (j = 0; j < 5; j++) {
    console.log("Hello World!");
}

console.log("================================");

var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//for of loop
for (let car of cars) {
    console.log(car);
    if(car == "Ford"){
        break;
    }
}
console.log("================================");
//ES6  for of loop
cars.forEach(car => {
    console.log(car);
}); 
console.log("================================");