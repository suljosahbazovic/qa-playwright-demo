//RElational and Equality Operators

// In this lesson, we will explore relational and equality operators in JavaScript.
// These operators are used to compare values and determine their relationships.
// Let's start with relational operators: 
// Greater than (>), Less than (<), Greater than or equal to (>=), and Less than or equal to (<=).

let a = 10;
let b = 20;
console.log(a > b);  // false
console.log(a < b);  // true
console.log(a >= 10); // true
console.log(b <= 15); // false
// Now, let's look at equality operators:
// Equality (==) and Strict Equality (===)


console.log("========================");  // true
var x = 5;
//var y = '5';
console.log(x == '5');
console.log(x === '5');
// The equality operator (==) checks for value equality, while the strict equality operator (===) checks for both value and type equality.
// In this case, x == y returns true because they have the same value, but x === y returns false because they are of different types (number and string).   
// It's important to understand the difference between these operators to avoid unexpected results in your code. Always consider using strict equality (===) to ensure that both value and type are being compared.
// In summary, relational and equality operators are essential tools for comparing values in JavaScript.
// They allow you to determine the relationships between values and make decisions based on those relationships.
