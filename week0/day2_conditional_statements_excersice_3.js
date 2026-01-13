

/*

Create an if/else statement and check:
If the price is undefined, console.log the text:
"Can't add tax if the price is undefined!"

Else, calculate and console.log the price with tax using the formula:
price + (price * tax)

To check your code, initialize the variable price with a number.

*/

const tax = 21;
//let price;
let price = 36;

if (price == undefined){
    console.log("Can't add tax if the price is undefined!");
} else {
    const priceWithTax = price + (price * tax / 100);
    console.log(`Price with tax: $${priceWithTax} USD`);
}
