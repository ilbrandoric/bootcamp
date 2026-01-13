

//The below program contains a while loop that has an invalid stop condition, causing an infinite loop.

let count = 10;

while (count > 0) {
  console.log(count);
  count--;
}

console.log("END");
