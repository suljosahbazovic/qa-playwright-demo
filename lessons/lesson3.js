//Objects and Arrays Lesson

//1. Create an object called "car" with properties: make, model, year, and color.
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'blue',
    cars: ['Honda', 'Ford', 'Chevrolet']
}; 
console.log(" Make: " + car.make + "\n","Model: " + car.model + "\n","Year: " + car.year + "\n","Color: " + car.color);
//2. Add a method to the "car" object that returns a string with the car's details.
car.getDetails = function() {
    return `${this.year} ${this.color} ${this.make} ${this.model}`;
};
console.log(car.getDetails());

//3. Create an array called "fruits" that contains at least five different fruit names.
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
//console.log(fruits);

fruits[1] = 'blueberry';
console.log(fruits[1]);
console.log(car.cars[0]);

//4. Write a function that takes the "fruits" array as an argument and returns a new array with the fruit names in uppercase.
function toUpperCaseFruits(fruitArray) {
    return fruitArray.map(fruit => fruit.toUpperCase());
}   
console.log(toUpperCaseFruits(fruits));