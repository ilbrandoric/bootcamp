
/* 

Your task is to create an if/else/else if statement working in the following way:

If the value of department is "shoes" OR "clothes", set the value of the variable floor to "1st Floor".
Else if the value of department is "electronics", set the value of the variable floor to "2nd Floor".
Else if the value of department is "gardening", set the value of the variable floor to "3rd Floor".
Else set the value of the variable floor to "Ground Floor".
To check your code, try changing the value of the variable department to "clothes", "electronics", "gardening", or any other string.


*/

let floor;
const department = "gardening"; // "clothes", "electronics", "gardening"

if (department === "shoes" || department === "clothes") {
    floor = "1st Floor";
} else if (department === "electronics") {
    floor = "2nd Floor";
} else if (department === "gardening") {
    floor = "3rd Floor";
} else {
    floor = "Ground Floor";
}

// Check your code:
console.log(`Going to the ${department} department - ${floor}.`)



