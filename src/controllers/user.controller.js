const userService = require("../core/services/user.service");
module.exports.signin = (req, res, next) => {
  userService
    .signin({ query: req.query })
    .then(({ message, status, user }) => {
      res.status(status).json({ message, user });
    })
    .catch((err) => next(err));
};
