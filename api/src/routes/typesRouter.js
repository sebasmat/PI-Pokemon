const express = require("express");
const typesRouter = express.Router();
const findAllTypes = require('../Controllers/findAllTypes');

typesRouter.get("/",  (req,res)=>{
    fetch(`https://pokeapi.co/api/v2/type`)
    .then(response => response.json())
    .then(async (data) =>{
        const types = await findAllTypes(data.results);
        res.status(200).json(types);
    })
    .catch((error) =>{
        res.status(400).json({error:error.message});
    })
});

module.exports = typesRouter;