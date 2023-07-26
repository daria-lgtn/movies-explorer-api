class ErrorValidation extends Error {
  constructor(message = 'Некорректные данные') {
    super(message);
    this.name = 'ErrorValidation';
    this.statusCode = 400;
  }
}

module.exports.ErrorValidation = ErrorValidation;
