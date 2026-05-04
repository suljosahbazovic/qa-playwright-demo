export function printAge(age) {
    console.log(age);
};

class CastumerDetails {
    printFirstName(firstName) {
        console.log(firstName)
    }

    printLastName(lastName) {
        console.log(lastName)
    }

    printAge(age) {
        console.log(age)
    }
}

export const customerDetails = new CastumerDetails();