const router = require('express').Router();
const route = require('../controllers/auth');
const validate = require('../validators/auth');

router.post('/signin', validate.signin, route.signin);
router.post('/signup', validate.signup, route.signup);

module.exports = router;
