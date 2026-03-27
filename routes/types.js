const express = require("express");
const { Router } = express;
const { typesGet } = require("../controllers/typesController");

const typesRouter = Router();

typesRouter.get("/", typesGet);

module.exports = typesRouter;
