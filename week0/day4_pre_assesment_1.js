
/*

Exercise 1: Group Animals by Species

Implement a function named groupAnimals that will recieve one main array.

The main array contains arrays, and each nested array contains objects.
Each object represents an animal with two properties: species and name.

Main Array Example:

[
  [
    { species: "mammal", name: "Elephant" },
    { species: "bird", name: "Parrot" }
  ],
  [
    { species: "reptile", name: "Iguana" },
    { species: "mammal", name: "Tiger" }
  ]
]

Your function must:

1. Loop over the matrix (all nested arrays).
2. Create a new object that groups animals by species.
3. The returned object must have keys:
 mammal, bird, and reptile, each storing an array of animal objects belonging to that category.

 Expected Output:

{
  mammal: [
    { species: "mammal", name: "Elephant" },
    { species: "mammal", name: "Tiger" }
  ],
  bird: [
    { species: "bird", name: "Parrot" }
  ],
  reptile: [
    { species: "reptile", name: "Iguana" }
  ]
}

Hints:
Create a new object, do not modify the original main array.
You must return the final object.


*/

// Example array with nested arrays and animal objects

const data = [
  [
    { species: "mammal", name: "Elephant" },
    { species: "bird", name: "Parrot" }
  ],
  [
    { species: "reptile", name: "Iguana" },
    { species: "mammal", name: "Tiger" }
  ]
];


// Function to group animals by species

function sortProducts(data) {

  const result = {}; // Empty object to hold the grouped animals

  // The first loop i 'navigates' in the data array

  for (let i = 0; i < data.length; i++) {
    const innerArray = data[i];

    // The second loop 'navigates' in each inner nested array

    for (let j = 0; j < innerArray.length; j++) {
      const animal = innerArray[j]; // Each animal (species + name) is stored in this variable
      const species = animal.species; // Get the species of the current animal

      //If species does not exist (notice the ! symbol) in result object, create it. 

      if (!result[species]) {
        result[species] = []; //Create an empty array inside result object. Notice the []
      }

      result[species].push(animal); // Add the animal object to the appropriate species array. i.e. {mammal: [animal1, animal2]}
    }
  }

  return result;
}



// Call the function and log the result

const groupedAnimals = sortProducts(data);
console.log(groupedAnimals)
