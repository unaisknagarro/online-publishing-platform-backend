const router = require('express').Router();
const ctrl = require('../controllers/author');

router.get('/', ctrl.listAuthors);

module.exports = router;