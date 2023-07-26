const router = require('express').Router();
const route = require('../controllers/movie');
const validator = require('../validators/movie');

router.get('/', route.getAll);

router.post('/', validator.create, route.create);
router.delete('/:movieId', validator.deleteById, route.deleteById);

module.exports = router;
