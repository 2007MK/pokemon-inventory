const pool = require("./Pool");

async function getAllTypes() {
  const { rows } = await pool.query("SELECT * FROM types;");
  return rows;
}

async function getCount() {
  const { rows } = await pool.query(`SELECT
  (SELECT COUNT(*) from types) as tot_types,
  (SELECT COUNT(*) from pokemons) as tot_pokes;`);
  return rows;
}
module.exports = { getAllTypes, getCount };
