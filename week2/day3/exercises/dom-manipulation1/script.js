


/* ======WARNING: DO NOT TRY TO RUN THIS FILE WITH NODE.JS ======
!!!!!! RUN THE CODE IN THE BROWSER CONSOLE TO SEE THE OUTPUT !!!!!!

=========================================================== */


/*
GOAL:
When the "Search for an animal" button is clicked, show a random animal
from the list inside the <h3> (replace "NO ANIMAL FOUND YET").

STEPS:

1. Select the elements you need:
   - All animal <li> elements (NodeList)
   - The button element
   - The <h3> element

2. Button click functionality:
   - Add a click event listener to the button
   - When clicked:
     - Select a random <li> from the list
     - Console.log the animal name
     - Set the <h3> text to the animal name

3. Test:
   - Open the console
   - Click the button
   - Check that logs appear
   - Check that the <h3> text changes

BONUS:
- Add a hover event to each <li>
- When hovering an animal:
  - Show its name in the <h3>
*/

// 1. SELECT ELEMENTS
const animalListItems = document.querySelectorAll("li"); // gets ALL animals .: querySelectorAll 
const searchButton = document.querySelector("button");   // search button theres only one so querySelector works
const h3Node = document.querySelector("h3");             // the h3 where the animal name will appear. Theres only one so querySelector works

console.log(animalListItems);
console.log(searchButton);
console.log(h3Node);

// 2. BUTTON CLICK FUNCTIONALITY

searchButton.addEventListener("click", () => {
  // pick a random animal
  const randomIndex = Math.floor(Math.random() * animalListItems.length);  // ! Generates a random valid index by generating a random number between 0 and the length of the NodeList

  const randomAnimal = animalListItems[randomIndex].textContent;

  console.log("Random animal:", randomAnimal);

  // sOutputs the random animal name to the h3
  h3Node.textContent = randomAnimal;
});

// 3. BONUS: Outut animal name on click hover

/* When hovering over an animal list item, this event listener updates the h3 text to show the name of the hovered animal. */

animalListItems.forEach((animal) => {
  animal.addEventListener("mouseenter", () => {
    h3Node.textContent = animal.textContent;
  });
});



// ----------------------------------------------

// ACTIVITY SOLUTION: https://gist.github.com/jorgeberrizbeitia/7a017d938635aa0ab894ab13ca197c38
