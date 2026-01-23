
console.log('*** Iteration 1 *** ');

// Iteration 1: Complete the function that receives an array of strings and sorts them by shortest strings to longest strings.
// Do not mutate the original array

const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

function sortByLength(arr) {
  const sorted = [...arr].sort((a, b) => a.length - b.length); //copies the array and sorts the copy from smallest to largest, leaving the original array unchanged.
  return sorted; //notice a.length is used to work proper because they are strings and not numbers. If numbers a - b would work. 
};

let longestStrings = sortByLength(arrOfStrings);
console.log(longestStrings); //ANSWER should be ['yo', 'cat', 'wolf', 'animal']

//-------------------------------------------------------

console.log('*** Iteration 2 + 3 *** ');

// Iteration 2: Complete the function that sort the objects in the array by age in ascending order.

const somePeople = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Bill', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 30 },
  { name: 'Allen', age: 19 },
  { name: 'Bobby', age: 30 },
];

// Sort also interates directly over the array, no for loops needed
// Notice you're comparing age with a.age vs b.age


const sortByAge = (arr) => {
  return [...arr].sort((a, b) => {
    // Sort by age 
    if (a.age !== b.age) {
      return a.age - b.age;
    }
    // If age is the same, sort by name (A–Z)
    return a.name.localeCompare(b.name);      //Compare the two names alphabetically. Names are strings → localeCompare
  });
};


let sortedOutput = sortByAge(somePeople);
console.log(sortedOutput);

//ANSWER should be
/*
 [
  { name: 'Bill', age: 19 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Stuart', age: 30 },
  { name: 'Bobby', age: 30 },
];
*/

//-------------------------------------------------------
// BONUS: In the function sortByAge, add a new condition for sorting. If the ages are the same, sort alphabetically by name (A to Z).
// To do this, you may need to nest a new conditional if the ages are the same. To sort alphabetically you can directly compare the strings or use the localeCompare method.

//ANSWER should be
/*
 [
  { name: 'Allen', age: 19 },
  { name: 'Bill', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Bobby', age: 30 },
  { name: 'Stuart', age: 30 },
  { name: 'Tammy', age: 30 },
];
*/
