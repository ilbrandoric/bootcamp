let myFirstName;
let myLastName;
let myFirstNameUpperCased;
let myLastNameCapitalized;
let myFullName;
let myInitials; // BONUS

console.log("Hello world");


/* *** Iteration 1 *** */
myFirstName = "hildebrando";
myLastName = "rico"

// Iteration 1 Test
console.log("myFirstName", myFirstName) 
console.log("myLastName", myLastName) 

// *********************************************



/* *** Iteration 2 *** */
myFirstNameUpperCased = myFirstName.toUpperCase()

// Iteration 2 Test
console.log("myFirstNameUpperCased", myFirstNameUpperCased) 

// *********************************************



/* *** Iteration 3 *** */
myLastNameCapitalized = myLastName[0].toUpperCase() + myLastName.slice(1)

// ...or with .chartAt() and .substring()
// myLastNameCapitalized = myLastName.charAt(0).toUpperCase() + myLastName.substring(1)



// Iteration 2 Test
console.log("myLastNameCapitalized", myLastNameCapitalized) 

// *********************************************



/* *** Iteration 4 *** */
myFullName = myFirstNameUpperCased + " " + myLastNameCapitalized

// ...or with template literals
// myFullName = `${myFirsNameCapitalized} ${myLastNameCapitalized}`

// Iteration 3 Test
console.log("myFullName", myFullName) 

// *********************************************



/* *** BONUS *** */

let positionLastName = myFullName.indexOf(" ") + 1
myInitials = `${myFullName[0]}.${myFullName[positionLastName]}.`

//BONUS Test
console.log("myInitials", myInitials) 
