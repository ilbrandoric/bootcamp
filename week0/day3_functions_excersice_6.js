
/*
Create a function that takes the first name, last name and year of birth and returns a string showing the full name and the age of the person.

Create a function named generateIdCard that receives three parameters:
firstName which is a string
lastName which is a string
birthYear which is a number

The function should return a string containing the full name and the age of the person in the following format:
Jane Doe - 45 years old

To calculate the age use the formula: age = current year - year of birth
To check your code, invoke the function generateIdCard passing it the required arguments. Example:
const idCard = generateIdCard("John", "Doe", 1984);

*/

function generateIdCard(firstName, lastName, birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return `${firstName} ${lastName} - ${age} years old`;
}

const idCard = generateIdCard("John", "Doe", 1984);
console.log(idCard);