
//Using a for loop count how many times letters a and e appear in the string quote.

let totalA = 0;
let totalE = 0;
let count = 0;

const quote = "There are only two kinds of programming languages out there. The ones people complain about and the ones no one uses."

// Your code here:

for (let i = 0; i < quote.length; i++) {
    if (quote[i] === 'a') {
        totalA++;
    } else if (quote[i] === 'e') {
        totalE++;
    }
}

// Check your code:
console.log("Letter a: ", totalA);
console.log("Letter e: ", totalE);
