//Conditional statements

// if (condition){
//     //execute this code if condition is true
// }
// else {
//     //execute this code if condition is false
// }

// If hours beetween 6am and 12pm: Good morning!
// If hours beetween 12pm and 6pm: Good afternoon!
// If hours beetween 6pm and 6am: Good evening! 
let hours = 5;
if (hours >= 6 && hours < 12){ 
    console.log("Good morning!");
}else if (hours >= 12 && hours < 18){
    console.log("Good afternoon!");
}
else {
    console.log("Good evening!");
}   