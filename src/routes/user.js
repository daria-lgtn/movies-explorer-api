const router = require('express').Router();
const route = require('../controllers/user');
const validator = require('../validators/user');

router.get('/me', route.getMe);
router.patch('/me', validator.updateMe, route.updateMe);

module.exports = router;
