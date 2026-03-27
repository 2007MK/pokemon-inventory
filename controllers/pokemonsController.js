const db = require("../db/queries");

async function getAllPokemons(req, res) {
  const pokemons = await db.getPokemon();
  console.log(pokemons);
  res.render("pokemons", { pokemons });
}

module.exports = { getAllPokemons };
