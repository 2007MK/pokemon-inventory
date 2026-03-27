const db = require("../db/queries");

async function typesGet(req, res) {
  const types = await db.getAllTypes();
  res.render("types", { types });
}

module.exports = {
  typesGet,
};
