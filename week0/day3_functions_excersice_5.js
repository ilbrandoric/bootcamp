
/*
Create a function named getPriceAfterTax that receives two parameters:

price which is a number
tax which is a number representing tax %.

The function should return a string representing the final price with the tax added, in the following format:
123 $

To calculate the final price use the formula: final price = price + (price * tax / 100) .
To check your code, invoke the function getPriceAfterTax passing it the required arguments. Example:
const label = getPriceAfterTax(300, 21);

*/

function getPriceAfterTax(price, tax) {
    return price + (price * tax / 100);
}

const label = getPriceAfterTax(300,21);
console.log(label)
