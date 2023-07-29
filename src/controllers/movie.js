const Movie = require('../models/movie');
const { NotFoundError } = require('../errors/NotFound');
const { ErrorAccess } = require('../errors/ErrorAccess');
const { ErrorValidation } = require('../errors/ErrorValidation');

module.exports.getAll = (req, res, next) => {
  const userId = req.user._id;

  Movie.find({ owner: userId })
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.create = (req, res, next) => {
  const userId = req.user._id;
  // const { country, director, duration, year, description, image,
  // trailer, nameRU, nameEN, thumbnail, movieId  } = req.body;

  Movie.create({ ...req.body, owner: userId })
    .then((movie) => res.send({ data: movie }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ErrorValidation());
      } else {
        next(err);
      }
    });
};

module.exports.deleteById = (req, res, next) => {
  const { movieId } = req.params;
  const userId = req.user._id;

  Movie.findById({ _id: movieId })
    .then((movie) => {
      if (movie) {
        if (!movie.owner.equals(userId)) {
          throw new ErrorAccess();
        } else {
          return Movie.findOneAndDelete({ _id: movieId });
        }
      } else {
        throw new NotFoundError();
      }
    }).then((card) => {
      res.send({ data: card });
    })
    .catch(next);
};
