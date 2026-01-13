


//Create a for loop that only prints the numbers that are multiples of 3 (3, 6, 9, 12, 15, etc.) in the range from 0 - 30.
// Hint: Use the modulo (%) operator to check if the number is a multiple of 3.


for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}