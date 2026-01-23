console.log('*** Iteration 1 *** ');
// Iteration 1: Return the total population of the given array (data) in the function 'totalpopulation' created below for you
// the function must return 0 if the array is empty


const data = [
  {
    country: 'USA',
    pop: 340,
  },
  {
    country: 'France',
    pop: 133,
  },
  {
    country: 'Bosnia',
    pop: 5,
  },
];

// Reduce function applied on data array DIRECTLY into the array.
// No need to use forEach or a for loop

function totalPopulation(arr) {
  const total = arr.reduce((acc, elem) => {
    return acc + elem.pop;    //Pop refers to population 
  }, 0);

  return total;
};

console.log(totalPopulation(data));

// What happens with reduce on an empty array?

let output = totalPopulation([]);
console.log(output); // output = 0


console.log('*** Iteration 2 *** ');

// Iteration 2: Given a menu of foods and their calories,

// - calAvgCalories should return the AVERAGE NUMBER of calories as a NUMBER and rounded to TWO DECIMALS.
// - Check the methods toFixed and parseFloat to manage this.
// - the function must return null if the array is empty

// HINT: First calculate the total with .reduce . Then calculate the average

const menu = [
  { name: 'Carrots', calories: 150.45 },
  { name: 'Broccoli', calories: 120.23 },
  { name: 'Chicken', calories: 250.65 },
  { name: 'Pizza', calories: 520.12 },
];

// below function is created as an arrow function

const calAvgCalories = (arr) => {
  
  const totalCalories = arr.reduce((acc, elem) => {
    return (acc + elem.calories);
    
  }, 0);
    
  //Round down
    const averageCalories = Math.floor((totalCalories / arr.length) * 100) / 100;
  
    return ` Total calories: ${totalCalories} 
    Average calories: ${averageCalories}`;
    
};


// Invoking and running the function

let output1 = calAvgCalories(menu);
console.log(output1); //Answer should be 260.36


console.log(`This will run an empty array into calAvgCalories`);

let output2 = calAvgCalories([]);
console.log(output2); //Returns NaN because you divide by zero when calculating the array

// -------------------------------------------------------
// // 