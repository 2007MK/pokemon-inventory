const express = require("express");
const { Router } = express;

const {
  getAllPokemons,
  newPokemonGet,
  newPokemonPost,
  getPokemon,
  editPokemonGet,
  editPokemonPost,
} = require("../controllers/pokemonsController");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getAllPokemons);
pokemonsRouter.get("/new", newPokemonGet);
pokemonsRouter.post("/new", newPokemonPost);
pokemonsRouter.get("/:id", getPokemon);
pokemonsRouter.get("/:id/edit", editPokemonGet);
pokemonsRouter.post("/:id/edit", editPokemonPost);

module.exports = pokemonsRouter;
