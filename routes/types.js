const express = require("express");
const { Router } = express;
const {
  typesGet,
  specificTypeGet,
  newTypeGet,
  newTypePost,
  specificTypeEditPost,
  specificTypeEditGet,
} = require("../controllers/typesController");

const typesRouter = Router();

typesRouter.get("/", typesGet);
typesRouter.get("/new", newTypeGet);
typesRouter.post("/new", newTypePost);
typesRouter.get("/:type", specificTypeGet);
typesRouter.get("/:type/edit", specificTypeEditGet);
typesRouter.post("/:type/edit", specificTypeEditPost);

module.exports = typesRouter;
