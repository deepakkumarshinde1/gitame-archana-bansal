require("dotenv").config();
const express = require("express");
const cors = require("cors");
let app = express();

const mainRouter = require("./routes/main.routing");
const apiRouter = require("./routes/api.routing");

// add features ==> use method => middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routing
app.use("/", mainRouter);
app.use("/api", apiRouter);

// port number
app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running on PORT ", process.env.PORT);
});
