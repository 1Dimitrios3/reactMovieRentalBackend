const config = require("config");

module.exports = function (req, res, next) {
    if(!config.get("requiresAuth")) return next();
    if (!req.user.isAdmin) return res.status(403).send('Not allowed to perform this action.');
    next();
}