
// Example 2 to see how truthy and falsy values behave in conditional statements

if (2) {
  console.log("2 - truthy");
}

let name = "Ironhack";
if (name) {
  console.log('"Ironhack" - truthy');
}

/* Falsey velues are: 

0	        The number zero
-0	        The number negative zero
"", '', ``	Empty string of any kind
NaN or      Not a number is special value indicating an incorrect numerical operation. For example, dividing a number by a string (2 / "bob") generates NaN.
null	    Represent the absence of any value.
undefined	Special value that JavaScript automatically assigns to uninitialized variables.
*/

let age;
if (age) {
  console.log("undefined - falsy") //this is undefined so it won't run
}

if (0) {
  console.log("0 - falsy") //this is 0 so it won't run. See comment above for falsy values
}

let emptyString = "";
if (emptyString) {
  console.log('"" - falsy') //this is an empty string so it won't run. See comment above for falsy values
}

let score = null;
if (score) {
  console.log("null - falsy") //this is null so it won't run. See comment above for falsy values
}

let result = NaN;
if (result) {
  console.log("NaN - falsy") //this is NaN so it won't run. See comment above for falsy values
}   

// Declare a variable, without setting the initial value
let favoriteSong;

// The value is automatically set to "undefined"
console.log(favoriteSong); // ==> undefined
if (favoriteSong) {
  console.log("undefined - falsy") //this is undefined so it won't run
}

// Now let's assign a value to the variable
favoriteSong = "Bohemian Rhapsody";

console.log(favoriteSong); // ==> "Bohemian Rhapsody"
if (favoriteSong) {
  console.log('"Bohemian Rhapsody" - truthy') //this is a non-empty string so it will run
}