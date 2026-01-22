console.log('*** Iteration 1 *** ');


// Iteration 1: Complete the function that, given an array of numbers, returns a new array that only includes:
//  -  The numbers that are odd
//  -  The numbers less than 100
// Make sure you use the filter method to solve the iteration

const numbers = [1, 60, 112, 123, 100, 99, 73, 35];

function oddNumbers(arr) {
   
    const oddNumbers = numbers.filter(n => n % 2 !== 0 && n < 100);
    console.log(oddNumbers); // [2, 4, 6]

};

let filteredNumbers = oddNumbers(numbers)
console.log(filteredNumbers) // [1,99,73,35]

//----------------------------------------------------------------------


//console.log('*** Iteration 2 *** ');
// Iteration 2: From the given array of people, get the people who are allowed to consume alcoholic beverages (i.e age >= 21).

const people = [
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
  { name: "Nettie", age: 20 },
  { name: "Stuart", age: 17 },
  { name: "Bill", age: 19 }
];

// note that "adults" is still just a function (just a function of arrow type)

// const adults = (arr) => {
   
//     const adults = arr.filter(person => person.age >= 21);
//     console.log(adults); 

// }

// let canDrink = adults(people)
// console.log(canDrink) 

//Answer should be 
/*
[
  { name: "Candice", age: 25 },
  { name: "Tammy", age: 30 },
  { name: "Allen", age: 21 },
]
*/

//----------------------------------------------------------------------

// Bonus: Modify the above function 'adults' so that the array only includes the names of the 3 people who can drink.
// like this: ["Candice", "Tammy", "Allen"]
// you might need to do another method we learned previously.


console.log (`**** BONUS PRACTICE ****`)

const adults = (arr) => {
  return arr
    .filter(person => person.age >= 21)
    .map(person => person.name);
};

let canDrink = adults(people)
console.log(canDrink);