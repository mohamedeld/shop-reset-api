const userRepo = require("../repositories/user.repository");
module.exports.signin = async (req) => {
  const response = {};
  const { email, password } = req.query;
  const user = await userRepo.signin(email, password);
  response.message = user ? "success signin" : "worng email or password";
  response.status = user ? 200 : 403;
  response.user = user;
  return response;
};
