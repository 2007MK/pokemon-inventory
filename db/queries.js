const pool = require("./Pool");

async function getAllTypes() {
  // getting the number of pokemons in each type

  const sql = `
  SELECT types.name, COUNT(pokemons.name)
  FROM types 
  LEFT JOIN pokemons ON pokemons.type_id = types.id
  GROUP BY types.name;
  `;

  const { rows } = await pool.query(sql);
  return rows;
}

async function getCount() {
  const { rows } = await pool.query(`SELECT
  (SELECT COUNT(*) from types) as tot_types,
  (SELECT COUNT(*) from pokemons) as tot_pokes;`);
  return rows;
}
module.exports = { getAllTypes, getCount };
