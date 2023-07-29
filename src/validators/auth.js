const { celebrate, Joi } = require('celebrate');

module.exports.signin = celebrate(({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
}));

module.exports.signup = celebrate(({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
}));
