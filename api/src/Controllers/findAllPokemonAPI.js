const { Pokemon } = require('../db.js');

const findAllPokemonAPI = async (pokemons) => {
    let promises = [];
    let pokemon = [];
    pokemons.forEach((obj) => {
        let query = fetch(obj.url)
            .then(response => response.json())
            .then((data) => data);
        promises.push(query);
    });
     await Promise.all(promises)
        .then( (allData) => {  
             allData.forEach((data) => {
                console.log(data);
                const { name, types, sprites,id } = data;
                let Types = [];
                types.forEach((obj) => {
                    Types.push(obj.type.name);
                })
                const imgCard = sprites.front_default;
                const obj = { id, name, Types, imgCard }
                pokemon.push(obj);
            });
        })
        return pokemon;
}


module.exports = findAllPokemonAPI;