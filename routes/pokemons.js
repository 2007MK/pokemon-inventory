const express = require("express");
const { Router } = express;

const {
  getAllPokemons,
  newPokemonGet,
  newPokemonPost,
} = require("../controllers/pokemonsController");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokemons);
pokemonsRouter.get("/new", newPokemonGet);
pokemonsRouter.post("/new", newPokemonPost);

module.exports = pokemonsRouter;
