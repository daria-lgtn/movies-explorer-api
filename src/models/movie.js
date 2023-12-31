const mongoose = require('mongoose');
const { URL_REGEX } = require('../constants');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEX.test(v),
      message: 'Некорректная ссылка',
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEX.test(v),
      message: 'Некорректная ссылка',
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => URL_REGEX.test(v),
      message: 'Некорректная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRu: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
