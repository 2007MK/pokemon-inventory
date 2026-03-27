const express = require("express");
const { Router } = express;
const { typesGet, specificTypeGet } = require("../controllers/typesController");

const typesRouter = Router();

typesRouter.get("/", typesGet);
typesRouter.get("/:type", specificTypeGet);

module.exports = typesRouter;
