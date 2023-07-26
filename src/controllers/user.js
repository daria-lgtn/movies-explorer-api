const User = require('../models/user');
const { NotFoundError } = require('../errors/NotFound');
const { ErrorConflict } = require('../errors/ErrorConflict');
const { ErrorValidation } = require('../errors/ErrorValidation');

module.exports.getMe = (req, res, next) => {
  const userId = req.user._id;
  User.findOne({ _id: userId })
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        throw new NotFoundError();
      }
    })
    .catch(next);
};

module.exports.updateMe = (req, res, next) => {
  const userId = req.user._id;
  const { name, email } = req.body;

  User.findByIdAndUpdate(userId, {
    name, email,
  }, {
    runValidators: true,
    new: true,
  })
    .then((user) => {
      if (user) {
        res.send({ data: user });
      } else {
        throw new NotFoundError();
      }
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
