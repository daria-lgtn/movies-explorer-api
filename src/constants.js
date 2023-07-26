module.exports.ERROR_VALIDATION = 400;
module.exports.ERROR_NOT_FOUND = 404;
module.exports.ERROR_UNAUTHORIZED = 401;
module.exports.ERROR_FORBIDDEN = 403;
module.exports.ERROR_CONFLICT = 409;
module.exports.ERROR_SERVER = 500;
module.exports.CODE_DUPLICATE = 11000;

const { JWT_KEY = '7m5xMMNptM2C4mhTVKuuC8MxLUiMLnI' } = process.env;
module.exports.JWT_KEY = JWT_KEY;
module.exports.URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]{1,256}/;
