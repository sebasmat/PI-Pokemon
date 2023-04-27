const {Pokemon} = require('../db.js');
const getPokemonById = async(id)=>{
    const pokemon = await Pokemon.findByPk(id);
    return pokemon;
};
module.exports = getPokemonById; 