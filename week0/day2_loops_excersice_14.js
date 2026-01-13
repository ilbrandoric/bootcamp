
/*

Create a for loop that will console.log all the numbers from 15 to 0, counting backward.
When the count reaches 11, additionally console.log "Final countdown".
Once the count reaches 0, additionally console.log "Take off!".


*/

for (let i = 15; i >= 0; i--) {
  console.log(`T-minus: ${i}`);
  if (i === 11) {
    console.log("Final countdown")
  } else if (i === 0){
    console.log("Take off! Ready for lift-off!")
  }
}


