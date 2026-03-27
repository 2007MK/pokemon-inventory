const db = require("../db/queries");

async function count(req, res) {
  const counts = await db.getCount();
  const { tot_types, tot_pokes } = counts[0];
  res.render("index", { tot_types, tot_pokes });
}

module.exports = { count };
