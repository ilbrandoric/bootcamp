
/*

Use a loop to iterate over the phrases array and concatenate its strings to the proverb variable, in the order they appear in the array.
Use console.log() to print out the value of the proverb.

Use a loop to iterate over the phrases array backwards and concatenate its strings into the proverbReversed variable, in the reversed order.
Use console.log() to print out the value of the proverbReversed.


*/

const phrases = ["Tell me and I forget. ", "Teach me and I remember. ", "Involve me and I learn."];

let proverb = "";
let proverbReversed = "";

// Your code here:
for (i = 0; i < phrases.length; i++) {
    proverb += phrases[i];
}

for (j = phrases.length -1; j >= 0; j--) {
    proverbReversed += phrases[j];
}

console.log(proverbReversed);
console.log(proverb);
