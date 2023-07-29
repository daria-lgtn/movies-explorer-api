class ErrorConflict extends Error {
  constructor(message = 'Некорректные данные') {
    super(message);
    this.name = 'ErrorConflict';
    this.statusCode = 409;
  }
}

module.exports.ErrorConflict = ErrorConflict;
