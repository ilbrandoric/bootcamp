
/*

Your task is to convert the previous code example "The Website Language" into a switch statement.
To check your code, try changing the value of the variable country to "Mexico", "France", "Brazil", or any country name.

*/

let language;
const country = "USA"; // "Mexico", "France", "Brazil"

switch (country) {

  case "spain":
  case "Mexico":
      language = "es";
       break;
  case "France":
      language = "fr";
      break;
  case "Brazil":
      language = "pt";
      break;
  default:
      language = "en";
      break;
}

console.log(`https://mywebsite.com/${language}`);