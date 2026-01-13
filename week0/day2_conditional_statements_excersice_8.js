
/*

Your task is to create an if/else/else if statement working in the following way:

If the value of country is "Spain" OR "Mexico", set the value of the variable language to "es".

Else if the value of country is "France", set the value of the variable language to "fr".
Else if the value of country is "Brazil", set the value of the variable language to "pt".
Else, set the value of the variable language to "en".
To check your code, try changing the value of the variable country to "Mexico", "France", "Brazil", or any country name.

*/


let language;
const country = "Germany"; // "Mexico", "France", "Brazil"

if (country === "Spain" || country === "Mexico") {
    language = "es";
} else if (country === "Brazil") {
    language = "pt";
} else if (country === "France") {
    language = "fr";
} else {
    language = "en"
}


// Check your code:
console.log(`https://mywebsite.com/${language}`);
