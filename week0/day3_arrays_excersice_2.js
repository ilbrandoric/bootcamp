

/*

Create an array called destinations with the following destinations:
"Everest", "Yellowstone", "Victoria Falls", "Galapagos" and "Uluru".


Use console.log() to print out the entire destinations array.
Store the name of your favorite destination in the destinations array in a variable called favoriteDestination.
Store the name of your least favorite destination in the destinations array in a variable called dislikedDestination.
Use console.log() to print out the value stored in the favoriteDestination in the following format:
My favorite destination is {FAVORITE_DESTINATION}.

Use console.log() to print out the value stored in the dislikedDestination in the following format:
My least favorite destination is {DISLIKED_DESTINATION}.

*/

const destinations = ["Everest", "Yellowstone", "Victoria Falls", "Galapagos", "Uluru"];
const favoriteDestination = destinations[2];
const dislikedDestination = destinations[1];

console.log(`My favorite destination is ${favoriteDestination}.`);
console.log(`My least favorite destination is ${dislikedDestination}.`);

console.log(destinations);
console.log(destinations.length);
console.log(destinations[0]);
console.log(destinations[destinations.length - 1]);


