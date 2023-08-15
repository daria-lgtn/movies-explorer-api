const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { JWT_KEY, CODE_DUPLICATE } = require('../constants');
const { ErrorConflict } = require('../errors/ErrorConflict');
const { ErrorValidation } = require('../errors/ErrorValidation');

module.exports.signin = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_KEY);

      res.send({ token });
    })
    .catch(next);
};

module.exports.signup = (req, res, next) => {
  const {
    name, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then((user) => User.findOne({ _id: user._id }))
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, JWT_KEY);

      res.send({ token });
    })
    .catch((err) => {
      if (err.code === CODE_DUPLICATE) {
        next(new ErrorConflict('Пользователь с таким email-ом уже существует'));
      } else if (err.name === 'ValidationError') {
        next(new ErrorValidation());
      } else {
        next(err);
      }
    });
};
