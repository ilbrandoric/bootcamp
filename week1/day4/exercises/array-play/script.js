let animals = [
  'Alligator',
  'Alpaca',
  'Ant',
  'Donkey',
  'Baboon',
  'Bear',
  'Beaver',
  'Boar',
  'Capybara',
  'Cat',
  'Cheetah',
  'Coyote',
  'Crocodile',
  'Dog',
  'Duck',
  'Echidna',
  'Falcon',
  'Fox',
  'Frog',
  'Hippopotamus',
  'Hyena',
  'Kangaroo',
  'Llama',
  'Meerkat',
  'Narwhal',
  'Penguin',
  'Red Panda',
  'Salamander',
  'Seal',
  'Shark',
  'Squirrel',
  'Stingray',
  'Tiger',
  'Viper',
  'Vulture',
  'Weasel',
  'Wombat',
  'Woodpecker',
  'Yak',
  'Zebra',
];

// **** ITERATION 1. print in the console how many animals are in the array

// ... your code here

console.log(animals.length);

// output should be: 40

// **** ITERATION 2. print in the console a boolean (true or false) if "Platypus" is inside the Array. Use the learned methods to do so!

console.log(animals.indexOf('Platypus')); // If TRUE it returns the index number. If FALSE returns -1
console.log(animals.includes('Platypus')); // Gives the boolean directly

// output should be: false

// **** ITERATION 3. print in the console the position of "Red Panda". Use the learned methods to do so!

// "Red Panda"

let redPandaIndex = animals.indexOf('Red Panda');
console.log(redPandaIndex);

// output should be: 26

// **** ITERATION 4. create a new array only with the first 10 animals. Use the learned methods to do so! print it in the console.

// ... your code here

// output should be: [
//   'Alligator', 'Alpaca',
//   'Ant',       'Donkey',
//   'Baboon',    'Bear',
//   'Beaver',    'Boar',
//   'Capybara',  'Cat'
// ]

let newAnimals = animals.slice(0, 10);
console.log(newAnimals);

// **** ITERATION 5. print in the console the FIRST and LAST element of the new 10 animals array.

console.log(`${newAnimals[0]} ${newAnimals[newAnimals.length - 1]}`);

// output should be: 'Alligator' 'Cat'

// **** ITERATION 6. print in the console the third character of the SECOND animal.

let secondAnimal = newAnimals[1];
console.log(`${secondAnimal[2]}`);

// output should be: 'p'

// **** ITERATION 7. create a new Array with the following 3 animals:

// - The first Animal of the array (using the index position 0).
// - a new animal: "Platypus".
// - The red panda! (using the known index position).

// ... your code here

let newArray = [animals[0], 'Platypus', redPandaIndex];

console.log(newArray);
