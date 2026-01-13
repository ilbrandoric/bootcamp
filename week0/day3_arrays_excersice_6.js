
//In this exercise we have an array seriesPending with some TV series.

let seriesPending = ["Breaking Bug", "Game of Drones", "Boolean 99", "Arrested Developer"];

//Add a new string element at the end of the seriesPending array. It should be the name of a TV series you would like to watch.

seriesPending.push("Stranger Strings");

for (let i = 0; i < seriesPending.length; i++) {
    console.log(seriesPending[i]);
    
    if (seriesPending[i] === "Boolean 99") {
        console.log("Found it!");
    }
}


//Remove the first element of the seriesPending array and add it at the end of seriesWatching array. 
// You can use a variable to store the removed element as seen before or try to do everything in the same line

let seriesWatching = [];
let alreadyWatched = [];
let removedSeries = (seriesPending.shift());

seriesWatching.push(removedSeries);

console.log(`

    Watching:           ${seriesWatching} 
    Pending:            ${seriesPending}
    Already Watched:    ${alreadyWatched}
    
    `);



/*

1. Create a loop that runs 4 times (from index 0 to 3).
2. On each iteration:
   - Remove the first element from seriesPending.
   - Add it to seriesWatching.
3. After the loop:
   - Log the length of both arrays.
   - seriesPending should be 0.
   - seriesWatching should be 5.

*/

for (i = 0; i < 4; i++) {

    seriesWatching.push(seriesPending.shift());
 
}


console.log(`

    Watching:           ${seriesWatching} 
    Pending:            ${seriesPending}
    Already Watched:    ${alreadyWatched}
    
    `);


alreadyWatched = seriesWatching.splice(0, seriesWatching.length); // Remove all elements from seriesWatching and add them to alreadyWatched

console.log(`

    Watching:           ${seriesWatching} 
    Pending:            ${seriesPending}
    Already Watched:    ${alreadyWatched}
    
    `);