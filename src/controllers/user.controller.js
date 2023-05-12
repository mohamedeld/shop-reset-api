const userService = require("../core/services/user.service");
module.exports.signin = (req, res, next) => {
  userService
    .signin({ query: req.query })
    .then(({ message, status, user }) => {
      res.status(status).json({ message, user });
    })
    .catch((err) => next(err));
};
module.exports.signup = (req, res, next) => {
  userService
    .signup({ body: req.body })
    .then((user) => {
      res.status(200).json({ message: "success signup", user });
    })
    .catch((err) => next(err));
};
