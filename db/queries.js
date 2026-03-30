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
  const sql = `SELECT pokemons.name, pokemons.id, pokemons.type_id, pokemons.image, types.name AS type
  FROM pokemons
  JOIN types ON pokemons.type_id = types.id
  WHERE types.name LIKE $1`;
  const { rows } = await pool.query(sql, [type]);
  return rows;
}

async function editSpecificType({ newType, oldType }) {
  const sql = `
  UPDATE types
  SET name = $1
  WHERE name = $2`;
  await pool.query(sql, [newType, oldType]);
}

async function postNewType(type) {
  const sql = `
  INSERT INTO types (name) VALUES ($1)`;
  await pool.query(sql, [type]);
}

async function postNewPokemon(pokemon) {
  const sql = `
  INSERT INTO pokemons(name, type_id, image) VALUES ($1, $2, $3);`;
  await pool.query(sql, [pokemon.name, Number(pokemon.type), pokemon.image]);
}

async function getPokemon(id) {
  if (id) {
    const { rows } = await pool.query(
      `SELECT pokemons.name AS name, pokemons.id, pokemons.image, types.name AS type
    FROM pokemons
    LEFT JOIN types ON types.id = pokemons.type_id
    WHERE pokemons.id = $1`,
      [id],
    );
    return rows;
  }

  const { rows } = await pool.query(`
    SELECT pokemons.name AS name, pokemons.id, pokemons.image, types.name AS type
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

async function deleteType(type) {
  const check = await pool.query(
    `
    SELECT COUNT(*) FROM pokemons WHERE type_id = (SELECT id FROM types WHERE name = $1)`,
    [type],
  );

  if (Number(check.rows[0].count > 0)) {
    throw new Error(
      "Type is still in Use. Delete all the pokemons which use this type.",
    );
  }

  await pool.query(`DELETE FROM types WHERE name = $1`, [type]);
}

async function editPokemon({ id, newInfo }) {
  const sql = `
  UPDATE pokemons
  SET name = $1,
      type_id = $2,
      image = $3
  WHERE id = $4`;

  await pool.query(sql, [newInfo.name, newInfo.type_id, newInfo.image, id]);
}

async function deletePokemon(id) {
  await pool.query(
    `DELETE from pokemons
    WHERE id = $1`,
    [id],
  );
}

module.exports = {
  getAllTypes,
  getCount,
  getPokemon,
  getSpecificType,
  postNewType,
  postNewPokemon,
  editSpecificType,
  deleteType,
  editPokemon,
  deletePokemon,
};
