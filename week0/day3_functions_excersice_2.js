

/*

Your task is to create a function that takes the amount of one currency and converts it to another currency.

To start, open a new pen on CodePen.
Create a function named convertDollarsToEuros that receives one parameter: dollarAmount.
The function should convert the specified amount of dollars to euros using the formula:
euros = dollars * 0.92

The function should return a number representing the amount of Euros.
To check your code, invoke the function convertDollarsToEuros and give it a number argument with the amount to convert. Then you can console.log the result. Example:

const result = convertDollarsToEuros(115);

*/

function convertDollarsToEuros(dollarAmount){
    return dollarAmount * 0.92;
}

const result = convertDollarsToEuros(115);
console.log(`${result} Euros`);

