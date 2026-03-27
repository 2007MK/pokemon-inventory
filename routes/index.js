const express = require("express");
const { Router } = express;

const { count } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", count);

module.exports = indexRouter;
