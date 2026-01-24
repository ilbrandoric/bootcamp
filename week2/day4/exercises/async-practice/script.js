console.log('*** Iteration 1 ***');

// Check below function and try to think in which order the numbers 1, 2, 3 and 4 will print.
// write them down here to compare and then uncomment the function invocation print() to see the result

function print() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  console.log(4);
}

//print();

console.log('*** Iteration 2 ***');
// Complete the function blast() that does the following:

// - it should create a timer variable that starts at 0 and will increase the timer value by 1 every second.
// - It will also check every second for the value of timer and print as below:

//    - For every value in timer divisible by 3 it prints BOOM!!
//    - For every value in timer divisible by 5 it prints a BANG!!
//    - For every value in timer divisible for 3 and 5 it prints BOOM BANG!!
//    - Any other case it will print the current timer value

// - After the value reaches 15 it should automatically stop

function blast() {}

blast();

// output should be:

/*
1
2
"BOOM!!"
4
"BANG!!"
"BOOM!!"
7
8
"BOOM!!"
"BANG!!"
11
"BOOM!!"
13
14
"BOOM BANG!!"
*/

console.log('*** Iteration 3 ***');
// Complete the function wackyRacers() that does the following:

// - The console logs inside the function should print asynchronously
// - Each console.log should print after a random time between 0 and 2 seconds each.
// - The time for each console.log should be different.
// - This means every time you execute the code, the order of print should be different.

// HINT: to solve this think about creating each asynchronous effect separatly and using Math.random for the time.
// BONUS: As a bonus add a final message that says "That's all folks! the race ended!" that should only appear after all console.logs have been printed.

function wackyRacers() {
  console.log('Peter Perfect arrived!');
  console.log('Rock Slag arrived!');
  console.log('Penelope Pitstop arrived!');
}

wackyRacers();
