
/*

Task Instructions

Implement the function countSmilies that has one parameter - the message.
The function should return the count of how many times a smiley face :) appears in the message.

Hint: Remember that :) is two characters, so you might need to check both in separate conditions :) .

Example - Input/Expected Output:

input: "Hello :), how are you doing :) :D"
output: 2

input: "To be :D or not to be :D =)"
output: 0

input: "It is raining :(, but I don't care :) :) :). And you ? :-)"
output: 3

*/

function countSmilies (message) {
    let sum = 0;
    for (let i = 0; i < message.length; i++){
      if ((message[i] === ":") && (message[i + 1] === ")")) {
        sum += 1;
      }
    }
    return sum;
}

let message = "It is raining :(, but I don't care :) :) :). And you ? :-)";
console.log(countSmilies(message));