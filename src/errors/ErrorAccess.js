class ErrorAccess extends Error {
  constructor(message = 'Нет доступа') {
    super(message);
    this.name = 'ErrorAccess';
    this.statusCode = 403;
  }
}

module.exports.ErrorAccess = ErrorAccess;
