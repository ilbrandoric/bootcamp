/*

Create an array myArray with any 5 elements. Your choice of type and value!
Remove the last element from the array and save it into a variable named lastElement
Remove the first element from the array and save it into a variable named firstElement
Add the value of lastElement to the start of the array
Add the value of firstElement to the end of the array


*/

const myArray = [10, "hello", true, 42, "world"];

const lastElement = myArray.pop();
const firstElement = myArray.shift();

myArray.unshift(lastElement);
myArray.push(firstElement);

console.log(myArray);