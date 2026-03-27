const express = require("express");
const app = express();
require("dotenv").config();
require("ejs");
const indexRouter = require("./routes/index");
const typesRouter = require("./routes/types");
const pokemonsRouter = require("./routes/pokemons");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/types", typesRouter);
app.use("/pokemons", pokemonsRouter);

app.listen(process.env.PORT || 3000, (err) => {
  if (err) console.error(err);
  console.log("Server Started Succesfully");
});
