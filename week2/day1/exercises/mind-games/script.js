
// Challenge 1
// let foo = "abc";

// function bar() {
//   foo = "xyz";
//   console.log(foo);
// }

// bar();


// console.log(foo);


// Challenge 2
// let a = 1;

// function example(a) {
//   a = 10;
//   console.log(a); // Console log 1
// }

// example(a); // <-- This is outside the function, understand this!


// console.log(a);  // Console log 2



// // Challenge 3

// This example is for hoisting. sayHi() is called before the function is declared and still works. 

// sayHi();

// function sayHi() {
//   console.log("Hi there!");
// }


//Challenge 4

// This is another way of saying update num value.

// const a = { num: 42 };
// const b = a; 

// b.num = 90;

// console.log(a);


// // Challenge 5

function magicHat(obj) {
  obj.age = 10;
  obj = { name: "Ada", age: 20 };
  return obj;
}
  
const rabbit1 = { name: "Bob", age: 30 };
const rabbit2 = magicHat(rabbit1);
  
console.log("rabbit1: ", rabbit1);
console.log("rabbit2: ", rabbit2)