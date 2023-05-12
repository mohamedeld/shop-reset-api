const User = require("../models/user.model");
const signup = (user) => {
  return new User(user).save();
};
const signin = (email, password) => {
  return User.findOne({ email, password });
};
module.exports = { signup, signin };
