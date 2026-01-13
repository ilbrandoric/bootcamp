

/*

Create a function named findBootcamp that receives one parameter: country which is a string.
The function should console.log the name of the city where Ironhack has a campus:

If country is equal to "USA", console.log "Miami campus".
Else if country is equal to "France", console.log "Paris campus".
Else if country is equal to "Germany", console.log "Berlin campus".
Else, console.log "Remote".

The function should not return any value, but just console.log text as explained above.
To check your code, invoke the function findBootcamp and give it a string argument with the name of the country. Example:
findBootcamp("France");

*/

function findBootcamp(country) {
    if (country === "USA") {
        console.log("Miami campus");
    } else if (country === "France") {
        console.log("Paris campus");
    } else if (country === "Germany") {
        console.log("Berlin campus");
    } else {
        console.log("Remote");
    }
}

const result = findBootcamp("USA"); 

console.log(result);