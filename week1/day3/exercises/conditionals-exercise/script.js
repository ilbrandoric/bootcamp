let message = "Im not sure what you're trying to do. Sorry! 🍺";

/* *** Iteration 1 *** */

const name = 'Bob';
const language = 'french';

/* *** Iteration 2 *** */

// if (language === 'english') {
//   console.log(`Hello ${name} !`);
// } else if (language === 'spanish') {
//   console.log(`Hola ${name} !`);
// } else if (language === 'french') {
//   console.log(`Bonjour ${name} !`);
// } else {
//   console.log(message);
// }

// TESTS
//console.log(message);

switch (language) {
  case 'english':
    console.log(`Hello ${name} !`);
    break;

  case 'spanish':
    console.log(`Hola ${name} !`);
    break;

  case 'french':
    console.log(`Bonjour ${name} !`);
    break;

  default:
    console.log(message);
}
