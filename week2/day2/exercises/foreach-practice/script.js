
// Use this array for all the exercises
let students = [
  { name: 'Rafa', color: 'Blue', score: 8 },
  { name: 'Elise', color: 'Pink', score: 20 },
  { name: 'Bodei', color: 'Yellow', score: 16 },
  { name: 'Nick', color: 'Red', score: 5 },
];

// console.log('*** Iteration 1 *** ');

// // Iteration 1: use the forEach method to print the name of each student. Note that each element in the array is an Object.



students.forEach(function (student) {
  console.log(student.name);
});


// // console output should be:
// /*
// Rafa
// Elise
// Bodei
// Nick
// */

// //-------------------------------------------------------

console.log('*** Iteration 2 *** ');
// Iteration 2: use the forEach method to print the color of each student that has more than 10 score

// your code here

students.forEach(function (student) {
  console.log(student.color);
});



//-------------------------------------------------------

console.log('*** BONUS *** ');


// BONUS. use the forEach methods again to add a new property to each student in the array. 
// The property name should be called "candy"
// the value should be between 1 and 100. the value should be an integer.
// after you are done, console.log the array to make sure each object includes the added property.


students.forEach(function (studentObj) {
  
    let random1to100 = Math.floor(Math.random() * 100) + 1;
    studentObj.candy = random1to100;

});

console.log(students)


console.log (`**** As a callback function ***`) //

function assignCandy(studentObj){
    let randomizer = Math.floor(Math.random() * 100) + 1;
    studentObj.candy = randomizer;
}

students.forEach(assignCandy);
console.log(students)