const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const validator = require('validator');
const { ErrorAuthorization } = require('../errors/ErrorAuthorization');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'invalid email'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        throw new ErrorAuthorization('Пользователь не найден или некорректный пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new ErrorAuthorization('Пользователь не найден или некорректный пароль');
          }

          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
