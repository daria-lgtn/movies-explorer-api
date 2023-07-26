const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const user = require('../controllers/user');

router.get('/me', user.getMe);
router.patch('/me', celebrate(({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().required().min(2).max(30),
  }),
})), user.updateMe);

module.exports = router;
