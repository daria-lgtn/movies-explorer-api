const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const auth = require('../controllers/auth');

router.post('/signin', celebrate(({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
})), auth.signin);
router.post('/signup', celebrate(({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
})), auth.signup);

module.exports = router;
