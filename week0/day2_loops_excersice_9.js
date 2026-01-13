

/*

Create an outer for loop that runs 4 times.

Inside of the outer loop, create an inner for loop that runs 2 times.

The outer loop should console.log the text: "+-+-+-+-+-+-+".



+-+-+-+-+-+-+
| 0 0 0 0 0 |
| 0 0 0 0 0 |
+-+-+-+-+-+-+
| 0 0 0 0 0 |
| 0 0 0 0 0 |
+-+-+-+-+-+-+
| 0 0 0 0 0 |
| 0 0 0 0 0 |
+-+-+-+-+-+-+
| 0 0 0 0 0 |
| 0 0 0 0 0 |


*/

for (let i = 0; i < 4; i++) {
    console.log("+-+-+-+-+-+-+");

    for (let j = 0; j < 2; j++) {
    console.log("| 0 0 0 0 0 |");
    }
}