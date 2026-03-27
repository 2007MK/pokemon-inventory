const express = require("express");
const { Router } = express;

const typesRouter = Router();

typesRouter.get("/", (req, res) => {
  res.send("TYPES");
});

module.exports = typesRouter;
