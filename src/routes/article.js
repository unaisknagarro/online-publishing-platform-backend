const router = require('express').Router();
const auth = require('../middleware/auth');
const ctrl = require('../controllers/article');


router.get('/', ctrl.listArticles);
router.post('/', auth, ctrl.createArticle);
router.get('/:id', ctrl.getArticle);


module.exports = router;