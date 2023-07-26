const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { URL_REGEX } = require('../constants');
const movie = require('../controllers/movie');

router.get('/', movie.getAll);

router.post('/', celebrate(({
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
})), movie.create);
router.delete('/:movieId', celebrate(({
  params: Joi.object().keys({
    movieId: Joi.string().required().hex().length(24),
  }),
})), movie.deleteById);

module.exports = router;
