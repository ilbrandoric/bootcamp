const airplane = {
  manufacturer: "Boeing",
  model: "747-8",
  engines: [
    { number: 1, type: "GE Aviation GEnx-2B" },
    { number: 2, type: "GE Aviation GEnx-2B" }
  ],
  seats: {
    firstClass: {
      capacity: 30,
      amenities: ["Lie-flat seats", "Personal screens", "Wi-Fi"],
      champagneFountain: true
    },
    businessClass: {
      capacity: 60,
      amenities: ["Reclining seats", "Personal screens", "USB ports"]
    },
    economyClass: {
      capacity: 300,
      amenities: ["Standard seats", "Shared screens", "No Wi-Fi"],
      legRoom: "non-existent"    
    }
  },
  features: {
    entertainment: ["Movies", "TV shows", "Music"],
    food: ["Meals", "Snacks", "Beverages"],
    safety: ["Life vests", "Emergency exits", "First aid kit"],
    fuelType: "Fairy Dust",
  }
};


// Your code here:

// Using the dot notation, delete the nested property fuelType.
delete airplane.features.fuelType;

// Using the dot notation, delete the nested property legRoom.

delete airplane.seats.economyClass.legRoom

// Using the bracket notation, delete the nested property champagneFountain.

delete airplane["seats"]["firstClass"]["champagneFountain"]

console.log(airplane)



