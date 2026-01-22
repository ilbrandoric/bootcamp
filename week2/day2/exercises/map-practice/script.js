console.log('*** Iteration 1 *** ');
// Iteration 1: use .map() to create a new array with each fruit capitalized (the whole word)
// IMPORTANT! Don't forget the return keyword.

const fruits = ['pineapple', 'orange', 'mango'];

const upperCaseFruits = fruits.map((eachElement) => {
  return eachElement.toUpperCase()
});

// test
console.log(upperCaseFruits);
// Output should be  ['PINEAPPLE', 'ORANGE', 'MANGO'];

//-------------------------------------------------------

console.log('*** Iteration 2 *** ');
// Try writing the map yourself now
// Iteration 2: use .map() to create a new array with each city capitalized (only first letter)

const cities = ['miami', 'barcelona', 'madrid', 'amsterdam'];

const upperCaseCities = cities.map(city => {
  return city[0].toUpperCase() + city.slice(1);
});


console.log(upperCaseCities)


// Output should be should be :
// [ 'Miami', 'Barcelona', 'Madrid', 'Amsterdam']

//-------------------------------------------------------

console.log('*** Iteration 3 *** ');
// Lets try and use functions now
// Iteration  3: Complete the function onlyNames that should return only the names of the restaurants as an array of strings.
// Note: Be careful here. The function should use the parameter in order for it to be dynamic.



const info1 = [
  { name: 'Mirazur', owner: 'Gustavo' },
  { name: 'Noma', owner: 'Taka' },
  { name: 'Gaggan', owner: 'Alvaro' },
];

const info2 = [
  { name: 'Geranium', owner: 'Alberto' },
  { name: 'Arpège', owner: 'Luis' },
];



function onlyNames(array) {
    const onlyRestaurantNames = array.map((eachRestaurantObj) => {
        return eachRestaurantObj.name;
    });
    return onlyRestaurantNames;

}  



// TEST AREA //

const restaurants1 = onlyNames(info1);
console.log(restaurants1);
// Output should be [ 'Mirazur', 'Noma', 'Gaggan']
const restaurants2 = onlyNames(info2);
console.log(restaurants2);

// Output should be [ 'Geranium', 'Arpège']
//const cities = ['miami', 'barcelona', 'madrid', 'amsterdam'];

