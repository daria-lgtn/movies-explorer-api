const { celebrate, Joi } = require('celebrate');

module.exports.updateMe = celebrate(({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required().min(2).max(30),
  }),
}));
