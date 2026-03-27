const db = require("../db/queries");

async function typesGet(req, res) {
  const types = await db.getAllTypes();
  console.log(types);
  res.render("types", { types });
}

module.exports = {
  typesGet,
};
