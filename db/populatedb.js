const { Client } = require("pg");

async function main() {
  const sql = `
  CREATE TABLE IF NOT EXISTS types(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT
  );

  CREATE TABLE IF NOT EXISTS pokemons(
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT,
  type_id INTEGER,
  image TEXT);

  INSERT INTO types (name) VALUES
  ('water'),
  ('electric'),
  ('fire'),
  ('ghost');

  INSERT INTO pokemons (name, type_id, image) VALUES
  ('Pikachu', 2, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'),
  ('Gastly', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png'),
  ('Charmander', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png');
  `;

  const url = process.argv[2];
  if (!url) {
    console.error("No DB URL provided!");
    process.exit(1);
  }
  const client = new Client({
    connectionString: url,
  });
  console.log("seeding...");
  await client.connect();
  await client.query(sql);
  await client.end();
  console.log("Done!");
}

main();
