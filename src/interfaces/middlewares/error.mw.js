module.exports = (err, req, res, next) => {
  const status = err.status || 500;
  const errMsg = err.message || "internal server error";
  res.status(status).json({ errMsg });
};
