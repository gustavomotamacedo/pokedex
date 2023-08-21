const pokeapi = {}

function convertApiDetailToPokemon(apiDetail) {
    const pokemon = new Pokemon()
    pokemon.name = apiDetail.name
    pokemon.order = apiDetail.id

    const types = apiDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    // essa linha acima pega a primeira posição do array

    pokemon.types = types
    pokemon.type = type

    pokemon.sprite = apiDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeapi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertApiDetailToPokemon) 
}

pokeapi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url)
        .then((response) => response.json())
        .then((responseJsonBody) => responseJsonBody.results)
        .then((pokemons) => pokemons.map(pokeapi.getPokemonDetail))
        .then((pokemonDetailRequests) => Promise.all(pokemonDetailRequests))
        .then((pokemonsDetails => pokemonsDetails))
        .catch((error) => console.log(error))
}