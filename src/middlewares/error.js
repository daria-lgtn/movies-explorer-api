const { ERROR_SERVER } = require('../constants');

module.exports.errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || ERROR_SERVER;
  const message = (statusCode === ERROR_SERVER) ? 'На сервере произошла ошибка' : err.message;
  // const message = err.message

  res.status(statusCode).send({ message });
  next();
};
