module.exports.getResErr = (errMsg, status) => {
  errMsg = errMsg || "internal server error";
  status = status || 500;
  const err = new Error(errMsg);
  err.status = status;
  return err;
};
