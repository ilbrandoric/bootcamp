
/*

Create a function named calculator that receives three parameters:

The first parameter will be the math symbol.
The second and the third parameter will be the numbers that will be used for the equation.
Inside the function, create a conditional that checks the value of the first parameter (that could be either: "+", "-", "*" or "/") and, depending on it, will console.log the correct math equation between the two remaining two parameters.

To test your code, invoke the function with different arguments. Example:
calculator("+", 5, 3)

*/

function calculator(operator, num1, num2) {
    if (operator === "+") {
        console.log(num1 + num2);
    } else if (operator === "-") {
        console.log(num1 - num2);
    } else if (operator === "*") {
        console.log(num1 * num2);
    } else if (operator === "/") {
        console.log(num1 / num2);
    } else {
        console.log("Invalid operator");
    }
}

calculator("-", 5, 3); // Invoke the function with different operators and numbers to test