const { apiHome, addUser } = require("../controllers/api.controller");
const { upload } = require("./middleware/files.middleware");

const apiRouter = require("express").Router();

apiRouter.get("/", apiHome);
apiRouter.post("/add-user", upload.none(), addUser);
module.exports = apiRouter;
