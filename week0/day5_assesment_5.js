
/*

Task Instructions
Implement the function named printBio which has one parameter user.

The function takes one parameter user, which is an object with the following structure:

{ 
  name: 'Bob',
  surname: 'Martin',
  age: 25,
  address: {
    country: "USA"
  }
}


and should return a formated string that looks like this:

"This is Bob Martin from USA."

*/

function printBio (user) {
   
   let fullName = `${user.name} ${user.surname}`;
   let nationality = `${user.address.country}`;

   return `This is ${fullName} from ${nationality}.`;
}

let user = { 
  name: 'Bob',
  surname: 'Martin',
  age: 25,
  address: {
    country: "USA"
  }
};

console.log(printBio(user));