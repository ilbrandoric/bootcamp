

//Using a for loop count how many times the pair of characters <> appears in the string text.

let count = 0;
const text = "[] <> {} [] << [] <> {} [] << {} >> [] <> {} << {} >> [] <> {}";

// Your code here:

for (let i = 0; i < text.length; i++) {
    if (text[i] === '<' && text[i+1] === '>') {
        count++;
    }
}

// Check your code:
console.log("count: ", count);

