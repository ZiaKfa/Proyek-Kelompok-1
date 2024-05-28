const pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'Grass' },
    { id: 2, name: 'Charmander', type: 'Fire' },
    { id: 3, name: 'Squirtle', type: 'Water' },
    { id: 4, name: 'Pikachu', type: 'Electric' },
    { id: 5, name: 'Jigglypuff', type: 'Normal' },
    { id: 6, name: 'Gengar', type: 'Ghost' },
    { id: 7, name: 'Snorlax', type: 'Normal' },
    { id: 8, name: 'Mewtwo', type: 'Psychic' },
    { id: 9, name: 'Dragonite', type: 'Dragon' },
    { id: 10, name: 'Mew', type: 'Psychic' }
]


function attack(attacker, defender, damage) {
    console.log(`${attacker.name} is attacking ${defender.name} with ${damage} damage`)
}

attack(pokemons[0], pokemons[1], 10)
