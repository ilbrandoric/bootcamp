

// Create a pokemon

class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  attack(){
    return `${this.name} uses ${this.type} attack`;
  }


}

// Create a trainer

class Trainer {

  constructor(name){
    this.name = name;
    this.ownedPokemons = [];
  }

  catchPokemon(pokemon){
    this.ownedPokemons.push(pokemon) // add to array ownedPokemons
  }
}



// Test trainer creation

let trainer = new Trainer("Ash");

console.log(trainer)



// Create pokemons
let pokemon1 = new Pokemon("Bulbasaur","grass");
let pokemon2 = new Pokemon("Squirtle", "water");
let pokemon3 = new Pokemon("Charmander","water");

// add the pokemons to the trainer here

trainer.catchPokemon(pokemon1);
// ...
// ...

// TEST 1
console.log(
  '*** TEST 1. Should print the name of trainer and amount of pokemons (3) ***'
);
if (trainer && trainer.ownedPokemons) {
  console.log(
    `${trainer.name} has caught ${trainer.ownedPokemons.length} Pokemons!`
  );
}

// TEST 2
console.log('*** TEST 2. Should print each of the three pokemon attacking ***');
if (trainer && trainer.ownedPokemons) {
  for (let i = 0; i < trainer.ownedPokemons.length; i++) {
    let eachPokemon = trainer.ownedPokemons[i]
    let attackMessage = eachPokemon.attack();
    console.log(attackMessage);
  }
}
