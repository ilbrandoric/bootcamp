
let users = ["Anahi", "Victor", "Isabela", "Diogo"];


function displayUsers(users) {

    const appDiv = document.querySelector("#app");
    const ulElement = document.createElement('ul');
    const liElement = document.createElement('li');

    appDiv.appendChild(ulElement);
    
    users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user;
    li.classList.add("user-item");
    ul.appendChild(li);
  });

};




/* Environment setup. Do not modify the below code. */
/****************************************************/
window.displayUsers = displayUsers;
/****************************************************/