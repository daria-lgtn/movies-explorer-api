class ErrorAuthorization extends Error {
  constructor(message) {
    super(message);
    this.name = 'ErrorAuthorization';
    this.statusCode = 401;
  }
}

module.exports.ErrorAuthorization = ErrorAuthorization;
