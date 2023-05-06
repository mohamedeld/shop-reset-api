const errUtil = require("../../core/utils/error.util");
module.exports = (req, res, next) => {
  const err = errUtil.getResErr("not found", 404);
  next(err);
};
