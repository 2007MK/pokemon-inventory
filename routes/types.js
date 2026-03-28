const express = require("express");
const { Router } = express;
const {
  typesGet,
  specificTypeGet,
  newTypeGet,
  newTypePost,
} = require("../controllers/typesController");

const typesRouter = Router();

typesRouter.get("/", typesGet);
typesRouter.get("/new", newTypeGet);
typesRouter.post("/new", newTypePost);
typesRouter.get("/:type", specificTypeGet);

module.exports = typesRouter;
