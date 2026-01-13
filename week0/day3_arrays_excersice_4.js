
/*

Use a loop to iterate over the prices array and calculate the sum of all the numbers in the array.
Round the sum to two decimals. Use console.log() to print out the value of the sum.

*/

//This is an array. It has [] containing numbers

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

for (let i = 0; i < prices.length; i++) {
    sum += prices[i];

}

console.log(sum.toFixed(2));