/*

Create a function named calculateHours that has two parameters: 

hoursPerDay and days ( in that order), representing the numbers to multiply.
thatcalculates the total working hours by multiplying the numbers provided.
returns the number of total working hours.
I

Example - Input/Expected Output:
input: 8, 5
output: 40

input: 4, 5
output: 20

input: 10, 6
output: 60

*/


/*

// First solution

function calculateHours(hoursPerDay, days) {
    let result = 0;

    result = hoursPerDay * days;

    return result;
}
*/

// Direct solution

function calculateHours(hoursPerDay, days) {
    // Your code here
    return hoursPerDay * days;
}
console.log(calculateHours(4,5));


//you can use the following to check your function works correctly
console.log(calculateHours(8,5)); //expected output 40
console.log(calculateHours(4,5)); //expected output 20
console.log(calculateHours(10,6)); //expected output 60
