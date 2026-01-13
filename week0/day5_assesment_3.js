/*

Task Instructions
Create a function named sumArray that receives an array of numbers as an argument.
The function should return the sum of all the numbers in the array.

Additionaly, the function should return 0, when an empty array [] is passed as the argument.

Example - Input/Expected Output:
input: [1, 2, 3, 4]
output: 10

input: [1, 2, 3, -4]
output: 2

input: [10, 5, 15]
output: 30

input: []
output: 0

*/

let numbers = [];

function sumArray(numbers) {
  let result = 0;

  for (i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

const sum = sumArray(numbers);
console.log(sum);