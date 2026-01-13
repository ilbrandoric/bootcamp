/*

Create a function named milesToKilometers that:

has 1 parameter named miles, representing the number of miles to convert into kilometers.
checks if the miles argument is provided,
if no argument is provided for miles, the function should return a number 1.60934 .
Hint: You can check this article explaining how to check if an argument is provided.

converts the number of miles into kilometers using a conversion rate where 1 mile = 1.60934 km.

returns the number of kilometers.
Important: You must use the keyword return to return the value from the function. Tests can only check the output value that your function returns. Any console.log output will be ignored.



Example - Input/Expected Output:
input: 1000
output: 1609.34

input: 5
output: 8.0467

input:
output: 1.60934



*/

function milesToKilometers (miles) {
    if (miles === undefined) {
        return 1.60934;
    } else {
        return miles * 1.60934;
    }
}

console.log(milesToKilometers());
console.log(milesToKilometers(1));
console.log(milesToKilometers(5));
console.log(milesToKilometers(10));
