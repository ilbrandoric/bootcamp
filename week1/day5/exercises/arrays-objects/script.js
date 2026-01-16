

const ironhacker = {
  firstName: 'Marko',
  age: 39,
  favoriteLanguage: 'JavaScript',
  isSatisfied: true,
  'works at': null,
  isRemote: false,
  address: {
    country: 'Portugal',
    city: 'Lisbon',
  },
};

// 1: Update age to 40 and console.log the new value

ironhacker.age = 40;
console.log(ironhacker.age);

// 2: Update ironhacker's place of work to 'Google' and console.log the new value

ironhacker['works at'] = 'Google';
console.log(ironhacker['works at']);

// 3: Remove the 'isRemote' property and console.log the new value of 'isRemote' to make sure it is undefined

delete ironhacker.isRemote;
console.log(ironhacker.isRemote);

// 4: Add a new property: 'didGraduate' and set it to a valid boolean value and console.log the new value

ironhacker.didGraduate = true;
console.log(ironhacker.didGraduate);

// 5: console.log all keys (property names) of the ironhacker object (you can print them as an array or as individual console.logs)

console.log(Object.keys(ironhacker));


// This code will also work with a loop:
// for (let key in ironhacker) {
//   console.log(key);
// }


// 6: check if ironhacker has property 'favoriteLanguage'. Console.log a boolean true or false depending if 'favoriteLanguage' exists as a preperty
// ... your code here


console.log(ironhacker.hasOwnProperty('favoriteLanguage'));


// 7: BONUS: update the property city to be 'Porto' and console.log the new value
// - Note that it is nested inside another object.


/*
const ironhacker = {
  firstName: 'Marko',
  age: 39,
  favoriteLanguage: 'JavaScript',
  isSatisfied: true,
  'works at': null,
  isRemote: false,
  address: {
    country: 'Portugal',
    city: 'Lisbon',
  },
};

*/

ironhacker.address.city = "Porto";
console.log(ironhacker.address.city);

// 8: BONUS: Complete the following function:
// it should print the country and city of the person with the following string structure:
// Our ironhacker FIRST_NAME is from CITY, COUNTRY

function countryAndCity(person) {
  let message = `${person.firstName} is from ${person.address.city}, ${person.address.country}`;
  return message;
}

console.log('Bonus 8. >> ', countryAndCity(ironhacker));
