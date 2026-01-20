
/*
const message = 'Hello from the global scope!';

function sayHelloFromLocalScope() {
  const greeting = 'Hello from functional/local scope!';
  return greeting;
}

console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined because constant greeting is functionally/locally scoped (inside brackets {})

*/

/* See below how using var can be called outside the variable name the brackets {}

var name = 'Ironhacker';
if (true) {
  var name = 'Ted';
  console.log(`Name inside if statement: ${name}`);
}

console.log(`Name outside if statement: ${name}`);

// Name inside if statement: Ted
// Name outside if statement: Ted

*/



/* ===== Hoisting  ===== */



/*

When we run JS in the BROWSER (it will fail in the console), the outermost scope is the window object, where all var variables are stored as window properties. 
We call this the object environment record.

var a = 1;
console.log(window.a === 1); //=> true


*/


/* Variables declared using var are moved to the top of their scope (we say - hoisted) and initialized with a value of undefined. 
This is a hoisted example. Undifined = hoisting in this case. 

*/


// console.log(message); // => undefined
// var message = 'Hello from the global scope!';


/* 
let and const hoist, but you can't access them before the actual declaration is evaluated at runtime.
*/

// console.log(message); // => ReferenceError: Cannot access 'message' before initialization
// let message = 'Hello from the global scope!';


/* 
===== Shadowing =====

a is reassigned in the outer scope (global), while b is shadowed in the inner scope, so only a changes.

*/


let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope
}

inner();
console.log(a); // => 4
console.log(b); // => 2



