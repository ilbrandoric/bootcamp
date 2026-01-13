/*

Implement the function named sortProducts that takes one parameter matrix, which is an array of arrays.
Inside the matrix array, each nested array holds objects. Each object represents a product.

[

  [
    { category: 'tech', product: "iPhone X", price: 320 },
    { category: 'food', product: "Cheerios", price: 5 },
  ],

  [
    { category: 'food', product: "Snickers", price: 1.5 },
    { category: 'tech', product: "Air Pods", price: 129 },
  ],  

]


The function should loop over the matrix and create a new object containing the products sorted by their category.
The function should then return back this result object containing sorted products, stored in properties tech and food.

The result object should have the following structure:

result
{
 tech:  [ { tech product }, { tech product } ],
 food:  [ { food product }, { food product } ],
}


*/

function sortProducts(matrix) {

  const result = {}; // Empty object to hold the grouped products

  // The first loop i 'navigates' in the data array

  for (let i = 0; i < matrix.length; i++) {
    const innerArray = matrix[i];

    // The second loop 'navigates' in each inner nested array

    for (let j = 0; j < innerArray.length; j++) {
      
      const item = innerArray[j]; 
      const category = item.category; // Get the category of the current product
      
      //If category does not exist (notice the ! symbol) in result object, create it. 
      if (!result[category]) {
        result[category] = []; //Create an empty array inside result object. Notice the []
      }

      result[category].push(item); // Add the animal object to the appropriate species array. i.e. {mammal: [animal1, animal2]}
    }
  }

  return result;
}


const matrix = [

  [
    { category: 'tech', product: "iPhone X", price: 320 },
    { category: 'food', product: "Cheerios", price: 5 },
  ],

  [
    { category: 'food', product: "Snickers", price: 1.5 },
    { category: 'tech', product: "Air Pods", price: 129 },
  ],  

]

console.log(sortProducts(matrix));