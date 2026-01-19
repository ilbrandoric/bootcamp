
/*

Find the max number in an array (cleanest version)

function maxOfArray(numbers) {
  if (numbers === []){
    return false
  } else {
    
    let largest = numbers[0]

    for (let i = 0; i < numbers.length; i++){
      if (numbers[i] > largest){
        largest = numbers[i]
      } else {
        i+1
      }
    }
    return largest;
}

const numbers = [1,2,3,4,5,100,-1]

*/


/*

Example of how to compare strings in an array.
Note the string.length comparison and NOT >

function longestString(strings) {
  if (strings.length === 0) return null;

  let largest = strings[0];

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > largest.length) {
      largest = strings[i];
    }
  }

  return largest;
}

console.log(longestString(['ana', 'ivan', 'jan', 'nick']));

*/

/*

Concatenate first and last from an array

function getFullName(personObj) {

  let firstName = personObj.firstName;
  let lastName = personObj.lastName;
  let fullName = firstName + " " + lastName;
  
    return fullName;
}

console.log(getFullName({ firstName: 'Tony', lastName: 'Stark'}));

*/

/*
indexOf quick output guide:

1   = the word exists
-1  = the word does NOT exist

const words = ["a", "b", "c"];

words.indexOf("x");     // -1
words.lastIndexOf("x"); // -1

*/

function doesWordExist(wordsArr, word) {
  
  if (wordsArr.indexOf(word) !== -1){
    return true;
  } else {
    return false;
  }
} 

console.log(doesWordExist(['ana', 'jan', 'nick'], 'jan' ));

*/


/*



*/

/*

This function finds the first unique or non-repeating word in an array.

indexOf(words[i]) :  gives the first position where this word appears
lastIndexOf(words[i]) : gives the last position where this word appears

If they are equal then its unique. 


function findUnique(words) {
  
  if (words.length === 0){
    return false;
  }
  
  for (let i = 0; i < words.length; i++) {
    if (words.indexOf(words[i]) === words.lastIndexOf(words[i])) {
      return words[i];
    }
  }
  return null;
}

console.log(findUnique(['ana', 'ivan', 'jan', 'ana', 'jan']));

