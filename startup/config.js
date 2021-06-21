const config = require("config");

module.exports = function () {
  if (!config.get("jwtPrivateKeyMaster")) {
    throw new Error("FATAL ERROR: jwtPrivateKeyMaster is not defined.");
  }
};
