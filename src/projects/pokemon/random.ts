const MAX_POKEDEX_ID = 904;

function getRandomPokemon(plsNotThisOne?: number) {
    const pokedexNumber = Math.floor(Math.random() * MAX_POKEDEX_ID)+ 1;

    if (pokedexNumber !== plsNotThisOne) return pokedexNumber;
    return getRandomPokemon(plsNotThisOne);
}

function getVoteCandidates() {
    const pokemonOne = getRandomPokemon();
    const pokemonTwo = getRandomPokemon(pokemonOne);

    return [pokemonOne, pokemonTwo] as const;
}