
/*

Create an outer for loop that runs 3 times.

Inside of the outer loop, create an inner for loop that runs 3 times.

The outer loop should console.log the text: "+------+".

Use the inner loop to console.log the text: "| o  o |".

+------+
| o  o |
| o  o |
| o  o |
+------+
| o  o |
| o  o |
| o  o |
+------+
| o  o |
| o  o |
| o  o |

*/

for (let i = 0; i < 3; i++) {
    console.log("+------+");

    for (let j = 0; j < 3; j++) {
    console.log("| o  o |");
    }
}