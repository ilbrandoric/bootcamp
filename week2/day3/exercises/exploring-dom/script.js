// To solve it activity check the HTML or the developer tools in chrome to see the DOM structure, tags, classes and ids.


/* 
======WARNING: DO NOT TRY TO RUN THIS FILE WITH NODE.JS ======
!!!!!! RUN THE CODE IN THE BROWSER CONSOLE TO SEE THE OUTPUT !!!!!!

*/



/* 

ITERATION 1: 

1. select the <h1> element from the DOM
2. save it in a variable named h1Node
3. console.log the element itself (not just the text)

*/
// output should be => <h1>Fruits and veggies</h1>

const h1Node = document.querySelector("h1");
console.log(`This is targeted with querySelector: ${h1Node}`);
console.log(h1Node);


document.querySelectorAll("h1")[0]
console.log(`This is targeted with querySelectorAll: ${h1Node}`);
console.log(h1Node);

document.getElementById("container")
console.log(`This is targeted with getElementById: ${h1Node}`);
console.log(h1Node);


/*

ITERATION 2: Console.log the text inside the main title.

*/
// output should be => Fruits and veggies
// Just the text inside the h1

const h1NodeText = document.querySelector("h1").textContent;
console.log(`This is targeted with querySelector("h1").textContent: ${h1NodeText}`);
console.log(h1NodeText);





/* ITERATION 3: Get all the FRUIT list items into a NodeList. Console.log the NodeList */
// output should be => NodeList{0: {…}, 1: {…}, 2: {…}, 3: {…}, …}

const fruitListItems = document.querySelectorAll(".fruits");
console.log(fruitListItems);


/* What is a NodeList?
A NodeList is a collection of nodes, usually returned by methods such as document.querySelectorAll().
It is similar to an array but does not have all the array methods. You can access its items using an index and it has a length property.

What is a DOM node?
A DOM node is any single point in the Document Object Model (DOM) tree. This includes elements, text, and attributes.

Difference between NodeList and HTMLCollection?
1. NodeList can contain any type of nodes (elements, text, comments), while HTMLCollection only contains element nodes.
2. NodeList can be static (snapshot) or live (updates with DOM changes), while HTMLCollection is always live.
3. NodeList supports forEach method, while HTMLCollection does not.

*/






/* ITERATION 4: Using the fruits NodeList. Console log the text of each FRUIT */

// output should be as below:
// Pear
// Grapes
// Strawberry
// Plum
// Guava

console.log("Using the fruits NodeList. Console log the text of each FRUIT");

fruitListItems.forEach((fruitItem) => {
    console.log(fruitItem.textContent);
});





/* ITERATION 5: Select the VEGGIES list items inside a NodeList and count how many list items there are. 
Console.log the total amount of vegetables. */

// output should be => 7

console.log("Select the VEGGIES list items inside a NodeList and count how many list items there are.");
const veggiesListItems = document.querySelectorAll(".veggies li");

console.log("Notice querySelectorAll \".veggies li\" targets all li inside the veggies class");
console.log(veggiesListItems);

console.log(veggiesListItems.length);



/* ITERATION 6: Use the VEGGIES list and count how many veggies start with the letter "B". */
// output should be => 3

console.log("Use the VEGGIES list with .filter, .startsWith and .length to count :");

const count = [...veggiesListItems].filter(
  item => item.textContent.trim().startsWith("B")
).length;

console.log(count);

/*

==== EXPLANATION OF THE CODE USED IN ITERATION 6 =====

[...veggiesListItems] creates clone 
.filter() filters items starting with "B"
.trim() removes whitespace in front of text
.startsWith("B") checks if text starts with "B"
.length gets total count of filtered items AFTER filtering

*/

/*
 BONUS. ITERATION 7: Using below node element, search for the h2 inside it and console.log the text inside.

 NOTE: don't use the whole document for the querySelector. Instead search inside the provided node.
const veggieContainerNode = document.querySelector('.list-veggies');

*/
// output should be => Veggies


const veggieContainerNode = document.querySelector('.list-veggies');

console.log("This is the veggieContainerNode:");
console.log(veggieContainerNode)

const h2InVeggieContainer = veggieContainerNode.querySelector("h2").textContent;

console.log("This is the h2 text inside veggieContainerNode:");
console.log(h2InVeggieContainer);

console.log("Simpler logic here:");

console.log(
  `document.querySelector('.list-veggies').querySelector('h2').textContent`);
console.log(
  document.querySelector('.list-veggies').querySelector('h2').textContent
);











// ACTIVITY SOLUTION HERE:
// https://gist.github.com/jorgeberrizbeitia/96fe32726d202677fce390b8f77ef2a7
