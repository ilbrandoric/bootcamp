
/*

Your task is to convert the previous code example "Elevator Switchboard" into a switch statement.
To check your code, try changing the value of the variable department to "clothes", "electronics", "gardening", or any other string.

*/

let floor;
const department = "gardening"; // "clothes", "electronics", "bookstore", "gardening"


// Convert the following into a switch statement:
switch (department) {
    case "shoes":
      floor = "1st Floor";
      console.log(`Going to the ${department} department - 1st Floor.`);
      break;
    case "clothes":
      floor = "1st Floor";
      console.log(`Going to the ${department} department - ${floor}`);
      break;
    case "electronics":
      floor = "2nd Floor";
      console.log(`Going to the ${department} department - ${floor}`);
      break;
    case "bookstore":
      floor = "3rd Floor";
      console.log(`Going to the ${department} department - ${floor}`);
      break;
    case "gardening":
      floor = "3rd Floor";
      console.log(`Going to the ${department} department - ${floor}`);
      break;
    default:
      floor = "Lobby";
      console.log(`Going to the ${department} department - ${floor}`);
      break;
}

