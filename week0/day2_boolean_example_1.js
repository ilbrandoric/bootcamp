
// Example 1 to see how the falsy values behave when used in the boolean context with comparison and logical operators

const example1 = 0 && true;   // same as: false && true > returns 0
const example2 = -0 && false; // same as: false && false > returns -0
const example3 = true && "";  // same as: true && false > returns "" or empty space

const example4 = true || undefined;   // same as: true || false
const example5 = null || false;       // same as: false || false

const example6 = !0;      // same as: !false 
const example7 = !"";     // same as: !false


console.log(example1); // => false
console.log(example2); // => false
console.log(example3); // => false

console.log(example4); // => true
console.log(example5); // => false

console.log(example6); // => true
console.log(example7); // => true

