const { celebrate, Joi } = require('celebrate');
const { URL_REGEX } = require('../constants');

module.exports.create = celebrate(({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(URL_REGEX).required(),
    trailerLink: Joi.string().pattern(URL_REGEX).required(),
    thumbnail: Joi.string().pattern(URL_REGEX).required(),
    movieId: Joi.number().required(),
    nameRu: Joi.string().required(),
    nameEn: Joi.string().required(),
  }),
}));

module.exports.deleteById = celebrate(({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
}));
