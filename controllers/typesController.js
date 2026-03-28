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

async function newTypeGet(req, res) {
  res.render("newTypeForm");
}

async function newTypePost(req, res) {
  const { type } = req.body;
  await db.postNewType(type);
  res.redirect("/types");
}

module.exports = {
  typesGet,
  specificTypeGet,
  newTypeGet,
  newTypePost,
};
