const express = require("express");
const pokemonsRouter = express.Router();
const { Pokemon } = require('../db.js');
const findAllPokemons = require("../Controllers/findAllPokemons.js");
const createPokemon = require('../Controllers/createPokemon.js');
const getPokemonById = require('../Controllers/getPokemonById.js');
const getPokemonByName = require('../Controllers/findPokemonByName.js');
const findAllPokemonAPI = require('../Controllers/findAllPokemonAPI.js');

pokemonsRouter.get("/", (req, res) => {
    try {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
            .then(response => response.json())
            .then((data) => {
                const pokemons = findAllPokemonAPI(data.results);
                pokemons.then((result)=>{
                    return res.status(200).json(result);
                }) 
            })
            .catch((error) => { error.message })

        // const { nombre } = req.query;
        // const allPokemons = nombre
        //     ? await getPokemonByName(nombre)   
        //     : await findAllPokemons();
        // return res.status(200).json(allPokemons);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

pokemonsRouter.post("/", async (req, res) => {
    try {
        const { id, name, image, life, attack, defense, speed, height, weight } = req.body;
        if (!id || !name || !image || !life || !attack || !defense) {
            return res.status(400).json({ error: "Datos insuficientes" });
        }
        const newPokemon = await createPokemon({ id, name, image, life, attack, defense, speed, height, weight });
        return res.status(200).json(newPokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

})

// pokemonsRouter.get("/name", async(req, res) => {
//     try {

//         const {name} = req.query;
//         console.log(req.query);
//         console.log("esto es params", req.params);
//         const pokemon = await getPokemonByName(name);
//         res.status(200).json(pokemon);
//     } catch (error) {
//         res.status(400).json({error:error.message});
//     }
// })
pokemonsRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then((data) => {
                const { name, stats, types, height, weight, sprites } = data;
                let stadistics = [];
                let Types = [];
                stats.forEach((obj) => {
                    if (obj.stat.name == "hp") {
                        stadistics.push(obj.base_stat);
                    }
                    if (obj.stat.name == "attack") {
                        stadistics.push(obj.base_stat);
                    }
                    if (obj.stat.name == "defense") {
                        stadistics.push(obj.base_stat);
                    }
                    if (obj.stat.name == "speed") {
                        stadistics.push(obj.base_stat);
                    }
                });
                types.forEach((obj) => {
                    Types.push(obj.type.name);
                })
                const [life, attack, defense, speed] = stadistics;
                const imgCard = sprites.front_default;
                const imgDetail = sprites.other.dream_world.front_default;
                res.status(200).json({ name, life, attack, defense, speed, Types, height, weight, imgCard, imgDetail });
            })

            .catch((error) => { error.message })
        // const pokemon = await getPokemonById(id);
        // if (!pokemon) return res.status(400).json({ error: "Pokemon inexistente" });
        // return res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = pokemonsRouter;