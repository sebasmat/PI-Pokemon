const {Pokemon} = require('../db.js');
const findPokemonByName = async (nombre)=>{
    const pokemon = await Pokemon.findAll({where:{nombre}});
    return pokemon;
}
module.exports = findPokemonByName;