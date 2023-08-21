const pokemonOl = document.querySelector(".pokemons")

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.order}</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.sprite}" alt="${pokemon.name}">
            </div>
        </li>
    `
}

pokeapi.getPokemons().then((pokemons = []) => {

        pokemonOl.innerHTML = pokemons.map(convertPokemonToLi).join("")


        // for (let i = 0; i < pokemons.length; i++) {
        //     const pokemon = pokemons[i];
        //     let pokemonLi = convertPokemonToLi(pokemon)
        // }
    })
    // .catch((error) => console.log(error))
    // .finally(() => {

    // })

// fetch é UMA das maneiras de fazer requisições http com js
// ele nos retorna uma promisse
// quando a gente faz uma requisição ela leva tempo, por ter todo um processo de I/O
// esse processamento é um processamento assincrono, um processamento executado em paralelo que eu n tenho um resultado na hora, eu tenho uma "promessa de uma resultado"
// promisse é um conceito mto importante!

// atraves do metodo then a gente diz "Quando a isso der certo" executar a função em parenteses
// o catch executa uma função no caso de erro
// o finally executa uma função independente do que aconteça