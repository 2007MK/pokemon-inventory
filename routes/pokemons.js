const express = require("express");
const { Router } = express;

const { getAllPokemons } = require("../controllers/pokemonsController");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokemons);

module.exports = pokemonsRouter;
