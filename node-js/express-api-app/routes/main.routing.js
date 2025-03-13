const { homePage } = require("../controllers/main.controller");

const mainRouter = require("express").Router();

mainRouter.get("/", homePage);

module.exports = mainRouter;
