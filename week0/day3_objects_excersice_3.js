const company = {
  name: "Acme Corporation",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
    country: "USA",
    buildingColor: "white"
  },
  departments: {
    sales: {
      floor: 8,
      manager: { name: "John Doe", email: "johndoe@acme.com" },
      employees: [
        { name: "Jane Smith", email: "janesmith@acme.com" },
        { name: "Bob Johnson", email: "bobjohnson@acme.com" }
      ]
    },
    marketing: {
      manager: { name: "Sara Lee", email: "saralee@acme.com" },
      employees: [
        { name: "Tim Brown", email: "timbrown@acme.com" },
        { name: "Emily Davis", email: "emilydavis@acme.com" }
      ]
    }
  }
};



// 3. Delete the nested property 'buildingColor' using dot notation
delete company.address.buildingColor;
 
// 4. Delete the nested property 'floor' using bracket notation
delete company["departments"]["sales"]["floor"];
 
// 5. Log the entire company object
console.log(company);