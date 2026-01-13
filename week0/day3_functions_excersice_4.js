

/*

Create a function named getDiscountInfo that receives one parameter: employeeType which is a string.
The function should console.log the text specifying the amount of discount available:

If employeeType is equal to "part-time", console.log "10% discount"
Else if employeeType is equal to "full-time", console.log "20% discount".
Else if employeeType is equal to "manager", console.log "30% discount".
Else, console.log "No discount".

The function should not return any value, but just console.log text as explained above.
To check your code, invoke the function getDiscountInfo and give it a string argument with the employee type. Example:
getDiscountInfo("manager");

*/


function getDiscountInfo(employeeType){

    if(employeeType === "part-time") {
        console.log("10% discount")
    } else if (employeeType === "full-time"){
        console.log("20% discount")
    } else if (employeeType === "manager"){
        console.log("30% discount")
    } else {
        console.log("Sorry, no discount!")
    }
}

getDiscountInfo(""); // Invoke the function with different employee types to test