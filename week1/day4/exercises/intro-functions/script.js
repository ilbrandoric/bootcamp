// *** ITERATION 1 ***
console.log('*** ITERATION 1 ***');

let word1 = 'bottle';
let word2 = 'banana';
let word3 = 'pigeon';
let word4 = 'bongo';

function checkIfSimilar(firstWord, secondWord) {
  let numCharacters1 = firstWord.length;
  let numCharacters2 = secondWord.length;

  let firstCharacter1 = firstWord[0];
  let firstCharacter2 = secondWord[0];

  if (
    numCharacters1 === numCharacters2 &&
    firstCharacter1 === firstCharacter2
  ) {
    return true;
  } else {
    return false;
  }
}

// test
console.log(checkIfSimilar(word1, word2)); // true
console.log(checkIfSimilar(word1, word3)); // false
console.log(checkIfSimilar(word1, word4)); // false

// *** ITERATION 2 ***

console.log('*** ITERATION 2 ***');

function mixColor(color1, color2) {
  if (color1 === color2) {
    return color1;
  } else if (
    (color1 === 'red' && color2 === 'blue') ||
    (color1 === 'blue' && color2 === 'red')
  ) {
    return 'violet';
  } else if (
    (color1 === 'red' && color2 === 'yellow') ||
    (color1 === 'yellow' && color2 === 'red')
  ) {
    return 'orange';
  } else if (
    (color1 === 'yellow' && color2 === 'blue') ||
    (color1 === 'blue' && color2 === 'yellow')
  ) {
    return 'green';
  } else {
    return 'The machine broke down 🤖';
  }
}

// test for the function. Uncomment all the following tests.

console.log(mixColor('red', 'red')); // => "red"
console.log(mixColor('red', 'blue')); // => "violet"
console.log(mixColor('red', 'yellow')); // => "orange"
console.log(mixColor('yellow', 'blue')); // => "green"
console.log(mixColor('blue', 'yellow')); // => "green"
console.log(mixColor('pink', 'red')); // => "The machine broke down 🤖"
