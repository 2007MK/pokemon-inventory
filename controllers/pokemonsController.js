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
  const { name, type, image } = req.body;
  await db.postNewPokemon({ name, type, image });
  res.redirect("/pokemons");
}

async function getPokemon(req, res) {
  const { id } = req.params;
  const pokemon = await db.getPokemon(id);
  res.render("specificPokemon", { pokemon });
}

async function editPokemonPost(req, res) {
  const { id } = req.params;
  const { name, type_id, image } = req.body;
  const newInfo = { name, type_id, image };
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
