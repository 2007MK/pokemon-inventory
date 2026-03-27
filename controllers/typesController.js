const db = require("../db/queries");

async function typesGet(req, res) {
  const types = await db.getAllTypes();
  console.log(types);
  res.render("types", { types });
}

async function specificTypeGet(req, res) {
  const { type } = req.params;
  const pokemons = await db.getSpecificType(type);
  res.render("specificType", { title: type, pokemons });
}

module.exports = {
  typesGet,
  specificTypeGet,
};
