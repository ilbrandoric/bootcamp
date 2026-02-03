// Your task is to return the number of JavaScript developers coming from Europe.
// Source: https://www.codewars.com/kata/582746fa14b3892727000c4f/javascript

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "JavaScript",
  },
  {
    firstName: "Maia",
    lastName: "S.",
    country: "Tahiti",
    continent: "Oceania",
    age: 28,
    language: "JavaScript",
  },
  {
    firstName: "Shufen",
    lastName: "L.",
    country: "Taiwan",
    continent: "Asia",
    age: 35,
    language: "HTML",
  },
  {
    firstName: "Sumayah",
    lastName: "M.",
    country: "Tajikistan",
    continent: "Asia",
    age: 30,
    language: "CSS",
  },
];


// Search inside an array of objects

function countJSDevelopers(list) {
  const filteredPersons = list.filter(person =>
    person.language === "JavaScript" && person.continent === "Europe"
  );

  console.log(`Number of matching profiles: ${filteredPersons.length}
    `); // logs the number of matching conditions
  console.log(filteredPersons);        // Displays full matching personal details
  

  return filteredPersons.length;
}

// Run the function on list1 !--Dont forget this--!
countJSDevelopers(list1);