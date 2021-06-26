const winston = require("winston");
const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/validation")();

app.get("/", (req, res) => {
  res.redirect("/api/genres");
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}`)
);

module.exports = server;
