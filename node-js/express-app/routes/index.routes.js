const { home } = require("../controller/index.controller");

const router = require("express").Router();

router.get("/", home);

module.exports = router;
