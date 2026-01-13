

/*

Task Instructions
Implement the function named filterPizzas that receives an array of objects, named pizzas.

Each object in the pizzas array represents a pizza of a different type and size.

Each pizza object has a type property, which is a string containing the pizza type::
"pineapple", "pepperoni", or "mushrooms".

The function should return back an array containing only objects that are NOT "pineapple" pizzas.

Hint: Instead of trying to modify the current array, try creating a new one.


Example - Input/Expected Output:
Input:

[
  { type: 'pineapple', size: 'M'},
  { type: 'pepperoni', size: 'S'},
  { type: 'pineapple', size: 'S'},
  { type: 'mushrooms', size: 'L'}
]
Expected Output:

[   
  { type: 'pepperoni', size: 'S'}, 
  { type: 'mushrooms', size: 'L'}  
]


Input:

[
  { type: 'pineapple', size: 'M'},
  { type: 'pineapple', size: 'L'},
  { type: 'pineapple', size: 'S'},
];
Expected Output:

[  ]

*/

function filterPizzas(pizzas) {
    const result = [];

    for (let i = 0; i < pizzas.length; i++) {
        if (pizzas[i].type !== 'pineapple') {
            result.push(pizzas[i]);
        }
    }
    
    return result;
}

// Filter result

const pizzas = [
  { type: 'pineapple', size: 'M'},
  { type: 'pepperoni', size: 'S'},
  { type: 'pineapple', size: 'S'},
  { type: 'mushrooms', size: 'L'}
]

console.log(filterPizzas(pizzas))