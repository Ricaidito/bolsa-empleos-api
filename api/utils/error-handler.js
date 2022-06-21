const routeNotFoundHandler = (req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
};

const generalErrorHandler = (error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
  });
};

module.exports = {
  notFoundHandler: routeNotFoundHandler,
  errorHandler: generalErrorHandler,
};
