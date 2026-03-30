const db = require("../db/queries");

async function typesGet(req, res) {
  const types = await db.getAllTypes();
  res.render("types", { types });
}

async function specificTypeGet(req, res) {
  const { type } = req.params;
  const pokemons = await db.getSpecificType(type);
  res.render("specificType", { type, pokemons });
}

async function specificTypeEditGet(req, res) {
  const { type } = req.params;
  res.render("editType", { type });
}

async function specificTypeEditPost(req, res) {
  const newType = req.body.type;
  const oldType = req.params.type;
  await db.editSpecificType({ newType, oldType });
  res.redirect("/types");
}

async function deleteType(req, res) {
  const { type } = req.params;
  try {
    await db.deleteType(type);
    res.redirect("/types");
  } catch (error) {
    res.status(404).send(error.message);
  }
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
  specificTypeEditGet,
  specificTypeEditPost,
  deleteType,
};
