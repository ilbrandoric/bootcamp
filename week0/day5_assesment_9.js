/*

Implement the function pickOdd that has one parameter arr, which is an array of numbers.

The function should loop over the array arr and check each number in the array if it is an even or odd number.

The function should return an array containing only odd numbers (1,3,5, etc...).
If no odd numbers are present in the array arr the function should return an empty array.

Important: You must use the keyword return to return the value from the function. Tests can only check the output value that your function returns. Any console.log output will be ignored.



Example - Input/Expected Output:
⠀
input: [1, 2, 3, 4]
output: [1, 3]

input: [1, 1, 3, 21]
output: [1, 1, 3, 21]

input: [2, 10, 2, 6]
output: []


*/

function pickOdd(arr){
    const result = [];

    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 !== 0){
        result.push(arr[i]);
      }  
    }
    return result;
}

console.log(pickOdd([1,2,3,4])); //expected output [1,3]
console.log(pickOdd([1,1,3,21])); //expected output [1,1,3,21]
console.log(pickOdd([2,10,2,6])); //expected output []