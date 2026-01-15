// Iteration 1

console.log('Iteration 1');

for (let i = 0; i <= 15; i++) {
  console.log(i);
}

// Iteration 2

// console.log('Iteration 2');

// for (let i = 0; i <= 15; i++) {
//   if (i % 3 === 0) {
//     console.log('Pen');
//   } else if (i % 5 === 0) {
//     console.log('Apple');
//   } else if (i % 3 === 0 && i % 5 === 0) {
//     console.log('ApplePen');
//   } else {
//     console.log(i);
//   }
// }


// Correct iteration 2

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("ApplePen")
  } else if (i % 3 === 0) {
    console.log("Pen")
  } else if (i % 5 === 0) {
    console.log("Apple")
  } else {
    console.log(i)
  }
}

// Notice the order of conditions if (i % 3 === 0 && i % 5 === 0) should be first 
// to correctly log "ApplePen" for numbers divisible by both 3 and 5.