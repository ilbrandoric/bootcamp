
//Create a function that takes the number of dog years and converts it to human years. 
// human years = dog years * 7


function convertDogYears (dogYears) {
    return dogYears * 7;
}

const result = convertDogYears(1);

console.log(`Your dog is ${result} human years old.`)


/*

===Arrow Function Version===

const convertDogYears = dogYears => dogYears * 7;
const result = convertDogYears(1);
console.log(`Your dog is ${result} human years old.`)

*/