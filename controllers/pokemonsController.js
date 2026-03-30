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
  await db.postNewPokemon({ pokemon_name, pokemon_type });
  res.redirect("/pokemons");
}

async function getPokemon(req, res) {
  const { id } = req.params;
  const pokemon = await db.getPokemon(id);
  res.render("specificPokemon", { pokemon });
}

async function editPokemonPost(req, res) {
  const { id } = req.params;
  const { pokemon_name, type_id } = req.body;
  const newInfo = { pokemon_name, type_id };
  await db.editPokemon({ id, newInfo });
  res.redirect(`/pokemons/${id}`);
}

async function editPokemonGet(req, res) {
  const { id } = req.params;
  const pokemon = await db.getPokemon(id);
  const types = await db.getAllTypes();
  res.render("editPokemon", { pokemon, types });
}

async function deletePokemon(req, res) {
  const { id } = req.params;
  await db.deletePokemon(id);
  res.redirect("/pokemons");
}

module.exports = {
  getAllPokemons,
  newPokemonGet,
  newPokemonPost,
  getPokemon,
  editPokemonPost,
  editPokemonGet,
  deletePokemon,
};
