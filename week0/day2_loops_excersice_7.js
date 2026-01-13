
//Your task is to create a program that uses the for loop to reverse the given string.

const word = "Hello";
let wordReversed = "";

for(let i = word.length - 1; i >= 0; i--) {
    wordReversed += word[i];
}
console.log(wordReversed);
