const pool = require("./Pool");

async function getAllTypes() {
  // getting the number of pokemons in each type

  const sql = `
  SELECT types.name, types.id, COUNT(pokemons.name)
  FROM types 
  LEFT JOIN pokemons ON pokemons.type_id = types.id
  GROUP BY types.name, types.id;
  `;

  const { rows } = await pool.query(sql);
  return rows;
}

async function getSpecificType(type) {
  const sql = `SELECT pokemons.*, types.name AS type
  FROM pokemons
  JOIN types ON pokemons.type_id = types.id
  WHERE types.name LIKE $1`;
  const { rows } = await pool.query(sql, [type]);
  return rows;
}

async function postNewType(type) {
  const sql = `
  INSERT INTO types (name) VALUES ($1)`;
  await pool.query(sql, [type]);
}

async function postNewPokemon(pokemon) {
  const sql = `
  INSERT INTO pokemons(name, type_id) VALUES ($1, $2);`;
  await pool.query(sql, [pokemon.pokemon_name, Number(pokemon.pokemon_type)]);
}

async function getPokemon(name) {
  if (name) {
    // something
  }

  const { rows } = await pool.query(`
    SELECT pokemons.name AS pokemon_name, types.name AS type
    FROM pokemons
    LEFT JOIN types ON types.id = pokemons.type_id
    `);
  return rows;
}

async function getCount() {
  const { rows } = await pool.query(`SELECT
  (SELECT COUNT(*) from types) as tot_types,
  (SELECT COUNT(*) from pokemons) as tot_pokes;`);
  return rows;
}
module.exports = {
  getAllTypes,
  getCount,
  getPokemon,
  getSpecificType,
  postNewType,
  postNewPokemon,
};
