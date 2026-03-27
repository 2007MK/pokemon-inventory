const express = require("express");
const { Router } = express;

const pokemonsRouter = Router();

pokemonsRouter.get("/", (req, res) => {
  res.send("Pokemons:");
});

module.exports = pokemonsRouter;
