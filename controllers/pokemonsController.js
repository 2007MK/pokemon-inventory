const db = require("../db/queries");

async function getAllPokemons(req, res) {
  const pokemons = await db.getPokemon();
  res.render("pokemons", { pokemons });
}

async function newPokemonGet(req, res) {
  const types = await db.getAllTypes();
  res.render("newPokemonForm", { types });
}

async function newPokemonPost(req, res) {
  const { pokemon_name, pokemon_type } = req.body;
  console.log(pokemon_type);
  await db.postNewPokemon({ pokemon_name, pokemon_type });
  res.redirect("/pokemons");
}

module.exports = { getAllPokemons, newPokemonGet, newPokemonPost };
