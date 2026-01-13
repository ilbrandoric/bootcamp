const employees = {
  "John": 25,
  "Sarah": 30,
  "Mike": 35
};

function getAge(name) {
  return employees[name];
}
console.log(getAge("John")); // outputs 25
console.log(getAge("Sarah")); // outputs 30
