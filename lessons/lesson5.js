// Logical Operators "AND", "OR", "NOT"

// In this lesson, we will explore logical operators in JavaScript.
// Logical operators are used to combine multiple conditions and return a boolean value based on the evaluation of those conditions.
// The three main logical operators are: AND (&&), OR (||), and NOT (!).
console.log(true && true);   // All values have to be true
console.log(true && false); // false

console.log("================================");
// Logical or operators
console.log(true || true);  // any value should be true for the expression to be true
console.log(true || false); // true
console.log(false || false); // false
console.log(false || true); // false

console.log("================================");

var ageIsMoreThan18 = true;
var isUSCitizen = true;

var canDrive = ageIsMoreThan18 || isUSCitizen; // both conditions should be true for canDrive to be true
console.log("Can drive:" + canDrive);

console.log("================================");



// Logical NOT operator
console.log("Logical NOT operator:");  // false
console.log(!true);  // false
console.log(!false); // true
console.log("===============================");
var isRaining = true;
var shouldTakeUmbrella = !isRaining;
console.log("Should take umbrella: " + shouldTakeUmbrella); // false, because it's raining
console.log("===============================");