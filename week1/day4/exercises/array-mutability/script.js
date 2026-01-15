const favorites = ['canvas', 'javascript', 'html', 'css', 'hbs'];

// 1. remove the first element of the array

let removedItems = [];
removedItems = favorites.shift();
console.log(removedItems);

console.log('Iteration 1.', favorites); // => [ 'javascript', 'html', 'css', 'hbs' ]

// 2. remove the last element of the array

let removedLastElement = favorites.pop();

console.log('Iteration 2.', favorites); // => [ 'javascript', 'html', 'css' ]

// 3. add an 'react' as the first element of the array

favorites.unshift('react');

console.log('Iteration 3.', favorites); // => [ 'react', 'javascript', 'html', 'css' ]

// 4. add an 'node' as the last element of the array

favorites.push('node');

console.log('Iteration 4.', favorites); // => [ 'react', 'javascript', 'html', 'css', 'node' ]

// 5. remove the second element and add 'express' in that position

favorites.splice(1, 1, 'express'); //Substitute basically

console.log('Iteration 5.', favorites); // => [ 'react', 'express', 'html', 'css', 'node' ]

// 6. remove the second and third elements and add 'mongodb' in that position

favorites.splice(1, 2, 'mongodb');

console.log('Iteration 6.', favorites); // => [ 'react', 'mongodb', 'css', 'node' ]

// 7. BONUS

let favoritesFirstHalf;
let favoriresSecondHalf;

// use the variables above to store the elements of favorites:

// - favoritesFirstHalf should have the first half of elements
// const favorites = ['canvas', 'javascript', 'html', 'css', 'hbs'];

favoritesFirstHalf = favorites.splice(0, 2);
favoriresSecondHalf = favorites.splice(0, 2);

console.log(favorites);

// - favoriresSecondHalf should have the second half of elements
// - use the splice method in order to empty the original favorites array.

// ... your code here

console.log('Iteration 7.');
console.log(favorites); // => []
console.log(favoritesFirstHalf); // => [ 'react', 'mongodb' ]
console.log(favoriresSecondHalf); // => [ 'css', 'node' ]
