const db = require("../db/queries");

const stats = [
  { title: "Total Pokemons", value: "151" },
  { title: "Total Types", value: "12" },
  { title: "Archive Completion", value: "84%" },
  { title: "Log Entries", value: "2.3K" },
];

async function count(req, res) {
  const types = await db.getAllTypes();
  res.render("index", { types, stats });
}

module.exports = { count };
