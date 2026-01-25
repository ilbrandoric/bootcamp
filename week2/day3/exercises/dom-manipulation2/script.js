


/* 
======WARNING: DO NOT TRY TO RUN THIS FILE WITH NODE.JS ======
!!!!!! RUN THE CODE IN THE BROWSER CONSOLE TO SEE THE OUTPUT !!!!!!

=========================================================



=========================
ITERATION 1 – INSTRUCTIONS
=========================

GOAL:
When the button is clicked, update all 3 pokemon cards
with a random background color and a random pokemon image.



====================================================
ITERATION 1 – WHAT YOU NEED TO DO
====================================================

PART A – Button click logic
---------------------------

1. Select all divs with class "pokemon-card"
2. Loop through them (forEach or for loop)
3. For each card, call: selectRandomPokemon(card)

PART B – Card update logic
--------------------------
4. Change the background color of the card
   → use the variable: randomColor

5. Find the <img> inside the card
   → use cardNode.querySelector("img")

6. Change the image source
   → use the variable: randomPokemonSrc

ORDER:
- Do Part A first and test the button
- Then do Part B and test again
====================================================
*/


/* ======================
   CODE (DO NOT MOVE)
   ====================== */

let updatePokemonsButton = document.querySelector('#btn-update'); //Targets button

updatePokemonsButton.addEventListener('click', () => {

  /*  Step 1 + 2 go here 
  
  On click it targets all pokemon cards and loops through them.
  On every loop it calls a function that generates a random pokemon.

  */
  let pokemonCards = document.querySelectorAll('.pokemon-card');
  pokemonCards.forEach((card) => {
    selectRandomPokemon(card);
  });


});

// This function receives a card node afrom the loop above and updates it

const selectRandomPokemon = (cardNode) => {

  /* DO NOT MODIFY */
  let randomColor = '#' + Math.random().toString(16).slice(-6);

  /*

  Math.random()
  Creates a random number between 0 and 1 like : 0.34829384

  .toString(16)
  Converts that number into a hexadecimal string (base 16, used for colors)
  Example: "0.593fa9c2"

  .slice(-6)
  Takes the last 6 characters of that string
  Example: "fa9c2b"

  '#' + ...
  Adds the # in front to make it a valid CSS color
  Example: #fa9c2b  


  */

  /* DO NOT MODIFY */
  let randomPokemonSrc = `https://tinyurl.com/ironhack-pokemons/${
    Math.floor(Math.random() * 150) + 1
  }.svg`;

  /* TODO: Steps 4, 5, 6 go here */

  // Targets all 3 cards in one go
  let colorSwap = document.getElementsByClassName('pokemon-card');

  /*  Output:
  
  [
  div.pokemon-card,
  div.pokemon-card,
  div.pokemon-card
  ]

  */

 // 4. Change background color of all three cards at once
  cardNode.style.backgroundColor = randomColor;

  // 5. Targets <img> on all three cards at once:
  const imgNode = cardNode.querySelector("img");

  // 6. Update image source on all three cards at once:
  imgNode.src = randomPokemonSrc;



  
  /* 
  
  NOTES: We're already looping inside the pokemon-card class and making changes to each card individually.
  NO NEED to loop again here.
  
  */

};





// ACTIVITY SOLUTION: https://gist.github.com/jorgeberrizbeitia/c76e6ab25ed745e23691dee4ea597ee3
