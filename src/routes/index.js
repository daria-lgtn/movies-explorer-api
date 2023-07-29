const router = require('express').Router();
const { auth } = require('../middlewares/auth');
const { NotFoundError } = require('../errors/NotFound');

router.use('/', require('./auth'));

router.use(auth);
router.use('/users', require('./user'));
router.use('/movies', require('./movie'));

router.use((req, res, next) => next(new NotFoundError(`Некорректный маршрут ${req.url}`)));

module.exports = router;
