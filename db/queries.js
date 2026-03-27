const pool = require("./Pool");

async function getAllTypes() {
  const { rows } = await pool.query("SELECT * FROM types");
  return rows;
}

module.exports = { getAllTypes };
