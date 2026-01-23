class Pokemon {
  constructor(pokemonName, pokemonType) {
    this.pokemonName = pokemonName;
    this.pokemonType = pokemonType;
  }

  attack() {
    return `${this.pokemonName} uses ${this.pokemonType} attack`;
  }
}

class Trainer {
  constructor(trainerName) {
    this.trainerName = trainerName;
    this.ownedPokemons = [];
  }
}

// * Iteration 3 *

// create the new trainer 
let trainer = new Trainer("Ash");

// create 3 new pokemons 
let pokemon1 = new Pokemon("Bulbasaur", "grass");
let pokemon2 = new Pokemon("Squirtle", "water");
let pokemon3 = new Pokemon("Charmander", "fire");

// add pokemons to trainer
trainer.ownedPokemons.push(pokemon1);
trainer.ownedPokemons.push(pokemon2);
trainer.ownedPokemons.push(pokemon3);

// TEST 1
console.log(
  '*** TEST 1. Should print the name of trainer and amount of pokemons (3) ***'
);

if (trainer && trainer.ownedPokemons) {
  console.log(
    `${trainer.trainerName} has caught ${trainer.ownedPokemons.length} Pokemons!`
  );
}

// TEST 2
console.log('*** TEST 2. Should print each of the three pokemon***')

//Notice how we need to loop inside the array of pokemons and do a forEach

console.log(
    `${trainer.trainerName} caught: `);

trainer.ownedPokemons.forEach(pokemon => {
  console.log(pokemon.pokemonName);
});

