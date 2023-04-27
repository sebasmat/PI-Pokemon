const {Pokemon} = require('../db.js');
const findAllPokemons = async ()=>{
    const pokemons = await Pokemon.findAll();
    return pokemons;
}
module.exports = findAllPokemons;