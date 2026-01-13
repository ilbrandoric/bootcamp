

//Create a for loop that only prints the numbers that are multiples of 5 (5, 10, 15, 20, etc.) in the range from 1 - 50.
//Hint: Use the modulo (%) operator to check if the number is a multiple of 5.


for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}