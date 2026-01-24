


/* 
======WARNING: DO NOT TRY TO RUN THIS FILE WITH NODE.JS ======
!!!!!! RUN THE CODE IN THE BROWSER CONSOLE TO SEE THE OUTPUT !!!!!!

*/



// *************************
// ****** ITERATION 1 ******
// *************************

// When you click on the button "Update the Dream Team" 3 random pokemon should appear on the cards, each with a random background color. Don't worry, we will give you the code for selecting a random pokemon and color.

// First, read the HTML and the JS code already written carefully.

// When you are ready to code, start inside the addEventListener with the instructions 1 and 2. Once you are done, test by clicking on the button and then move to the function randomPoke with instructions 3 to 5.

let updatePokemonsButton = document.querySelector('#btn-update');
updatePokemonsButton.addEventListener('click', () => {
  // 1. Select a NodeList with all 3 divs of class "pokemon-card"
  // 2. Iterate over the nodeList with a for loop or a forEach method and for every node, invoke the function selectRandomPokemon. Pass each card node as an argument to the function.
  // After you save, you should see the console.log inside the selectRandomPokemon function, 3 times.
  // ... continue with step 4 in the selectRandomPokemon function
});

const selectRandomPokemon = (cardNode) => {
  console.log('working inside each pokemon card!', cardNode);

  // * DON'T CHANGE BELOW LINE * It will give you a random color in hexadecimal inside the randomColor variable
  let randomColor = '#' + Math.random().toString(16).slice(-6);
  // * DON'T CHANGE BELOW LINE * It will give you a random pokemon image source inside the randomPokemonSrc variable
  let randomPokemonSrc = `https://tinyurl.com/ironhack-pokemons/${
    Math.floor(Math.random() * 150) + 1
  }.svg`;

  // 3. Change the background color of the card. Use the randomColor variable as the value.

  // 4. Look for the img node inside the cardNode. You will have to use a querySelector on the card node (not on the whole document)

  // 5. Change the src of the img tag. Use the randomPokemonSrc variable as the value.

  // after you are done, test by clicking the button "Update the Dream Team"
};

// ACTIVITY SOLUTION: https://gist.github.com/jorgeberrizbeitia/c76e6ab25ed745e23691dee4ea597ee3
