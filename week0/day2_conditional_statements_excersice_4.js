

/* 

Your task is to create an if/else statement that checks if a variable is initialized before doing something with its value.

Create an if / else statement that checks the value of the variable name:
If the value of name is undefined, set the value of greeting to "Welcome, User!".
Else set the value of greeting to "Welcome, NAME!", replacing NAME with the value from the variable name.
To check your code, try initializing the variable name with a string.

*/

let greeting;
//let name;
let name = "Lucy";

// Your code here:

if (name === undefined) {
    greeting = "Welcome, User!";
} else {
    greeting = `Welcome, ${name}!`;
}

// Check your code:
console.log(greeting);
