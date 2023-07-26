class NotFoundError extends Error {
  constructor(message = 'entity not found') {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

module.exports.NotFoundError = NotFoundError;
