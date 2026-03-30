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
  ('grass'),
  ('ice'),     
  ('fighting'),
  ('poison'),  
  ('ground'),  
  ('flying'),  
  ('psychic'), 
  ('bug'),     
  ('rock'),    
  ('dragon'),   
  ('dark'),     
  ('steel'),
  ('fairy'); 

  INSERT INTO pokemons (name, type_id, image) VALUES
  -- GRASS (1)
  ('Bulbasaur', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'),
  ('Ivysaur', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'),
  ('Venusaur', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'),
  ('Oddish', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png'),
  ('Gloom', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png'),
  ('Vileplume', 1, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png'),

  -- ICE (2)
  ('Jynx', 2, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png'),
  ('Articuno', 2, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'),
  ('Sneasel', 2, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png'),

  -- FIGHTING (3)
  ('Machop', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png'),
  ('Machoke', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png'),
  ('Machamp', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png'),
  ('Hitmonlee', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'),
  ('Hitmonchan', 3, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png'),

  -- POISON (4)
  ('Ekans', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png'),
  ('Arbok', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png'),
  ('Zubat', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png'),
  ('Golbat', 4, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png'),

  -- GROUND (5)
  ('Diglett', 5, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png'),
  ('Dugtrio', 5, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png'),
  ('Sandshrew', 5, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png'),
  ('Sandslash', 5, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png'),

  -- FLYING (6)
  ('Pidgey', 6, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png'),
  ('Pidgeotto', 6, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'),
  ('Pidgeot', 6, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png'),
  ('Spearow', 6, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png'),

  -- PSYCHIC (7)
  ('Abra', 7, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png'),
  ('Kadabra', 7, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png'),
  ('Alakazam', 7, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png'),
  ('Drowzee', 7, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png'),

  -- BUG (8)
  ('Caterpie', 8, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png'),
  ('Metapod', 8, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png'),
  ('Butterfree', 8, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png'),
  ('Weedle', 8, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png'),
  ('Beedrill', 8, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'),

  -- ROCK (9)
  ('Geodude', 9, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png'),
  ('Graveler', 9, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png'),
  ('Golem', 9, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png'),
  ('Onix', 9, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png'),

  -- DRAGON (10)
  ('Dratini', 10, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png'),
  ('Dragonair', 10, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png'),
  ('Dragonite', 10, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png'),

  -- DARK (11)
  ('Umbreon', 11, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png'),
  ('Murkrow', 11, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png'),

  -- STEEL (12)
  ('Magnemite', 12, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png'),
  ('Magneton', 12, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png'),
  ('Steelix', 12, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png'),

  -- FAIRY (13)
  ('Clefairy', 13, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png'),
  ('Clefable', 13, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png'),
  ('Jigglypuff', 13, 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png');
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
