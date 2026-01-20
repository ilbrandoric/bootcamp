
const tasks = [
  { title: "Pay rent", urgent: true },
  { title: "Book flight", urgent: false },
  { title: "Buy groceries" },        // <---- This task missing urgent
  { title: "Fix bug in code", urgent: true },
];

// Function below
// Filter first (keep urgent), then transform (uppercase titles).

function getUrgentTasks(tasks) {
  let result = [];

  for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i]; // Get one task at a time out of the tasks array

    // handle missing urgent
    if (task.urgent === undefined) {
      task.urgent = false;
    }

    // filter + transform
    if (task.urgent === true) {
      result.push(task.title.toUpperCase());
    }
  }

  return result;
}


console.log(getUrgentTasks(tasks));


/*

==== AI Prompt ====

“This code is supposed to return the titles of urgent tasks. 
One of the tasks is missing the urgent key. 
Can you help me understand how this might break and how I could improve it?” -Keep it simple please

The code above is a result of the interaction. It made the code 'safer' to use handling an unexpected scenario: 
no task urgency in the list. 

*/