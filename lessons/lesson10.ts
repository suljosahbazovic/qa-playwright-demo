// TypeScript vs JavaScript: TypeScript

var customerFirstName: string = "John"
var customerLastName: string = "Doe"
var customerAge: number = 30

// export const customerDetails = {
//     printFirstName: function(name: string) {
//         console.log("Customer's First Name: " + name);
//     },
//     printLastName: function(name: string) {
//         console.log("Customer's Last Name: " + name);
//     },
//     printAge: function(age: number) {
//         console.log("Customer's Age: " + age);
//     }
// };

type CustomerDetails = { firstName: string, lastName: string, age: number, active: boolean }

var customerDetails: CustomerDetails = {
    firstName: customerFirstName,
    lastName: customerLastName,
    age: customerAge,
    active: true
}