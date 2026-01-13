

/*

Task Instructions

Implement a function named werewolfCheck that receives an argument name, which is a string and checks if it begins with "were".

If the provided name begins with 'were' the function should return a string "it is a werewolf", otherwise it should return a string "just a regular person".
⠀

Example - Input/Expected Output:
input: "werebrian"
output: "it is a werewolf"

input: "weretasha"
output: "it is a werewolf"

input: "anna"
output: "just a regular person"


*/

function werewolfCheck (name) {
    if (
        (name[0] === "w" || name[0] === "W") && 
        (name[1] === "e" || name[1] === "E") &&
        (name[2] === "r" || name[2] === "R") &&
        (name[3] === "e" || name[3] === "E")
    ) {
        return "it is a werewolf";
    } else {
        return "just a regular person";
    }
}

console.log(werewolfCheck("AerEbrian"));